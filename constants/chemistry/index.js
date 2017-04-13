'use strict';


// Conversion from degrees Fahrenheit (°F) to degrees Celsius (°C):
export const FahrToCelsius = (degF) => (degF - 32) * (5 / 9);

// Conversion from degrees Fahrenheit (°F) to Kelvin-scale temperature (K):
export const FahrToKelvin = (degF) => (degF + 459.67) * (5 / 9);

// Conversion from degrees Celsius (°C) to degrees Fahrenheit (°F):
export const CelsiusToFahr = (degC) => (degC * (9 / 5)) + 32;

// Conversion from degrees Celsius (°C) to Kelvin-scale temperature (K):
export const CelsiusToKelvin = (degC) => degC + 273.15;

// Conversion from Kelvin-scale temperature (K) to degrees Celsius (°C):
export const KelvinToCelsius = (degK) => degK - 273.15;

// Conversion from Kelvin-scale temperature (K) to degrees Fahrenheit (°F):
export const KelvinToFahr = (degK) => (degK * (9 / 5)) - 459.67;
