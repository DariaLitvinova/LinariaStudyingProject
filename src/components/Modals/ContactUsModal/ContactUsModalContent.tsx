import PrimarySquareButton from '../../Buttons/PrimarySquareButton'
import { Block } from '../../LinariaComponents/Block'
import { Input } from '../../LinariaComponents/Input/Input'
import { useStore } from 'effector-react'
import { RadioButtonGroup } from '../../LinariaComponents/Radio/RadioButtonGroup'
import { RadioButton } from '../../LinariaComponents/Radio/RadioButton'
import { COUNTRIES } from '../../../constants/constants'
import { Dropdown } from '../../LinariaComponents/Dropdown/Dropdown'
import { DropdownItem } from '../../LinariaComponents/Dropdown/DropdownItem'
import { Checkbox } from '../../LinariaComponents/Checkbox/Checkbox'
import { FileInputUpload } from '../../LinariaComponents/FileInputUpload/FileInputUpload'
import { COLORS } from '../../../style_variables/COLORS'
import { useForm } from 'effector-forms'
import { Loader } from '../../LinariaComponents/Loader/Loader'
import { submitFormFx, userForm } from '../../../store/userForm/model'
import { Typography } from '../../LinariaComponents/Typography'
import { $errorResponse } from '../../../store/errorStore'

const ContactUsModalContent = () => {
  const { fields } = useForm(userForm)
  const pending = useStore(submitFormFx.pending)

  const isErrorResponse = useStore($errorResponse)

  return (
    <>
      {isErrorResponse && (
        <Typography
          color={COLORS.ERROR}
          size={12}
          style={{
            border: `1px solid var(${COLORS.ERROR})`,
            padding: '10px',
            borderRadius: '5px',
          }}
        >
          {isErrorResponse}
        </Typography>
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
        label='Select your country'
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
        <RadioButton
          id='man'
          name='gender'
          title='Man'
          value='man'
          disabled={pending}
          invalid={fields.gender.hasError()}
          selectedValue={fields.gender.value}
          onChange={(e) => fields.gender.onChange(e.target.value)}
        />
        <RadioButton
          id='woman'
          name='gender'
          title='Woman'
          value='woman'
          disabled={pending}
          invalid={fields.gender.hasError()}
          selectedValue={fields.gender.value}
          onChange={(e) => fields.gender.onChange(e.target.value)}
        />
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
      <Block
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
      <Block
        height='1px'
        bgColor={COLORS.NEW_SURFACE_ON_SURFACE_2}
        margin='10px 0'
      />
      <PrimarySquareButton
        style={{ minWidth: '150px' }}
        disabled={pending}
        text={pending ? '' : 'Contact us'}
        type='submit'
      >
        {pending ? <Loader /> : null}
      </PrimarySquareButton>
    </>
  )
}

export default ContactUsModalContent
