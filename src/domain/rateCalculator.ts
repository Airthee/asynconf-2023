const CAR_TYPES_SCORES = {
  city: 8,
  convertible: 6,
  sedan: 6.5,
  others: 4
}

const ENERGY_SCORES = {
  'petrol': 5,
  'electric': 9,
  'gas': 6,
  'diesel': 4,
  'hybrid': 7,
}

export type CarType = keyof typeof CAR_TYPES_SCORES;
export type Energy = keyof typeof ENERGY_SCORES;

type GetRateArguments = {
  carType: CarType,
  energy: Energy,
  kilometers: number,
  passengers: number,
  year: number
}

export class RateCalculator {
  private getKilometersScore(kilometers: GetRateArguments['kilometers']): number {
    if (kilometers < 5_000) {
      return 10
    }
    if (kilometers < 10_000) {
      return 9
    }
    if (kilometers < 15_000) {
      return 7
    }
    if (kilometers < 20_000) {
      return 5
    }
    if (kilometers < 25_000) {
      return 3
    }
    if (kilometers < 30_000) {
      return 1
    }
    return 0
  }

  private getYearScore(year: GetRateArguments['year']): number {
    if (year > 2010) {
      return 7
    }
    if (year > 2000) {
      return 5
    }
    if (year > 1990) {
      return 4
    }
    if (year > 1980) {
      return 3
    }
    if (year > 1970) {
      return 2
    }
    if (year > 1960) {
      return 1
    }
    return 0
  }

  private getPassengersScore(passengers: GetRateArguments['passengers']): number {
    if (passengers >= 4) {
      return -0.53;
    }
    if (passengers === 3) {
      return -0.29;
    }
    if (passengers === 2) {
      return -0.17;
    }
    if (passengers === 1) {
      return 0.11;
    }
    throw new Error('Le nombre de passagers est invalide');
  }

  private getRateFromScore(score: number): number {
    if (score >= 34) {
      return 1.85;
    }
    if (score >= 26) {
      return 2.10;
    }
    if (score >= 16) {
      return 2.52;
    }
    if (score >= 11) {
      return 2.74;
    }
    return 3;
  }

  getRate({ carType, energy, kilometers, year, passengers }: GetRateArguments): number {
    const carTypeScore = CAR_TYPES_SCORES[carType];
    const energyScore = ENERGY_SCORES[energy];
    const kilometersScore = this.getKilometersScore(kilometers);
    const yearsScore = this.getYearScore(year);
    const passengersScore = this.getPassengersScore(passengers);

    const totalScore = carTypeScore + energyScore + kilometersScore + yearsScore;
    return this.getRateFromScore(totalScore) + passengersScore;
  }
}