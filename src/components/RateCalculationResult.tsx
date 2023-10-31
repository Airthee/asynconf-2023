import React from 'react';

type RateCalculationResultProps = {
  rate: number | null
}

function RateCalculationResult({ rate }: RateCalculationResultProps) {
  return (
    <>
      {rate != null && (
        <div className="has-text-centered">
          <h3 className="title">Votre taux s'élève à :</h3>
          <div className="is-size-1">
            {rate}%
          </div>
        </div>
      ) || (
          <div className="notification is-info">
            Toutes les données ne sont pas encore renseignées
          </div>
        )}
    </>
  )
}

export default RateCalculationResult