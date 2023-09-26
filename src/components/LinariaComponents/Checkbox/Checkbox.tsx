import { Block } from "../Block"
import { LabelSC } from "../Radio/Label.styled"
import { CheckboxSC } from "./Checkbox.styled"

export interface ICheckboxProps {
  id?: string
  name?: string
  value?: string
  title?: string
  required?: boolean
  checked: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox = ({
  id = '',
  name = '',
  title = '',
  checked,
}: ICheckboxProps): JSX.Element => {
  return (
    <Block orientation='horizontal' align='center' gap={15}>
      <CheckboxSC
        type='checkbox'
        id={id}
        name={name}
        checked={checked}
        // value={value}
        // checked={checked ?? value === selectedValue}
        // defaultChecked={defaultChecked}
        // disabled={disabled}
        // onChange={onChange}
      />
      <LabelSC htmlFor={id}>{title}</LabelSC>
    </Block>
  )
}
