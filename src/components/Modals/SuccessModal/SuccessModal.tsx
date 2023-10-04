import { WrapperSC } from '../../Wrapper/Wrapper.styled'
import { useForm } from 'effector-forms'
import { TypographySC } from '../../Typography/Typography.styled'
import { COLORS } from '../../../style_variables/COLORS'
import { useStore } from 'effector-react'
import { $contactUsForm } from '../../../store/contactUsForm/model'
import { MSG } from '../../../constants/constants'
import {
  AlignItems,
  JustifyContent,
} from '../../../style_variables/CSS_PROPERTIES'
import { userForm } from '../../../store/userForm/model'

const SuccessModal = () => {
  const { fields } = useForm(userForm)
  const { name } = useStore($contactUsForm)

  return (
    <WrapperSC
      position='fixed'
      width='100%'
      height='100%'
      justify={JustifyContent.Center}
      align={AlignItems.Center}
      zIndex={100}
      style={{ top: 0, left: 0 }}
    >
      <WrapperSC
        width='auto'
        bgColor={COLORS.NEW_SURFACE_ON_SURFACE_1}
        padding='20px 40px'
        borderRadius='10px'
        border={`var(${COLORS.NEW_OUTLINE_BORDER}) 4px solid`}
      >
        <TypographySC color={COLORS.NEW_SURFACE_3} size={24}>
          {name && `${name}${MSG.THANKS_REQ}`}
          {fields.name.value && `${fields.name.value}${MSG.THANKS_REQ}`}
        </TypographySC>
      </WrapperSC>
    </WrapperSC>
  )
}

export default SuccessModal
