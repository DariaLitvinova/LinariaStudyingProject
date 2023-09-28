import PrimarySquareButton from '../Buttons/PrimarySquareButton'
import { AbsoluteWrapper } from '../LinariaComponents/AbsoluteWrapper'
import { Block } from '../LinariaComponents/Block'
import AdditionalInfoSection from './BannerContent/AdditionalInfoSection'
import ButtonsSection from './BannerContent/ButtonsSection'
import CreatorSection from './BannerContent/CreatorSection'
import MovieTitleSection from './BannerContent/MovieTitleSection'
import { ModalForm } from '../LinariaComponents/ModalForm/ModalForm'
import { LayerModalFixed } from '../LinariaComponents/LayerModal/LayerModalFixed'
import {
  $isSuccessModal,
  closeModalSuccess,
} from '../../store/successModalStore'
import { useStore } from 'effector-react'
import { SyntheticEvent, useEffect } from 'react'
import { useForm } from 'effector-forms'
import ModalContent from './ModalContent'
import { Typography } from '../LinariaComponents/Typography'
import { COLORS } from '../../style_variables/COLORS'
import { userForm } from '../../store/userForm/model'
import { $modalStore, closeModalForm, openModalForm } from '../../store/modalStore'

const BannerContent = () => {
  const { isOpenModal } = useStore($modalStore)

  const isSuccess = useStore($isSuccessModal)

  useEffect(() => {
    if (isSuccess) {
      setTimeout(closeModalSuccess, 5000)
    }
  }, [isSuccess])

  const { fields, submit } = useForm(userForm)

  const onSubmit = (e: SyntheticEvent<Element, Event>) => {
    e.preventDefault()
    submit()
  }

  return (
    <Block gap={52} width='817px' justify='flex-end' align='flex-start'>
      <CreatorSection />
      <MovieTitleSection />
      <ButtonsSection />
      <AdditionalInfoSection />
      {isSuccess && (
        <Block
          position='fixed'
          width='100%'
          height='100%'
          justify='center'
          align='center'
          zIndex={100}
          style={{ top: 0, left: 0 }}
        >
          <Typography
            color={COLORS.NEW_SURFACE_3}
            size={24}
            style={{
              background: 'white',
              padding: '20px 40px',
              borderRadius: '10px',
              boxSizing: 'border-box',
              border: `var(${COLORS.NEW_OUTLINE_BORDER}) 4px solid`,
            }}
          >
            {fields.name.value}, thanks for your request!
          </Typography>
        </Block>
      )}
      <AbsoluteWrapper top='20px' right='20px'>
        <PrimarySquareButton text='Contact us' onClick={openModalForm} />
      </AbsoluteWrapper>
      <LayerModalFixed
        isOpened={isOpenModal}
        onClickForCloseModal={closeModalForm}
      >
        <ModalForm width='363px' height='auto' onSubmit={onSubmit}>
          <ModalContent />
        </ModalForm>
      </LayerModalFixed>
    </Block>
  )
}

export default BannerContent
