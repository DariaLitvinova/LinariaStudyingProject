import { useStore } from "effector-react"
import { SyntheticEvent } from "react"
import { submitSignIn } from "../../../store/signInForm/model"
import { LayerModalFixed } from "../../LinariaComponents/LayerModal/LayerModalFixed"
import { ModalForm } from "../../LinariaComponents/ModalForm/ModalForm"
import SignInModalContent from "./SignInModalContent"
import { $signInUserModalStore, closeSignInModal } from "../../../store/signInModalStore"

const SignInModal = () => {

    const { isOpenSignInModal } = useStore($signInUserModalStore)

  const onLoginSubmit = (e: SyntheticEvent<Element, Event>) => {
    e.preventDefault()
    submitSignIn()
  }

  return (
      <LayerModalFixed
        isOpened={isOpenSignInModal}
        onClickForCloseModal={closeSignInModal}
      >
        <ModalForm width='463px' height='auto' onSubmit={onLoginSubmit}>
          <SignInModalContent />
        </ModalForm>
      </LayerModalFixed>
  )
}

export default SignInModal
