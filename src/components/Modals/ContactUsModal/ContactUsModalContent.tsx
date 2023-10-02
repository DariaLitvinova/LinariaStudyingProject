import PrimarySquareButton from '../../Buttons/PrimarySquareButton'
import { WrapperSC } from '../../Wrapper/Wrapper.styled'
import { Input } from '../../Input/Input'
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
import { FileInputUpload } from '../../FileInputUpload/FileInputUpload'
import { COLORS } from '../../../style_variables/COLORS'
import { useForm } from 'effector-forms'
import { LoaderSC } from '../../Loader/Loader.styled'
import { submitFormFx, userForm } from '../../../store/userForm/model'
import { ErrorTypographySC } from '../../Typography/Typography.styled'
import { $errorResponse } from '../../../store/errorResponseStore'

const ContactUsModalContent = () => {
  const { fields } = useForm(userForm)
  const pending = useStore(submitFormFx.pending)

  const isErrorResponse = useStore($errorResponse)

  return (
    <>
      {isErrorResponse && (
        <ErrorTypographySC size={12} textAlign='center' isBorder width='auto'>
          {isErrorResponse}
        </ErrorTypographySC>
      )}
      <Input
        name='name'
        type='text'
        label='Name'
        placeholder='Enter your Name'
        height='48px'
        disabled={pending}
        value={fields.name.value}
        invalid={fields.name.hasError()}
        errorText={fields.name.errorText()}
        onChange={(e) => fields.name.onChange(e.target.value)}
      />
      <Input
        name='email'
        type='text'
        label='Email'
        placeholder='Enter your Email'
        height='48px'
        disabled={pending}
        value={fields.email.value}
        invalid={fields.email.hasError()}
        errorText={fields.email.errorText()}
        onChange={(e) => fields.email.onChange(e.target.value)}
      />
      <Input
        name='phone'
        type='text'
        label='Phone'
        placeholder='Enter your Phone'
        height='48px'
        disabled={pending}
        value={fields.phone.value}
        invalid={fields.phone.hasError()}
        errorText={fields.phone.errorText()}
        onChange={(e) => fields.phone.onChange(e.target.value)}
      />
      <Dropdown
        name='country'
        label='Country'
        value={fields.country.value}
        disabled={pending}
        invalid={fields.country.hasError()}
        errorText={fields.country.errorText()}
        onChange={(e) => fields.country.onChange(e.target.value)}
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

      <RadioButtonGroup title='Gender' errorText={fields.gender.errorText()}>
        {GENDER_RADIO_VALUES.map(({ id, value, label }) => {
          return (
            <RadioButton
              key={id}
              id={value}
              name='gender'
              title={label}
              value={value}
              disabled={pending}
              invalid={fields.gender.hasError()}
              selectedValue={fields.gender.value}
              onChange={(e) => fields.gender.onChange(e.target.value)}
            />
          )
        })}
      </RadioButtonGroup>

      <FileInputUpload
        id='photo'
        name='photo'
        title={
          fields.photo.value ? 'Your photo was downloaded' : 'Load your photo'
        }
        disabled={pending}
        value={fields.photo.value}
        invalid={fields.photo.hasError()}
        errorText={fields.photo.errorText()}
        onChange={(e) => fields.photo.onChange(e.target.value)}
      />
      <WrapperSC
        height='1px'
        bgColor={COLORS.NEW_SURFACE_ON_SURFACE_2}
        margin='10px 0'
      />
      <Checkbox
        name='confirmation'
        id='confirmation'
        title='I agree with the processing of personal data'
        disabled={pending}
        invalid={fields.confirmation.hasError()}
        errorText={fields.confirmation.errorText()}
        onChange={(e) => fields.confirmation.onChange(e.target.checked)}
      />
      <WrapperSC
        height='1px'
        bgColor={COLORS.NEW_SURFACE_ON_SURFACE_2}
        margin='10px 0'
      />
      <PrimarySquareButton
        disabled={pending}
        text={pending ? '' : BTN_TITLES.ContactUs}
        type='submit'
      >
        {pending ? <LoaderSC /> : null}
      </PrimarySquareButton>
    </>
  )
}

export default ContactUsModalContent
