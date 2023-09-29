import PrimarySquareButton from '../Buttons/PrimarySquareButton'
import { AbsoluteWrapper } from '../LinariaComponents/AbsoluteWrapper'
import { Block } from '../LinariaComponents/Block'
import AdditionalInfoSection from './BannerSections/AdditionalInfoSection'
import ButtonsSection from './BannerSections/ButtonsSection'
import CreatorSection from './BannerSections/CreatorSection'
import MovieTitleSection from './BannerSections/MovieTitleSection'
import { useStore } from 'effector-react'
import { useEffect } from 'react'
import SuccessModal from '../Modals/SuccessModal'
import ContactUsModal from '../Modals/ContactUsModal/ContactUsModal'
import SignInModal from '../Modals/SignInModal/SignInModal'
import {
  $isSuccessModal,
  closeModalSuccess,
} from '../../store/successModalStore'
import { openUserModalForm } from '../../store/userFormModalStore'
import { openSignInModal } from '../../store/signInModalStore'
import { BTN_TITLES } from '../../constants/constants'

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
    <Block gap={52} width='817px' justify='flex-end' align='flex-start'>
      <AbsoluteWrapper
        orientation='horizontal'
        gap={10}
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
      </AbsoluteWrapper>

      <CreatorSection />
      <MovieTitleSection />
      <ButtonsSection />
      <AdditionalInfoSection />

      {isSuccess && <SuccessModal />}

      <ContactUsModal />
      <SignInModal />
    </Block>
  )
}

export default BannerContent
