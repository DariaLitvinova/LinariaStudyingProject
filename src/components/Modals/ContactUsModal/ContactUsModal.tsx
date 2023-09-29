import { ModalForm } from '../../LinariaComponents/ModalForm/ModalForm'
import { LayerModalFixed } from '../../LinariaComponents/LayerModal/LayerModalFixed'
import { useStore } from 'effector-react'
import { SyntheticEvent } from 'react'
import { useForm } from 'effector-forms'
import ContactUsModalContent from './ContactUsModalContent'
import { userForm } from '../../../store/userForm/model'
import {
  $userModalStore,
  closeUserModalForm,
} from '../../../store/userFormModalStore'

const ContactUsModal = () => {
  const { isOpenModal } = useStore($userModalStore)

  const { submit } = useForm(userForm)

  const onSubmit = (e: SyntheticEvent<Element, Event>) => {
    e.preventDefault()
    submit()
  }

  return (
    <LayerModalFixed
      isOpened={isOpenModal}
      onClickForCloseModal={closeUserModalForm}
    >
      <ModalForm width='363px' height='auto' onSubmit={onSubmit}>
        <ContactUsModalContent />
      </ModalForm>
    </LayerModalFixed>
  )
}

export default ContactUsModal
