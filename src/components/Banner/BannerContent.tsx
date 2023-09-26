import PrimarySquareButton from '../Buttons/PrimarySquareButton'
import { AbsoluteWrapper } from '../LinariaComponents/AbsoluteWrapper'
import { Block } from '../LinariaComponents/Block'
import AdditionalInfoSection from './BannerContent/AdditionalInfoSection'
import ButtonsSection from './BannerContent/ButtonsSection'
import CreatorSection from './BannerContent/CreatorSection'
import MovieTitleSection from './BannerContent/MovieTitleSection'
import { ModalForm } from '../LinariaComponents/ModalForm/ModalForm'
import { LayerModalFixed } from '../LinariaComponents/LayerModal/LayerModalFixed'
import { Input } from '../LinariaComponents/Input/Input'
import { $modalStore, closeModalForm, openModalForm } from '../../store/store'
import { useStore } from 'effector-react'
import { RadioButtonGroup } from '../LinariaComponents/Radio/RadioButtonGroup'
import { RadioButton } from '../LinariaComponents/Radio/RadioButton'
import { COUNTRIES } from '../../constants/constants'
import { Dropdown } from '../LinariaComponents/Dropdown/Dropdown'
import { DropdownItem } from '../LinariaComponents/Dropdown/DropdownItem'
import { SyntheticEvent, useState } from 'react'
import { Checkbox } from '../LinariaComponents/Checkbox/Checkbox'
import { FileInputUpload } from '../LinariaComponents/FileInputUpload/FileInputUpload'
import { COLORS } from '../../style_variables/COLORS'

const BannerContent = () => {
  const { isOpenModal } = useStore($modalStore)

  const onSubmit = (e: SyntheticEvent<Element, Event>) => {
    e.preventDefault()
    console.log(e)
    console.log('submit')
  }

  const [valueSelect, setValueSelect] = useState('')
  console.log(valueSelect)

  return (
    <Block gap={52} width='817px' justify='flex-end' align='flex-start'>
      <CreatorSection />
      <MovieTitleSection />
      <ButtonsSection />
      <AdditionalInfoSection />
      <AbsoluteWrapper top='20px' right='20px'>
        <PrimarySquareButton text='Contact us' onClick={openModalForm} />
      </AbsoluteWrapper>
      <LayerModalFixed
        isOpened={isOpenModal}
        onClickForCloseModal={closeModalForm}
      >
        <ModalForm width='363px' height='auto' onSubmit={onSubmit}>
          <Input
            name='name'
            type='text'
            label='Name'
            placeholder='Enter your Name'
            height='48px'
          />
          <Input
            name='name'
            type='text'
            label='Email'
            placeholder='Enter your Email'
            height='48px'
          />
          <Input
            name='name'
            type='text'
            label='Phone'
            placeholder='Enter your Phone'
            height='48px'
          />
          <Dropdown
            name='country'
            label='Select your country'
            required
            value={valueSelect}
            defaultValue={valueSelect}
            onChange={(event) => setValueSelect(event.target.value)}
            // title={fields.gender.value}
            placeholder='Select your Country'
          >
            {COUNTRIES.map((country, index) => (
              <DropdownItem
                key={`${index}${country}`}
                value={country}
                text={country}
                // selected={valueSelect === country}
                // activeId={fields.gender.value}
                // onClick={() => welcomeForm.fields.gender.set(gender)}
              />
            ))}
          </Dropdown>

          <RadioButtonGroup title='Gender'>
            <RadioButton
              id='man'
              name='gender'
              title='Man'
              value='man'
              // selectedValue={fields.gender.value}
              // onChange={(e: ChangeEvent<HTMLInputElement>) =>
              //   value(profileForm.fields.gender.set)({ value: e.target.value })
              // }
            />
            <RadioButton
              id='woman'
              name='gender'
              title='Woman'
              value='woman'
              // selectedValue={fields.gender.value}
              // onChange={(e: ChangeEvent<HTMLInputElement>) =>
              //   value(profileForm.fields.gender.set)({ value: e.target.value })
              // }
            />
          </RadioButtonGroup>
          <FileInputUpload id="photo" name='photo' title='Load your photo'/>
          <Block height='1px' bgColor={COLORS.NEW_SURFACE_ON_SURFACE_2} margin='10px 0'/>
          <Checkbox
            name='agreement'
            id='agreement'
            title='I agree with the processing of personal data'
            checked={false}
          />
          <Block height='1px' bgColor={COLORS.NEW_SURFACE_ON_SURFACE_2} margin='10px 0'/>
          <PrimarySquareButton text='Contact us' type='submit' />
        </ModalForm>
      </LayerModalFixed>
    </Block>
  )
}

export default BannerContent
