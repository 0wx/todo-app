import React from 'react'
import styles from './styles.module.scss'
import { OptionsValue } from 'todo-types'
import { Label } from '..'
import ReactSelect from 'react-select'
interface OptionProps {
  option: OptionsValue[]
  label: string
  onChange: (value: OptionsValue) => void
}

const { optionContainer, _label, selector } = styles

const Select: React.FC<OptionProps> = ({ option, label, onChange }) => {
  return (
    <div className={optionContainer}>
      <div className={_label}>{label}</div>
      <ReactSelect
        onChange={(v) => {
          onChange(v as OptionsValue)
        }}
        className={selector}
        defaultValue={option.find(({ selected }) => selected)}
        options={option}
        formatOptionLabel={(value) => {
          return <Label color={value.color}>{value.label}</Label>
        }}
      />
    </div>
  )
}

export default Select
