import React from "react"

type InputNumberProps = {
  id: string
  label: string
  value: number | undefined,
  min?: number,
  max?: number,
  required?: boolean,
  onChange: (newValue: number) => void
}

function InputNumber({ id, label, onChange, value, min, max, required }: InputNumberProps) {
  return (
    <div className="field">
      <label className="label" htmlFor={id}>{label}</label>
      <div className="control">
        <input
          type="number"
          className="input"
          id={id}
          value={value}
          min={min}
          max={max}
          required={required}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => onChange(parseFloat(e.target.value))}
        />
      </div>
    </div>
  )
}

export default InputNumber;