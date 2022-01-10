import React, { useState, useEffect } from "react";
import { getCityStatus } from "../../utils/CityStatus";
import CityAQIModal from "../CityAQIModal/CityAQIModal.js";
import format from "date-fns/format";
import Button from "@material-ui/core/Button";
import ComparisonModal from "../ComparisonModal/ComparisonModal.js";
import CitiesTable from "../CitiesTable/CitiesTable.js";
import { Box } from "@material-ui/core";
import "./Home.scss";

/**
 * Represents a Home component
 * Component rendering the cities tabel, there aqi charts and comparison charts between two cities consists of City name and there AQIs
 * @method
 * @param {object} props - React properties passed from composition
 * @returns Home
 */

const Home = (props) => {
  const { aqiData } = { ...props }; //aqi data from server as props
  const [cityData, setCityData] = useState([]); // state to maintain city data
  const [isCityModalOpen, setIsCityModalOpen] = useState(false); // state to maintain city modal
  const [isComparionModalOpen, setIsComparionModalOpen] = useState(false); // state to maintain cities comparison modal
  const [selectedCity, setSelectedCity] = useState([]); // state to maintain selected row to show the city aqi
  const [selectedCitiesForComparison, setSelectedCitiesForComparison] = useState([]); // state to maintain selected rows to show the comparison

  // method to handle city aqi modal open
  const handleOpen = (index) => {
    setSelectedCity(index);
    setIsCityModalOpen(true);
  };

  // method to handle city aqi modal close
  const handleClose = () => {
    setIsCityModalOpen(false);
  };

  // method to handle comparison aqi modal close
  const handleComparisonClose = () => {
    setIsComparionModalOpen(false);
  };

  // method to handle click of compare aqi button
  const onCompareClick = () => {
    setIsComparionModalOpen(true);
  };

  // method to handle when checkbox is clicked
  const handleCheckboxClick = (event, index) => {
    let selectedCities = selectedCitiesForComparison;
    event.stopPropagation();
    if (!event.target.checked && selectedCities.includes(index)) {
      selectedCities.splice(selectedCities.indexOf(index), 1);
    } else {
      selectedCities.push(index);
    }
    setSelectedCitiesForComparison(selectedCities);
  };

  useEffect(() => {
    let tempAqiData = JSON.parse(JSON.stringify(cityData));

    aqiData.forEach(async (item) => {
      let obj = tempAqiData.findIndex((temp) => temp.city === item.city);

      if (obj !== -1) {
        tempAqiData[obj].data.push({
          aqi: item.aqi,
          time: format(Date.now(), "MM-dd-yyyy HH:mm:ss"),
          status: getCityStatus(item.aqi),
        });
      } else {
        tempAqiData = [
          {
            city: item.city,
            data: [
              {
                aqi: item.aqi,
                time: format(Date.now(), "MM-dd-yyyy HH:mm:ss"),
                status: getCityStatus(item.aqi),
              },
            ],
          },
          ...tempAqiData,
        ];
      }
    });

    setCityData(tempAqiData);
  }, [aqiData]);

  return (
    <Box>
      <div className="button">
        <Button
          variant="contained"
          color="primary"
          onClick={() => onCompareClick()}
          disabled={selectedCitiesForComparison.length < 2}
        >
          {"Compare AQIs"}
        </Button>
      </div>

      {/* CitiesTable component to show variou cities data is rendered */}
      <CitiesTable
        cityData={cityData}
        handleOpen={handleOpen}
        handleCheckboxClick={handleCheckboxClick}
      />

      {/* CityAQIModal component is rendered when a city row is clicked */}
      {isCityModalOpen && (
        <CityAQIModal
          cityData={cityData[selectedCity]}
          open={isCityModalOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        />
      )}

      {/* ComparisonModal component is rendered when two or more city checkbox are selected */}
      {isComparionModalOpen && (
        <ComparisonModal
          cityData={cityData}
          open={isComparionModalOpen}
          onClose={handleComparisonClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          selectedCitiesForComparison={selectedCitiesForComparison}
        />
      )}
    </Box>
  );
};

export default Home;
