import { describe, it, expect } from 'vitest';
import { RateCalculator } from './rateCalculator';

describe('RateCalculator', () => {
  it('should return "2,63%"', () => {
    // ARRANGE
    const calculator = new RateCalculator();

    // ACT
    const result = calculator.getRate({
      carType: 'city',
      energy: 'electric',
      kilometers: 25_000,
      year: 2009,
      passengers: 1
    })

    // ASSERT
    expect(result).toEqual(2.63);
  })

  it('should return "1,57%"', () => {
    // ARRANGE
    const calculator = new RateCalculator();

    // ACT
    const result = calculator.getRate({
      carType: 'city',
      energy: 'hybrid',
      kilometers: 6_000,
      year: 2015,
      passengers: 4
    })

    // ASSERT
    expect(result).toEqual(1.57);
  })

  it('should return "2,35%"', () => {
    // ARRANGE
    const calculator = new RateCalculator();

    // ACT
    const result = calculator.getRate({
      carType: 'convertible',
      energy: 'diesel',
      kilometers: 14_000,
      year: 1998,
      passengers: 2
    })

    // ASSERT
    expect(result).toEqual(2.35);
  })
})