import { useStore } from "effector-react"
import { $loginModalStore, closeLoginModal } from "../../../store/loginModal"
import { SyntheticEvent } from "react"
import { submitted, validateForm } from "../../../store/loginForm/loginFormStore"
import { LayerModalFixed } from "../../LinariaComponents/LayerModal/LayerModalFixed"
import { ModalForm } from "../../LinariaComponents/ModalForm/ModalForm"
import SignInModalContent from "./SignInModalContent"

const SignInModal = () => {

    const { isOpenLoginModal } = useStore($loginModalStore)

  const onLoginSubmit = (e: SyntheticEvent<Element, Event>) => {
    e.preventDefault()
    validateForm()
    // submitted()
  }

  return (
      <LayerModalFixed
        isOpened={isOpenLoginModal}
        onClickForCloseModal={closeLoginModal}
      >
        <ModalForm width='463px' height='auto' onSubmit={onLoginSubmit}>
          <SignInModalContent />
        </ModalForm>
      </LayerModalFixed>
  )
}

export default SignInModal
