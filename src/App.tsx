import { useMemo, useState } from 'react';
import { RateCalculator, RateCalculatorParams } from './domain/rateCalculator';

import RateCalculationForm from './components/RateCalculationForm'
import RateCalculationResult from './components/RateCalculationResult'

import './App.css'

const rateCalculator = new RateCalculator();

function App() {
  const [calculationFormData, setCalculationFormData] = useState<RateCalculatorParams | null>();
  const calculatedRate = useMemo(() => {
    if (calculationFormData) {
      return rateCalculator.getRate(calculationFormData);
    }
    return null;
  }, [calculationFormData]);

  return (
    <>
      <section className="hero is-medium is-primary">
        <div className="hero-body">
          <p className="title">GreenBorrow</p>
          <p className="subtitle">Calculer le taux d'emprunt selon l'impact écologique de votre véhicule</p>
        </div>
      </section>
      <main className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <div className="box">
                <RateCalculationForm
                  onChange={setCalculationFormData}
                />
              </div>
            </div>
            <div className="column">
              <div className="box box-result-rate">
                <RateCalculationResult rate={calculatedRate} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
