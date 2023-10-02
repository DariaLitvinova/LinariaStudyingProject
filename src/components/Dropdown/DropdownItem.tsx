import { DropdownItemSC } from './DropdownItem.styled'

export interface IDropdownItemProps {
  value: string
  text: string
  hidden?: boolean
}

export const DropdownItem = ({
  value,
  text,
  hidden = false,
}: IDropdownItemProps): JSX.Element => {
  return (
    <DropdownItemSC
      value={value}
      hidden={hidden}
    >
      {text}
    </DropdownItemSC>
  )
}
