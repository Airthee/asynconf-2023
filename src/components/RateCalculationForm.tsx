import React, { useState, useEffect } from "react";
import InputNumber from "./InputNumber";
import Select, { Option } from './Select';
import { CarType, Energy, RateCalculatorParams } from '../domain/rateCalculator';


const carTypeOptions: Option[] = [
  { label: 'Sélectionner un type de véhicule', value: '' },
  { label: 'Citadine', value: 'city' },
  { label: 'Cabriolet', value: 'convertible' },
  { label: 'Berline', value: 'sedan' },
  { label: 'SUV / 4x4', value: 'others' },
];

const energyOptions: Option[] = [
  { label: 'Sélectionner un type d\'énergie', value: '' },
  { label: 'Essence', value: 'petrol' },
  { label: 'Electrique', value: 'electric' },
  { label: 'Gaz', value: 'gas' },
  { label: 'Diesel', value: 'diesel' },
  { label: 'Hybride', value: 'hybrid' },
]

type RateCalculationFormProps = {
  onChange: (value: RateCalculatorParams | null) => void
}

function RateCalculationForm({ onChange }: RateCalculationFormProps) {
  const [selectedCarType, setSelectedCarType] = useState<string>('');
  const [selectedEnergy, setSelectedEnergy] = useState<string>('');
  const [selectedPassengers, setSelectedPassengers] = useState<number>();
  const [selectedKilometers, setSelectedKilometers] = useState<number>();
  const [selectedYears, setSelectedYears] = useState<number>();

  useEffect(() => {
    if (selectedCarType && selectedEnergy && selectedKilometers && selectedYears && selectedPassengers) {
      return onChange({
        carType: selectedCarType as CarType,
        energy: selectedEnergy as Energy,
        kilometers: selectedKilometers,
        year: selectedYears,
        passengers: selectedPassengers
      })
    }
    onChange(null);
  })

  return (
    <>
      {/* Type */}
      <Select
        label='Type de véhicule'
        id='select-car-type'
        options={carTypeOptions}
        value={selectedCarType}
        onChange={setSelectedCarType}
      />

      {/* Energie */}
      <Select
        label='Energie'
        id='select-energy'
        options={energyOptions}
        value={selectedEnergy}
        onChange={setSelectedEnergy}
      />

      {/* Km */}
      <InputNumber
        label='Kilométrage'
        id='select-kilometers'
        value={selectedKilometers}
        onChange={setSelectedKilometers}
        min={5_000}
        placeholder='25000'
      />

      {/* Year */}
      <InputNumber
        label='Année'
        id='select-years'
        value={selectedYears}
        onChange={setSelectedYears}
        min={1960}
        placeholder='2015'
      />

      {/* Nb passager */}
      <InputNumber
        label='Nombre de passagers'
        id='select-passengers'
        value={selectedPassengers}
        onChange={setSelectedPassengers}
        placeholder='3'
        min={1}
        max={4}
      />
    </>
  )
}

export default RateCalculationForm