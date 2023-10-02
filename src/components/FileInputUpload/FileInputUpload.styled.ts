import { styled } from '@linaria/react'
import { IFileInputUploadProps } from './FileInputUpload'
import { COLORS } from '../../style_variables/COLORS'

export const FileInputUploadSC = styled.input`
  margin-top: 10px;
`

export const LabelFileSC = styled.label<IFileInputUploadProps>`
  font: 'Plus Jakarta Sans';
  font-size: 16px;
  color: ${({ value, disabled }) =>
    value && !disabled
      ? `var(${COLORS.NEW_SURFACE_3})`
      : `var(${COLORS.NEW_SURFACE_ON_SURFACE_2})`};
  cursor: pointer;
  padding: 14px 10.5px;
  border-radius: 3px;
  border: ${({ borders }) =>
    borders ? `${borders} solid transparent` : 'initial'};
  border-color: ${({ invalid, borderColorDefault, borderColorInvalid }) =>
    invalid ? `var(${borderColorInvalid})` : `var(${borderColorDefault})`};
  background: url('src/assets/images/icons/download_image.svg') no-repeat right;
  background-size: 20px;
  background-position-x: calc(100% - 8px);
`
