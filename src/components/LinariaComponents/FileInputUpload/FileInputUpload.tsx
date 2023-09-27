import { COLORS } from '../../../style_variables/COLORS'
import { Block } from '../Block'
import { Typography } from '../Typography'
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
    <Block align='center' gap={5}>
      <Block orientation='horizontal' justify='space-between'>
        {errorText && (
          <Typography
            size={12}
            color={COLORS.ERROR}
            style={{ width: '100%', textAlign: 'right' }}
          >
            {errorText}
          </Typography>
        )}
      </Block>
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
    </Block>
  )
}
