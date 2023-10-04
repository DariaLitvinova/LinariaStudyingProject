import { ModalForm } from '../../ModalForm/ModalForm'
import { LayerModalFixed } from '../../LayerModal/LayerModalFixed'
import { useStore } from 'effector-react'
import { SyntheticEvent } from 'react'
import { useForm } from 'effector-forms'
import ContactUsModalContentForms from './ContactUsModalContentForms'
import { userForm } from '../../../store/userForm/model'
import {
  $userModalStore,
  closeUserModalForm,
} from '../../../store/userFormModalStore'

const ContactUsModalForms = () => {
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
        <ContactUsModalContentForms />
      </ModalForm>
    </LayerModalFixed>
  )
}

export default ContactUsModalForms
