import React from "react"

export type Option = {
  label: string,
  value: string,
}

type SelectProps = {
  id: string
  label: string
  options: Option[]
  value: string,
  onChange: (newValue: string) => void
  required?: boolean,
}

function Select({ id, label, options, onChange, value, required }: SelectProps) {
  return (
    <div className="field">
      <label className="label" htmlFor={id}>{label}</label>
      <div className="control">
        <div className="select">
          <select
            id={id}
            onInput={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)} value={value}
            required={required}
          >
            {options.map((option, optionIndex) => (
              <option key={`${id}-option-${optionIndex}`} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Select;