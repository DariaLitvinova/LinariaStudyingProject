import PrimarySquareButton from '../../Buttons/PrimarySquareButton'
import { WrapperSC } from '../../Wrapper/Wrapper.styled'
import { useStore } from 'effector-react'
import { RadioButtonGroup } from '../../Radio/RadioButtonGroup'
import { RadioButton } from '../../Radio/RadioButton'
import {
  BTN_TITLES,
  COUNTRIES,
  GENDER_RADIO_VALUES,
} from '../../../constants/constants'
import { Dropdown } from '../../Dropdown/Dropdown'
import { DropdownItem } from '../../Dropdown/DropdownItem'
import { Checkbox } from '../../Checkbox/Checkbox'
import { COLORS } from '../../../style_variables/COLORS'
import { LoaderSC } from '../../Loader/Loader.styled'
import {
  $signInForm,
  sendSignInFormFx,
  setSignInField,
} from '../../../store/signInForm/model'
import { Field } from './Field/Field'

const SignInModalContent = () => {
  const { country, gender, errors } = useStore($signInForm)
  const pendingSignIn = useStore(sendSignInFormFx.pending)

  const handleChangeCountry = setSignInField.prepend((value: string) => ({
    key: 'country',
    value,
  }))

  const handleChangeGender = setSignInField.prepend((value: string) => ({
    key: 'gender',
    value,
  }))

  const handleChangeConfirmation = setSignInField.prepend((value: boolean) => ({
    key: 'confirmation',
    value,
  }))

  return (
    <>
      <Field name='login' label='Login' type='text' />
      <Field name='password' type='password' label='Password' />
      <Field name='repeatPassword' type='password' label='Repeat Password' />

      <Dropdown
        name='country'
        label='Country'
        value={country}
        disabled={pendingSignIn}
        invalid={!!errors.country}
        errorText={errors.country}
        onChange={(e) => handleChangeCountry(e.target.value)}
        placeholder='Select your Country'
      >
        {COUNTRIES.map((country, index) => (
          <DropdownItem
            key={`${index}${country}`}
            value={country}
            text={country}
          />
        ))}
      </Dropdown>

      <RadioButtonGroup title='Gender' errorText={errors.gender}>
        {GENDER_RADIO_VALUES.map(({ id, value, label }) => {
          return (
            <RadioButton
              key={id}
              id={value}
              name='gender'
              title={label}
              value={value}
              disabled={pendingSignIn}
              invalid={!!errors.gender}
              selectedValue={gender}
              onChange={(e) => handleChangeGender(e.target.value)}
            />
          )
        })}
      </RadioButtonGroup>

      <WrapperSC
        height='1px'
        bgColor={COLORS.NEW_SURFACE_ON_SURFACE_2}
        margin='10px 0'
      />
      <Checkbox
        name='confirmation'
        id='confirmation'
        title='I agree with the processing of personal data'
        disabled={pendingSignIn}
        invalid={!!errors.confirmation}
        errorText={errors.confirmation}
        onChange={(e) => handleChangeConfirmation(e.target.checked)}
      />
      <WrapperSC
        height='1px'
        bgColor={COLORS.NEW_SURFACE_ON_SURFACE_2}
        margin='10px 0'
      />

      <PrimarySquareButton
        disabled={pendingSignIn}
        text={BTN_TITLES.SignIn}
        type='submit'
      >
        {pendingSignIn ? <LoaderSC /> : null}
      </PrimarySquareButton>
    </>
  )
}

export default SignInModalContent
