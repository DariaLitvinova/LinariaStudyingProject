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
  $contactUsForm,
  sendContactUsFormFx,
  setContactUsField,
} from '../../../store/contactUsForm/model'
import { Field } from './Field/Field'
import { FileInputUpload } from '../../FileInputUpload/FileInputUpload'
import { $errorResponse } from '../../../store/errorResponseStore'
import { ErrorTypographySC } from '../../Typography/Typography.styled'

const contactUsModalContent = () => {
  const { file, country, gender, errors } = useStore($contactUsForm)
  const pendingcontactUs = useStore(sendContactUsFormFx.pending)
  const isErrorResponse = useStore($errorResponse)

  const handleChangeCountry = setContactUsField.prepend((value: string) => ({
    key: 'country',
    value,
  }))

  const handleChangeGender = setContactUsField.prepend((value: string) => ({
    key: 'gender',
    value,
  }))

  const handleChangeConfirmation = setContactUsField.prepend(
    (value: boolean) => ({
      key: 'confirmation',
      value,
    })
  )

  const handleChangeFile = setContactUsField.prepend((value: string) => ({
    key: 'file',
    value,
  }))

  return (
    <>
      {isErrorResponse && (
        <ErrorTypographySC size={12} textAlign='center' isBorder width='auto'>
          {isErrorResponse}
        </ErrorTypographySC>
      )}
      <Field name='name' label='Name' type='text' disabled={pendingcontactUs}/>
      <Field name='email' type='text' label='Email' disabled={pendingcontactUs}/>
      <Field name='phone' type='text' label='Phone' disabled={pendingcontactUs}/>

      <Dropdown
        name='country'
        label='Country'
        value={country}
        disabled={pendingcontactUs}
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
              disabled={pendingcontactUs}
              invalid={!!errors.gender}
              selectedValue={gender}
              onChange={(e) => handleChangeGender(e.target.value)}
            />
          )
        })}
      </RadioButtonGroup>

      <FileInputUpload
        id='photo'
        name='photo'
        title={file ? 'Your photo was downloaded' : 'Load your photo'}
        disabled={pendingcontactUs}
        value={file}
        invalid={!!errors.file}
        errorText={errors.file}
        onChange={(e) => handleChangeFile(e.target.value)}
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
        disabled={pendingcontactUs}
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
        disabled={pendingcontactUs}
        text={BTN_TITLES.ContactUs}
        type='submit'
      >
        {pendingcontactUs ? <LoaderSC /> : null}
      </PrimarySquareButton>
    </>
  )
}

export default contactUsModalContent
