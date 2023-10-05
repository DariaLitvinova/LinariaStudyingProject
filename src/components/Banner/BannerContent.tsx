import PrimarySquareButton from '../Buttons/PrimarySquareButton'
import { WrapperSC } from '../Wrapper/Wrapper.styled'
import AdditionalInfoSection from './BannerSections/AdditionalInfoSection'
import ButtonsSection from './BannerSections/ButtonsSection'
import CreatorSection from './BannerSections/CreatorSection'
import MovieTitleSection from './BannerSections/MovieTitleSection'
import { useStore } from 'effector-react'
import SuccessModal from '../Modals/SuccessModal/SuccessModal'
import ContactUsModalForms from '../Modals/ContactUsModalForms/ContactUsModalForms'
import { $isSuccessModal } from '../../store/successModalStore'
import { openUserModalForm } from '../../store/userFormModalStore'
import { openContactUsModal } from '../../store/contactUsModalStore'
import { BTN_TITLES } from '../../constants/constants'
import { AbsoluteWrapperSC } from '../Wrapper/AbsoluteWrapper.styled'
import {
  AlignItems,
  JustifyContent,
  Orientation,
} from '../../style_variables/CSS_PROPERTIES'
import ContactUsModal from '../Modals/ContactUsModal/ContactUsModal'

const BannerContent = () => {
  const isSuccess = useStore($isSuccessModal)

  return (
    <WrapperSC
      gap='52px'
      width='817px'
      justify={JustifyContent.FlexEnd}
      align={AlignItems.FlexStart}
    >
      <AbsoluteWrapperSC
        orientation={Orientation.Row}
        gap='10px'
        top='20px'
        right='20px'
      >
        <PrimarySquareButton
          text={BTN_TITLES.ContactUsForms}
          onClick={openUserModalForm}
        />
        <PrimarySquareButton
          text={BTN_TITLES.ContactUs}
          onClick={openContactUsModal}
        />
      </AbsoluteWrapperSC>

      <CreatorSection />
      <MovieTitleSection />
      <ButtonsSection />
      <AdditionalInfoSection />

      {isSuccess && <SuccessModal />}

      <ContactUsModalForms />
      <ContactUsModal />
    </WrapperSC>
  )
}

export default BannerContent
