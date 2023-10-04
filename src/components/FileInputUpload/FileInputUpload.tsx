import { COLORS } from '../../style_variables/COLORS'
import { WrapperSC } from '../Wrapper/Wrapper.styled'
import { ErrorTypographySC } from '../Typography/Typography.styled'
import { FileInputUploadSC, LabelFileSC } from './FileInputUpload.styled'
import {
  AlignItems,
  JustifyContent,
  Orientation,
} from '../../style_variables/CSS_PROPERTIES'

export interface IFileInputUploadProps {
  id?: string
  name?: string
  value?: string
  title?: string
  required?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  borders?: string
  borderColorDefault?: string
  borderColorInvalid?: string
  invalid?: boolean
  errorText?: string
  disabled?: boolean
}

export const FileInputUpload = ({
  id = '',
  name = '',
  title = '',
  borders = '1px',
  invalid,
  borderColorDefault = COLORS.NEW_OUTLINE_BORDER,
  borderColorInvalid = COLORS.ERROR,
  value = '',
  onChange,
  errorText,
  disabled,
}: IFileInputUploadProps): JSX.Element => {
  return (
    <WrapperSC align={AlignItems.Center} gap='5'>
      <WrapperSC
        orientation={Orientation.Row}
        justify={JustifyContent.SpaceBetween}
      >
        {errorText && (
          <ErrorTypographySC size={12}>{errorText}</ErrorTypographySC>
        )}
      </WrapperSC>
      <LabelFileSC
        htmlFor={id}
        borders={borders}
        invalid={invalid}
        borderColorDefault={borderColorDefault}
        borderColorInvalid={borderColorInvalid}
        value={value}
        disabled={disabled}
      >
        {title}
        <FileInputUploadSC
          type='file'
          id={id}
          accept='.png, .jpg, .jpeg'
          name={name}
          disabled={disabled}
          onChange={onChange}
        />
      </LabelFileSC>
    </WrapperSC>
  )
}
