import { useMemo, useState } from 'react';
import './App.css'
import Select, { Option } from './components/Select';
import InputNumber from './components/InputNumber';
import { CarType, Energy, RateCalculator } from './domain/rateCalculator';

const rateCalculator = new RateCalculator();

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

function App() {
  const [selectedCarType, setSelectedCarType] = useState<string>('');
  const [selectedEnergy, setSelectedEnergy] = useState<string>('');
  const [selectedPassengers, setSelectedPassengers] = useState<number>();
  const [selectedKilometers, setSelectedKilometers] = useState<number>();
  const [selectedYears, setSelectedYears] = useState<number>();

  const calculatedRate = useMemo<number | null>(() => {
    if (selectedCarType && selectedEnergy && selectedKilometers && selectedYears && selectedPassengers) {
      return rateCalculator.getRate({
        carType: selectedCarType as CarType,
        energy: selectedEnergy as Energy,
        kilometers: selectedKilometers,
        year: selectedYears,
        passengers: selectedPassengers
      })
    }
    return null;
  }, [selectedCarType, selectedEnergy, selectedKilometers, selectedPassengers, selectedYears])

  return (
    <div className="container">
      <h1 className="title">GreenBorrow</h1>
      <h2 className="subtitle">Calculer le taux d'emprunt selon l'impact écologique de votre véhicule</h2>

      <div className="columns">
        <div className="column">
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
          />

          {/* Year */}
          <InputNumber
            label='Année'
            id='select-years'
            value={selectedYears}
            onChange={setSelectedYears}
            min={1960}
          />

          {/* Nb passager */}
          <InputNumber
            label='Nombre de passagers'
            id='select-passengers'
            value={selectedPassengers}
            onChange={setSelectedPassengers}
            min={1}
            max={4}
          />
        </div>
        <div className="column">
          {calculatedRate != null && (
            <div className="has-text-centered">
              <h3 className="title">Votre taux s'élève à :</h3>
              <div className="is-size-1">
                {calculatedRate}
              </div>
            </div>
          ) || (
              <div className="notification is-info">
                Toutes les données ne sont pas encore renseignées
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default App
