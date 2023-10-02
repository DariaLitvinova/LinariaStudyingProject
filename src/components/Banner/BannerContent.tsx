import PrimarySquareButton from '../Buttons/PrimarySquareButton'
import { WrapperSC } from '../Wrapper/Wrapper.styled'
import AdditionalInfoSection from './BannerSections/AdditionalInfoSection'
import ButtonsSection from './BannerSections/ButtonsSection'
import CreatorSection from './BannerSections/CreatorSection'
import MovieTitleSection from './BannerSections/MovieTitleSection'
import { useStore } from 'effector-react'
import { useEffect } from 'react'
import SuccessModal from '../Modals/SuccessModal/SuccessModal'
import ContactUsModal from '../Modals/ContactUsModal/ContactUsModal'
import SignInModal from '../Modals/SignInModal/SignInModal'
import {
  $isSuccessModal,
  closeModalSuccess,
} from '../../store/successModalStore'
import { openUserModalForm } from '../../store/userFormModalStore'
import { openSignInModal } from '../../store/signInModalStore'
import { BTN_TITLES } from '../../constants/constants'
import { AbsoluteWrapperSC } from '../Wrapper/AbsoluteWrapper.styled'
import {
  AlignItems,
  JustifyContent,
  Orientation,
} from '../../style_variables/CSS_PROPERTIES'

const BannerContent = () => {
  const isSuccess = useStore($isSuccessModal)

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        closeModalSuccess()
      }, 5000)
    }
  }, [isSuccess])

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
          text={BTN_TITLES.ContactUs}
          onClick={openUserModalForm}
        />
        <PrimarySquareButton
          text={BTN_TITLES.SignIn}
          onClick={openSignInModal}
        />
      </AbsoluteWrapperSC>

      <CreatorSection />
      <MovieTitleSection />
      <ButtonsSection />
      <AdditionalInfoSection />

      {isSuccess && <SuccessModal />}

      <ContactUsModal />
      <SignInModal />
    </WrapperSC>
  )
}

export default BannerContent
