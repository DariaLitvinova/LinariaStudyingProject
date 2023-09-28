import { ModalForm } from '../../LinariaComponents/ModalForm/ModalForm'
import { LayerModalFixed } from '../../LinariaComponents/LayerModal/LayerModalFixed'
import { useStore } from 'effector-react'
import { SyntheticEvent } from 'react'
import { useForm } from 'effector-forms'
import ContactUsModalContent from './ContactUsModalContent'
import { userForm } from '../../../store/userForm/model'
import { $modalStore, closeModalForm } from '../../../store/modalStore'

const ContactUsModal = () => {
  const { isOpenModal } = useStore($modalStore)

  const { submit } = useForm(userForm)

  const onSubmit = (e: SyntheticEvent<Element, Event>) => {
    e.preventDefault()
    submit()
  }

  return (
    <LayerModalFixed
      isOpened={isOpenModal}
      onClickForCloseModal={closeModalForm}
    >
      <ModalForm width='363px' height='auto' onSubmit={onSubmit}>
        <ContactUsModalContent />
      </ModalForm>
    </LayerModalFixed>
  )
}

export default ContactUsModal
