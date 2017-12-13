import React from 'react'
import ResizeObserver from 'resize-observer-polyfill'

import CarouselPage from 'kitten/components/carousel/carousel-page'

const getDataForPage = (data, indexPage, numColumns) => {
  const startIndex = indexPage * numColumns
  return data.slice(startIndex, startIndex + numColumns)
}

export default class CarouselInner extends React.Component {

  onResizeObserve = ([entry]) => {
    const widthInner = entry.contentRect.width
    this.props.onResizeInner(widthInner)
  }

  componentDidMount () {
    this.observer = new ResizeObserver(this.onResizeObserve)
    this.observer.observe(this.refs.carouselInner)
  }

  componentWillUnmount () {
    this.observer.disconnect()
  }

  render() {
    const { data, itemMinWidth, renderItem, indexPageVisible, numColumns, numPages, itemMarginBetween, siblingPageVisible } = this.props

    const rangePage = [...Array(numPages).keys()]

    return (
      <div
        ref="carouselInner"
        style={{
          ...styles.carouselInner,
          paddingLeft: siblingPageVisible ? (itemMarginBetween * 2) : 0,
          paddingRight: siblingPageVisible ? (itemMarginBetween * 2) : 0,
        }}
      >
        {
          rangePage.map((index) =>
            <div
              key={index}
              style={{
                ...styles.carouselPageContainer,
                marginLeft: index ? itemMarginBetween : 0,
                transform: `translateX(-${indexPageVisible * 100}%) translateX(-${indexPageVisible * itemMarginBetween}px)`,
              }}
            >
              <CarouselPage
                data={getDataForPage(data, index, numColumns)}
                numColumns={numColumns}
                itemMinWidth={itemMinWidth}
                itemMarginBetween={itemMarginBetween}
                renderItem={renderItem}
              />
            </div>
          )
        }
      </div>
    )
  }

}

const styles = {
  carouselInner: {
    display: 'flex',
    flexDirect: 'row',
    overflowX: 'hidden',
  },
  carouselPageContainer: {
    width: '100%',
    flexShrink: 0,
    transition: 'transform ease-in-out 600ms',
  },
}
