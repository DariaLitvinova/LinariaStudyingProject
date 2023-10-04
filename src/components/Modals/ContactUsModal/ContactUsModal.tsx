import { useStore } from "effector-react"
import { SyntheticEvent } from "react"
import { submitContactUs } from "../../../store/contactUsForm/model"
import { LayerModalFixed } from "../../LayerModal/LayerModalFixed"
import { ModalForm } from "../../ModalForm/ModalForm"
import ContactUsModalContent from "./ContactUsModalContent"
import { $contactUsUserModalStore, closeContactUsModal } from "../../../store/contactUsModalStore"

const ContactUsModal = () => {

    const { isOpenContactUsModal } = useStore($contactUsUserModalStore)

  const onLoginSubmit = (e: SyntheticEvent<Element, Event>) => {
    e.preventDefault()
    submitContactUs()
  }

  return (
      <LayerModalFixed
        isOpened={isOpenContactUsModal}
        onClickForCloseModal={closeContactUsModal}
      >
        <ModalForm width='463px' height='auto' onSubmit={onLoginSubmit}>
          <ContactUsModalContent />
        </ModalForm>
      </LayerModalFixed>
  )
}

export default ContactUsModal
