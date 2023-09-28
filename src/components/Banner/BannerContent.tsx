import PrimarySquareButton from '../Buttons/PrimarySquareButton'
import { AbsoluteWrapper } from '../LinariaComponents/AbsoluteWrapper'
import { Block } from '../LinariaComponents/Block'
import AdditionalInfoSection from './BannerContent/AdditionalInfoSection'
import ButtonsSection from './BannerContent/ButtonsSection'
import CreatorSection from './BannerContent/CreatorSection'
import MovieTitleSection from './BannerContent/MovieTitleSection'
import {
  $isSuccessModal,
  closeModalSuccess,
} from '../../store/successModalStore'
import { useStore } from 'effector-react'
import { useEffect } from 'react'
import { openModalForm } from '../../store/modalStore'
import { openLoginModal } from '../../store/loginModal'
import SuccessModal from '../Modals/SuccessModal'
import ContactUsModal from '../Modals/ContactUsModal/ContactUsModal'
import SignInModal from '../Modals/SignInModal/SignInModal'

const BannerContent = () => {
  const isSuccess = useStore($isSuccessModal)

  useEffect(() => {
    if (isSuccess) {
      setTimeout(closeModalSuccess, 5000)
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
        <PrimarySquareButton text='Contact us' onClick={openModalForm} />
        <PrimarySquareButton text='Sign In' onClick={openLoginModal} />
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
