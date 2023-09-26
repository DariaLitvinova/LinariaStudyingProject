import { COLORS } from '../../../style_variables/COLORS'
import { Block } from '../Block'
import { FileInputUploadSC, LabelFileSC } from './FileInputUpload.styled'

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
}

export const FileInputUpload = ({
  id = '',
  name = '',
  title = '',
  required,
  borders = '1px',
  invalid,
  borderColorDefault = COLORS.NEW_OUTLINE_BORDER,
  borderColorInvalid = COLORS.ERROR,
  value ='',
}: IFileInputUploadProps): JSX.Element => {
  return (
    <Block orientation='horizontal' align='center' gap={5}>
      <FileInputUploadSC
        type='file'
        id={id}
        required={required}
        accept='.png, .jpg, .jpeg'
        name={name}
        // onChange={onChange}
      />
      <LabelFileSC
        htmlFor={id}
        borders={borders}
        invalid={invalid}
        borderColorDefault={borderColorDefault}
        borderColorInvalid={borderColorInvalid}
        value={value}
      >
        {title}
      </LabelFileSC>
    </Block>
  )
}
