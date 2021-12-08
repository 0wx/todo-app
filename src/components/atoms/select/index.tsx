import React from 'react'
import styles from './styles.module.scss'
import { OptionsValue } from 'todo-types'
import { Label } from '..'
import ReactSelect, {
  components,
  DropdownIndicatorProps,
  GroupBase,
} from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
interface OptionProps {
  option: OptionsValue[]
  label: string
  onChange: (value: OptionsValue) => void
  dataCyLabel: string
  dataCyInput: string
}

const DropdownIndicator = (
  props: JSX.IntrinsicAttributes &
    DropdownIndicatorProps<OptionsValue, boolean, GroupBase<OptionsValue>>
) => (
  <components.DropdownIndicator {...props}>
    <div data-cy="modal-add-priority-dropdown">
      <FontAwesomeIcon icon={faCaretDown} />
    </div>
  </components.DropdownIndicator>
)
const { optionContainer, _label, selector } = styles
//data-cy="modal-add-priority-dropdown"
const Select: React.FC<OptionProps> = ({
  option,
  label,
  onChange,
  dataCyLabel,
  dataCyInput,
}) => {
  return (
    <div className={optionContainer}>
      <div data-cy={dataCyLabel} className={_label}>
        {label}
      </div>
      <ReactSelect
        components={{
          DropdownIndicator,
        }}
        onChange={(v) => {
          onChange(v as OptionsValue)
        }}
        className={selector}
        defaultValue={option.find(({ selected }) => selected)}
        options={option}
        formatOptionLabel={(value) => {
          return (
            <Label dataCy={dataCyInput} color={value.color}>
              {value.label}
            </Label>
          )
        }}
      />
    </div>
  )
}

export default Select
