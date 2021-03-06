require('../stylesheets/app-kitten.scss')

import ReactOnRails from 'react-on-rails'

// Box
import { DocLinkBox } from 'kitten/components/box/doc-link-box'
import { InformationBox } from 'kitten/components/box/information-box'
import { LinkBox } from 'kitten/components/box/link-box'
import { KarlInformationBox } from 'kitten/karl/box/information-box'

// Buttons
import { Button } from 'kitten/components/buttons/button'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { ButtonImage } from 'kitten/components/buttons/button-image'
import { ButtonImageWithTextAndBadge }
  from 'kitten/components/buttons/button-image-with-text-and-badge'
import { ButtonQuestionMarkIcon }
  from 'kitten/components/buttons/button-question-mark-icon'
import {
  FacebookButtonIcon,
  InstagramButtonIcon,
  LinkedinButtonIcon,
  TwitterButtonIcon,
  YoutubeButtonIcon,
  PinterestButtonIcon,
} from 'kitten/components/buttons/social-button-icon'
import {
  KarlFacebookButtonIconWords,
  KarlLinkedinButtonIconWords,
  KarlTwitterButtonIconWords,
} from 'kitten/karl/buttons/social-button-icon-words'
import { TagButton } from 'kitten/components/buttons/tag-button'
import { KarlButtonAndText } from 'kitten/karl/buttons/button'
import {
  KarlButtonIconHeart,
  KarlButtonIconNano,
} from 'kitten/karl/buttons/button-icon'
import {
  KarlButtonIconWordsLeft,
  KarlButtonIconWordsRight,
} from 'kitten/karl/buttons/button-with-icon-words'
import { KarlPaymentButtons } from 'kitten/karl/buttons/payment-button'
import { KarlButtonIconFilter } from 'kitten/karl/buttons/button-filter'
import { KarlButtonImageWithText } from 'kitten/karl/buttons/button-image-with-text'
import { KarlGarbageButton } from 'kitten/karl/buttons/garbage-button'
import { KarlStarButton } from 'kitten/karl/buttons/star-button'

// Cards
import { ArticleCard } from 'kitten/components/cards/article-card'
import { BackerCard } from 'kitten/components/cards/backer-card'
import { CrowdfundingCard } from 'kitten/components/cards/crowdfunding-card'
import { ProjectCard } from 'kitten/components/cards/project-card'
import { ProjectCreatorCard }
  from 'kitten/components/cards/project-creator-card'
import { ProjectSimilarCard }
  from 'kitten/components/cards/project-similar-card'
import { SimpleCard } from 'kitten/components/cards/simple-card'
import { KarlCartRewardCard } from 'kitten/karl/cards/cart-reward-card'
import { KarlCard } from 'kitten/karl/cards/card'
import { KarlDonationCard } from 'kitten/karl/cards/donation-card'
import { KarlRewardCard } from 'kitten/karl/cards/reward-card'
import {
  KarlSimilarProjectsCard,
  KarlSimilarProjectsWithInfosCard,
} from 'kitten/karl/cards/similar-projects-card'
import { KarlProjectSimilarLoader }
  from 'kitten/karl/cards/project-similar-card'
import { KarlVerticalCardWithAction } from 'kitten/karl/cards/vertical-card-with-action'

// Colors
import { KarlColors } from 'kitten/karl/colors/karl-colors'

// Dev
import { DevGrid } from 'kitten/components/dev/dev-grid'

// Dropdowns
import { Dropdown } from 'kitten/components/dropdowns/dropdown'
import { DropdownButton } from 'kitten/components/dropdowns/dropdown-button'
import {
  KarlPlatformSwitch,
  KarlUserMenuDropdown,
} from 'kitten/karl/organisms/dropdown'

// Footer
import { KarlFooterLendo } from 'kitten/karl/footer/footer-lendo'
import { KarlFooterKisskiss } from 'kitten/karl/footer/footer-kisskiss'

// Form
import { Checkbox } from 'kitten/components/form/checkbox'
import { CheckboxSet } from 'kitten/components/form/checkbox-set'
import { FormAmountAndCurrency }
  from 'kitten/components/form/form-amount-and-currency'
import { FormPhoneNumber } from 'kitten/components/form/form-phone-number'
import { Label } from 'kitten/components/form/label'
import { LocationInput } from 'kitten/components/form/location-input'
import { PasswordInput } from 'kitten/components/form/password-input'
import { RadioButton } from 'kitten/components/form/radio-button'
import { RadioButtonSet } from 'kitten/components/form/radio-button-set'
import { RichTextInput } from 'kitten/components/form/rich-text-input'
import { Search } from 'kitten/components/form/search'
import Select from 'react-select'
import { SelectWithState } from 'kitten/components/form/select-with-state'
import { Slider } from 'kitten/components/form/slider'
import { Switch } from 'kitten/components/form/switch'
import { TextInput } from 'kitten/components/form/text-input'
import { TextInputWithButton }
  from 'kitten/components/form/text-input-with-button'
import { TextInputWithLimit }
  from 'kitten/components/form/text-input-with-limit'
import { TextInputWithUnit } from 'kitten/components/form/text-input-with-unit'
import { KarlCheckboxError } from 'kitten/karl/form/checkbox'
import { KarlComment, KarlCommentForm } from 'kitten/karl/form/comment'
import { KarlFormActions } from 'kitten/karl/form/form-actions'
import { KarlFormRow } from 'kitten/karl/form/form-row'
import { KarlLocationInput } from 'kitten/karl/form/location-input'
import {
  KarlRadioButtonContentError,
  KarlRadioButtonError,
} from 'kitten/karl/form/radio-button'

// Grid
import { Container } from 'kitten/components/grid/container'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import {
  KarlGridInGrid,
  KarlGridSmall,
  KarlGridTwelveColumns,
  KarlGridWithOffset,
} from 'kitten/karl/grid/grid'
import {
  KarlLegoGrid,
  KarlLegoGrid12Items,
} from 'kitten/karl/grid/lego-grid'
import { KarlRow } from 'kitten/karl/grid/row'
import { KarlScrollableContainer } from 'kitten/karl/grid/scrollable-container'
import {
  KarlSideGridWithLeftAsideAndSmallSize,
  KarlSideGridWithRightAside,
} from 'kitten/karl/grid/side-grid'
import { KarlSideLayout } from 'kitten/karl/layout/side-layout'

// Header
import {
  KarlHeader,
  KarlHeaderWithSearchInput,
  KarlHeaderWithTitles,
  KarlHeaderWhenLogged,
  KarlLoggedHeaderPlatformSwitch,
  KarlLoggedHeaderUserMenu,
  KarlPhoneDropdown,
  KarlUnloggedHeaderPlatformSwitch,
} from 'kitten/karl/headers/header'
import { KarlGithubRibbon } from 'kitten/karl/headers/karl-github-ribbon'
import { KarlMenuHeader } from 'kitten/karl/headers/karl-header'

// heroes.
import { KarlHeroExamples } from 'kitten/karl/heroes/hero'

// Icons
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'
import { CbIcon } from 'kitten/components/icons/cb-icon'
import { CheckedCircleIcon } from 'kitten/components/icons/checked-circle-icon'
import { CheckedIcon } from 'kitten/components/icons/checked-icon'
import { ClockCircleIcon } from 'kitten/components/icons/clock-circle-icon'
import { ClockIcon } from 'kitten/components/icons/clock-icon'
import { CrossCircleIcon } from 'kitten/components/icons/cross-circle-icon'
import { CrossIcon } from 'kitten/components/icons/cross-icon'
import { FacebookIcon } from 'kitten/components/icons/facebook-icon'
import { GrabberIcon } from 'kitten/components/icons/grabber-icon'
import { HeartIcon } from 'kitten/components/icons/heart-icon'
import { InstrumentTagIcon } from 'kitten/components/icons/instrument-tag-icon'
import { LinkedinIcon } from 'kitten/components/icons/linkedin-icon'
import { LocationIcon } from 'kitten/components/icons/location-icon'
import { LockIcon } from 'kitten/components/icons/lock-icon'
import { MasterCardIcon } from 'kitten/components/icons/mastercard-icon'
import { MenuIcon } from 'kitten/components/icons/menu-icon'
import { QuestionMarkIcon } from 'kitten/components/icons/question-mark-icon'
import { SearchIcon } from 'kitten/components/icons/search-icon'
import { TypologyTagIcon } from 'kitten/components/icons/typology-tag-icon'
import { TwitterIcon } from 'kitten/components/icons/twitter-icon'
import { VisaIcon } from 'kitten/components/icons/visa-icon'
import { WarningCircleIcon } from 'kitten/components/icons/warning-circle-icon'
import { FilterIcon } from 'kitten/components/icons/filter-icon'

// Illustrations
import { LinkBoxIllustration }
  from 'kitten/components/illustrations/link-box-illustration'
import { LoudspeakerIllustration }
  from 'kitten/components/illustrations/loudspeaker-illustration'
import { MixIllustration }
  from 'kitten/components/illustrations/mix-illustration'
import { PhoneIllustration }
  from 'kitten/components/illustrations/phone-illustration'

// Images
import { KarlImageCropper } from 'kitten/karl/images/image-cropper'
import { KarlImageWithCaption } from 'kitten/karl/images/image-with-caption'

// Media
import { EmbedPlayer } from 'kitten/components/media/embed-player'

// Layout
import { Separator } from 'kitten/components/layout/separator'
import { KarlHorizontalStrokes } from 'kitten/karl/layout/horizontal-stroke'
import {
  KarlLineWithBigHeart,
  KarlLineWithTooltip,
} from 'kitten/karl/layout/line'
import { KarlSeparator } from 'kitten/karl/layout/separator'
import {
  KarlVerticalStroke,
  KarlTinyVerticalStroke,
  KarlBigVerticalStroke,
  KarlHugeVerticalStroke,
} from 'kitten/karl/layout/vertical-stroke'

// Lines
import { InfoLines } from 'kitten/components/lines/info-lines'

// Links
import { ExternalRichLink } from 'kitten/components/links/external-rich-link'
import { LinkList } from 'kitten/components/links/link-list'
import {
  KarlLinkList,
  KarlLinkListDark,
  KarlLinkListSelectedItem,
  KarlLinkListItemsLight,
} from 'kitten/karl/links/link-list'

// Lists
import { BulletList } from 'kitten/components/lists/bullet-list'
import { NavList } from 'kitten/components/lists/nav-list'
import { KarlTagList } from 'kitten/karl/lists/tag-list'

// Loaders
import { Loader } from 'kitten/components/loaders/loader'
import { LoaderWithParagraph }
  from 'kitten/components/loaders/loader-with-paragraph'
import { KarlLoaderInButton } from 'kitten/karl/loaders/karl-loaders'

// Meters
import { Progress } from 'kitten/components/meters/progress'
import { KarlRandomProgress } from 'kitten/karl/meters/random-progress'

// Modals
import {
  KarlModal,
  KarlModalExternalTrigger,
} from 'kitten/karl/modals/modal'

// Navigation
import { TabBar } from 'kitten/components/navigation/tab-bar'
import {
  KarlHorizontalNav,
  KarlTouchHorizontalNav,
  KarlTouchHorizontalNavWithNotification,
} from 'kitten/karl/navigation/horizontal-nav'
import { KarlPaginationExamples } from 'kitten/karl/navigation/pagination'

// Notifications
import { Alert } from 'kitten/components/notifications/alert'
import { Badge } from 'kitten/components/notifications/badge'
import {
  KarlAlert,
  KarlAlertWithButton,
  KarlAlertWithMarkdown,
} from 'kitten/karl/notifications/alert'
import { KarlIconBadge } from 'kitten/karl/notifications/icon-badge'

// Popovers
import { CallToActionPopover }
  from 'kitten/components/popovers/call-to-action-popover'
import { Popover } from 'kitten/components/popovers/popover'
import { KarlAutoTriggerCallToActionPopover }
  from 'karl/components/popovers/auto-trigger-call-to-action-popover'
import { KarlAutoTriggerPopover }
  from 'karl/components/popovers/auto-trigger-popover'
import { KarlLoudspeakerPopover }
  from 'karl/components/popovers/loudspeaker-popover'

// Pages
import { KarlBrowsing } from 'app/browsing/browsing'
import { KarlMakerWhoAmIStep } from 'app/maker/who-am-i/components/container'
import {
  KarlMenu,
  KarlMenuContent,
} from 'kitten/karl/menus/karl-menu'

// Simulators
import { LoanSimulator } from 'kitten/components/simulators/loan-simulator'
import {
  KarlLoanSimulator,
  KarlLoanSimulatorWithCommission,
  KarlLoanSimulatorWithError,
  KarlLoanSimulatorWithfeesExemption,
} from 'kitten/karl/organisms/loan-simulator'

// Steppers
import { Stepper } from 'kitten/components/steppers/stepper'

// Tooltips
import { QuestionMarkWithTooltip }
  from 'kitten/components/tooltips/question-mark-with-tooltip'
import { StaticTooltip } from 'kitten/components/tooltips/static-tooltip'
import { Tooltip } from 'kitten/components/tooltips/tooltip'
import { TooltipNew } from 'kitten/components/tooltips/tooltip-new'
import { KarlStaticTooltip } from 'kitten/karl/tooltips/static-tooltip'

// Tours
import { HeaderTour } from 'kitten/components/tours/header-tour'
import { Tour } from 'kitten/components/tours/tour'
import { TourPopover } from 'kitten/components/tours/tour-popover'
import { TourStep } from 'kitten/components/tours/tour-step'
import {
  KarlHeaderTour1,
  KarlHeaderTour2,
} from 'kitten/karl/tours/tour'

// Typography
import { Paragraph } from 'kitten/components/typography/paragraph'
import { SupTitle } from 'kitten/components/typography/sup-title'
import { Text } from 'kitten/components/typography/text'
import { Title } from 'kitten/components/typography/title'
import {
  KarlParagraph,
  KarlParagraphQuaternary,
  KarlParagraphSecondary,
  KarlParagraphTertiary,
  KarlParagraphWithLink,
} from 'kitten/karl/typography/paragraph'

// Carousel
import {
  KarlCarouselProjectCard,
} from 'kitten/karl/carousel/carousel'

ReactOnRails.register({
  // Box
  DocLinkBox,
  InformationBox,
  LinkBox,
  KarlInformationBox,

  // Buttons
  Button,
  ButtonIcon,
  ButtonImage,
  ButtonImageWithTextAndBadge,
  ButtonQuestionMarkIcon,
  FacebookButtonIcon,
  InstagramButtonIcon,
  LinkedinButtonIcon,
  YoutubeButtonIcon,
  PinterestButtonIcon,
  TagButton,
  TwitterButtonIcon,
  KarlButtonAndText,
  KarlButtonIconHeart,
  KarlButtonIconNano,
  KarlButtonIconWordsLeft,
  KarlButtonIconWordsRight,
  KarlPaymentButtons,
  KarlFacebookButtonIconWords,
  KarlLinkedinButtonIconWords,
  KarlTwitterButtonIconWords,
  KarlButtonIconFilter,
  KarlButtonImageWithText,
  KarlGarbageButton,
  KarlStarButton,

  // Colors
  KarlColors,

  // Cards
  ArticleCard,
  BackerCard,
  CrowdfundingCard,
  ProjectCard,
  ProjectCreatorCard,
  ProjectSimilarCard,
  SimpleCard,
  KarlCartRewardCard,
  KarlCard,
  KarlDonationCard,
  KarlRewardCard,
  KarlSimilarProjectsCard,
  KarlSimilarProjectsWithInfosCard,
  KarlProjectSimilarLoader,
  KarlVerticalCardWithAction,

  // Dev
  DevGrid,

  // Dropdowns
  Dropdown,
  DropdownButton,
  KarlPlatformSwitch,
  KarlUserMenuDropdown,

  // Footer
  KarlFooterLendo,
  KarlFooterKisskiss,

  // Form
  Checkbox,
  CheckboxSet,
  FormAmountAndCurrency,
  FormPhoneNumber,
  Label,
  LocationInput,
  PasswordInput,
  RadioButton,
  RadioButtonSet,
  RichTextInput,
  Search,
  Select,
  SelectWithState,
  Slider,
  Switch,
  TextInput,
  TextInputWithButton,
  TextInputWithLimit,
  TextInputWithUnit,
  KarlCheckboxError,
  KarlComment,
  KarlCommentForm,
  KarlFormActions,
  KarlFormRow,
  KarlLocationInput,
  KarlRadioButtonContentError,
  KarlRadioButtonError,

  // Grid
  Container,
  Grid,
  GridCol,
  KarlGridInGrid,
  KarlGridSmall,
  KarlGridTwelveColumns,
  KarlGridWithOffset,
  KarlLegoGrid,
  KarlLegoGrid12Items,
  KarlRow,
  KarlScrollableContainer,
  KarlSideGridWithLeftAsideAndSmallSize,
  KarlSideGridWithRightAside,
  KarlSideLayout,

  // Header
  KarlGithubRibbon,
  KarlHeader,
  KarlHeaderWithSearchInput,
  KarlHeaderWithTitles,
  KarlHeaderWhenLogged,
  KarlLoggedHeaderPlatformSwitch,
  KarlLoggedHeaderUserMenu,
  KarlMenuHeader,
  KarlPhoneDropdown,
  KarlUnloggedHeaderPlatformSwitch,

  // Heroes.
  KarlHeroExamples,

  // Icons
  ArrowIcon,
  CbIcon,
  CheckedCircleIcon,
  CheckedIcon,
  ClockCircleIcon,
  ClockIcon,
  CrossCircleIcon,
  CrossIcon,
  FacebookIcon,
  GrabberIcon,
  HeartIcon,
  InstrumentTagIcon,
  LinkedinIcon,
  LocationIcon,
  LockIcon,
  MasterCardIcon,
  MenuIcon,
  QuestionMarkIcon,
  SearchIcon,
  TypologyTagIcon,
  TwitterIcon,
  VisaIcon,
  WarningCircleIcon,
  FilterIcon,

  // Illustrations
  LinkBoxIllustration,
  LoudspeakerIllustration,
  MixIllustration,
  PhoneIllustration,

  // Images
  KarlImageCropper,
  KarlImageWithCaption,

  //Media
  EmbedPlayer,

  // Layout
  Separator,
  KarlHorizontalStrokes,
  KarlLineWithBigHeart,
  KarlLineWithTooltip,
  KarlSeparator,
  KarlVerticalStroke,
  KarlTinyVerticalStroke,
  KarlBigVerticalStroke,
  KarlHugeVerticalStroke,

  // Lines
  InfoLines,

  // Links
  ExternalRichLink,
  LinkList,
  KarlLinkList,
  KarlLinkListDark,
  KarlLinkListSelectedItem,
  KarlLinkListItemsLight,

  // Lists
  BulletList,
  NavList,
  KarlTagList,

  // Loader
  Loader,
  LoaderWithParagraph,
  KarlLoaderInButton,

  // Meters
  Progress,
  KarlRandomProgress,

  // Modals
  KarlModal,
  KarlModalExternalTrigger,

  // Navigation
  TabBar,
  KarlHorizontalNav,
  KarlTouchHorizontalNav,
  KarlTouchHorizontalNavWithNotification,
  KarlPaginationExamples,

  // Notifications
  Alert,
  Badge,
  KarlAlert,
  KarlAlertWithButton,
  KarlAlertWithMarkdown,
  KarlIconBadge,

  // Popovers
  CallToActionPopover,
  Popover,
  KarlAutoTriggerCallToActionPopover,
  KarlAutoTriggerPopover,
  KarlLoudspeakerPopover,

  // Pages
  KarlBrowsing,
  KarlMakerWhoAmIStep,
  KarlMenu,
  KarlMenuContent,

  // Simulators
  LoanSimulator,
  KarlLoanSimulator,
  KarlLoanSimulatorWithCommission,
  KarlLoanSimulatorWithError,
  KarlLoanSimulatorWithfeesExemption,

  // Steppers
  Stepper,

  // Tooltips
  QuestionMarkWithTooltip,
  StaticTooltip,
  Tooltip,
  TooltipNew,
  KarlStaticTooltip,

  // Tours
  HeaderTour,
  Tour,
  TourPopover,
  TourStep,
  KarlHeaderTour1,
  KarlHeaderTour2,

  // Typography
  Paragraph,
  SupTitle,
  Text,
  Title,
  KarlParagraph,
  KarlParagraphQuaternary,
  KarlParagraphSecondary,
  KarlParagraphTertiary,
  KarlParagraphWithLink,

  // Carousel
  KarlCarouselProjectCard,
})
