import React from 'react'
import renderer from 'react-test-renderer'
import { mediaQueries } from 'kitten/hoc/media-queries'

const SimpleComponent = ({
  viewportIsMobile,
  viewportIsTabletOrLess,
  viewportIsSOrLess,
  myCustomMediaQuery,
  ...props
}) => {
  return <div title="Test me!" {...props} />
}

const mockAddListener = jest.fn()
const mockRemoveListener = jest.fn()

const createMockMediaMatcher = matches => () => {
  return {
    matches,
    addListener: mockAddListener,
    removeListener: mockRemoveListener,
  }
}

describe('mediaQueries()', () => {
  const originalMatchMedia = window.matchMedia
  let SimpleComponentWithMediaQueries
  let component
  let componentSnapshot

  beforeEach(() => {
    window.matchMedia = createMockMediaMatcher(false)
  })

  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })

  describe('by default', () => {
    beforeEach(() => {
      SimpleComponentWithMediaQueries = mediaQueries(SimpleComponent, {
        viewportIsMobile: true,
        viewportIsTabletOrLess: true,
        viewportIsSOrLess: true,
      })
      component = mount(<SimpleComponentWithMediaQueries />)
      componentSnapshot = renderer
        .create(<SimpleComponentWithMediaQueries />)
        .toJSON()
    })

    it('renders the wrapped component', () => {
      expect(componentSnapshot).toMatchSnapshot()
    })

    it('pushes media queries props to wrapped component', () => {
      const wrappedComponent = component.find(SimpleComponent).first()

      expect(wrappedComponent.prop('viewportIsMobile')).toBeFalsy()
      expect(wrappedComponent.prop('viewportIsTabletOrLess')).toBeFalsy()
      expect(wrappedComponent.prop('viewportIsSOrLess')).toBeFalsy()
    })

    it('attaches listeners', () => {
      expect(mockAddListener).toHaveBeenCalled()
    })

    it('removes listeners', () => {
      component.instance().componentWillUnmount()
      expect(mockRemoveListener).toHaveBeenCalled()
    })
  })

  describe('with tablet or less version', () => {
    beforeEach(() => {
      window.matchMedia = createMockMediaMatcher(true)
      SimpleComponentWithMediaQueries = mediaQueries(SimpleComponent, {
        viewportIsTabletOrLess: true,
      })
      component = mount(<SimpleComponentWithMediaQueries />)
    })

    it('pushes media queries props to wrapped component', () => {
      const wrappedComponent = component.find(SimpleComponent).first()

      expect(wrappedComponent.prop('viewportIsMobile')).toBeFalsy()
      expect(wrappedComponent.prop('viewportIsTabletOrLess')).toBeTruthy()
      expect(wrappedComponent.prop('viewportIsSOrLess')).toBeFalsy()
    })
  })

  describe('with S or less version', () => {
    beforeEach(() => {
      window.matchMedia = createMockMediaMatcher(true)
      SimpleComponentWithMediaQueries = mediaQueries(SimpleComponent, {
        viewportIsSOrLess: true,
      })
      component = mount(<SimpleComponentWithMediaQueries />)
    })

    it('pushes media queries props to wrapped component', () => {
      const wrappedComponent = component.find(SimpleComponent).first()

      expect(wrappedComponent.prop('viewportIsMobile')).toBeFalsy()
      expect(wrappedComponent.prop('viewportIsTabletOrLess')).toBeFalsy()
      expect(wrappedComponent.prop('viewportIsSOrLess')).toBeTruthy()
    })
  })

  describe('with custom media query', () => {
    beforeEach(() => {
      window.matchMedia = createMockMediaMatcher(true)
      SimpleComponentWithMediaQueries = mediaQueries(SimpleComponent, {
        myCustomMediaQuery: '(min-width: 1140px)',
      })
      component = mount(<SimpleComponentWithMediaQueries />)
    })

    it('pushes media queries props to wrapped component', () => {
      const wrappedComponent = component.find(SimpleComponent).first()

      expect(wrappedComponent.prop('myCustomMediaQuery')).toBeDefined()
      expect(wrappedComponent.prop('viewportIsMobile')).toBeFalsy()
      expect(wrappedComponent.prop('viewportIsTabletOrLess')).toBeFalsy()
      expect(wrappedComponent.prop('viewportIsSOrLess')).toBeFalsy()
    })
  })
})
