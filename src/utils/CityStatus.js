/**
 * This utility is compare the updated of a city and update the last updated column
 *
 * @module utils/CityStatus
 */

 

/**
 * Represents a success handler function
 *
 * @method
 * @param {object} aqi - aqi of a city
 * @returns aqi status
 */
export const getCityStatus = (aqi) => {
  let status = "";
  const statusValues = {
    good: "Good",
    satisfactory: "Satisfactory",
    moderate: "Moderate",
    poor: "Poor",
    veryPoor: "VeryPoor",
    severe: "Severe"
   };
   
  if (0 <= aqi && aqi <= 50) {
    status = statusValues.good;
  } else if (50 < aqi && aqi < 100) {
    status = statusValues.satisfactory;
  } else if (100 < aqi && aqi < 200) {
    status = statusValues.moderate;
  } else if (200 < aqi && aqi < 300) {
    status = statusValues.poor;
  } else if (300 < aqi && aqi < 400) {
    status = statusValues.veryPoor;
  } else if (400 < aqi && aqi <= 500) {
    status = statusValues.severe;
  }

  return status;
};
