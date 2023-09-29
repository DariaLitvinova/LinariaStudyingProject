import { Block } from '../LinariaComponents/Block'
import { useForm } from 'effector-forms'
import { Typography } from '../LinariaComponents/Typography'
import { COLORS } from '../../style_variables/COLORS'
import { userForm } from '../../store/userForm/model'
import { useStore } from 'effector-react'
import { $signInForm } from '../../store/signInForm/model'
import { MSG } from '../../constants/constants'

const SuccessModal = () => {
  const { fields } = useForm(userForm)
  const { login } = useStore($signInForm)

  const name = fields.name.value;

  return (
   
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
            {name ? `${name}${MSG.THANKS_REQ}` : `${MSG.SIGNED_AS}${login}`}
          </Typography>
        </Block>
  )
}

export default SuccessModal
