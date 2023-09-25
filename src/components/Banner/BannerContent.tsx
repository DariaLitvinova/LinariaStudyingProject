import { useState } from 'react'
import PrimarySquareButton from '../Buttons/PrimarySquareButton'
import { AbsoluteWrapper } from '../LinariaComponents/AbsoluteWrapper'
import { Block } from '../LinariaComponents/Block'
import AdditionalInfoSection from './BannerContent/AdditionalInfoSection'
import ButtonsSection from './BannerContent/ButtonsSection'
import CreatorSection from './BannerContent/CreatorSection'
import MovieTitleSection from './BannerContent/MovieTitleSection'
import { ModalForm } from '../LinariaComponents/ModalForm/ModalForm'
import { LayerModalFixed } from '../LinariaComponents/LayerModal/LayerModalFixed'
import { Input } from '../LinariaComponents/Input/Input'


const BannerContent = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const openModalForm = () => setIsOpenModal(true)
  const closeModalForm = () => setIsOpenModal(false)

  const onSubmit = () => console.log('submit')

  return (
    <Block gap={52} width='817px' justify='flex-end' align='flex-start'>
      <CreatorSection />
      <MovieTitleSection />
      <ButtonsSection />
      <AdditionalInfoSection />
      <AbsoluteWrapper top='20px' right='20px'>
        <PrimarySquareButton text='Contact us' onClick={openModalForm} />
      </AbsoluteWrapper>
      <LayerModalFixed
        isOpened={isOpenModal}
        // onClickForClosingPopup={closeModalForm}
      >
        <ModalForm width='343px' height='auto' onSubmit={onSubmit}>
          <Input
            name='name'
            type='text'
            label='Name'
            placeholder='Enter your Name'
            height='48px'
          />
          <Input
            name='name'
            type='text'
            label='Email'
            placeholder='Enter your Email'
            height='48px'
          />
          <Input
            name='name'
            type='text'
            label='Phone'
            placeholder='Enter your Phone'
            height='48px'
          />
          <PrimarySquareButton text='Contact us' />
        </ModalForm>
      </LayerModalFixed>
    </Block>
  )
}

export default BannerContent
