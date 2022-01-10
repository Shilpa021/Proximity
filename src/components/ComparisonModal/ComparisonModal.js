import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";
import { getModalStyle, useStyles } from "../../utils/ModalUtils";
import { Typography } from "@material-ui/core";

import './ComparisonModal.scss';

/**
 * Represents a ComparisonModal component
 * Component rendering the comparison chart between two Cities consists of City name and there AQIs
 * @method
 * @param {object} props - React properties passed from composition
 * @returns ComparisonModal
 */

const ComparisonModal = (props) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [selectedRowsData, setSelectedRowsData] = useState([]);

  useEffect(() => {
    let selectedRowsItems = [];
    props.selectedCitiesForComparison.map((item) => {
      return selectedRowsItems.push(props.cityData[item]);
    });

    setSelectedRowsData(selectedRowsItems);
  }, []);

  const getRandomColor = (index) => {
    const color = [
      "#6680B3",
      "#66991A",
      "#E6B3B3",
      "#CCFF1A",
      "#00B3E6",
      "#E6B333",
      "#3366E6",
      "#999966",
      "#99FF99",
      "#B34D4D",
      "#80B300",
      "#809900",
    ];
    return color[index];
  };

  return (
    <div className="page">
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.open}
        onClose={props.onClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            AQI comparison
          </Typography>

          <ResponsiveContainer width={"100%"} height={400}>
            <LineChart >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" type="category" allowDuplicatedCategory={false} />
              <YAxis dataKey="aqi" allowDuplicatedCategory={false} />
              <Tooltip />
              <Legend />
              {selectedRowsData.map((selected, index) => (
                <Line
                  dataKey="aqi"
                  data={selected.data}
                  name={selected.city}
                  key={selected.city}
                  type="monotone"
                  dot={false}
                  stroke={getRandomColor(index)}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
          
        </div>
      </Modal>
    </div>
  );
};

export default ComparisonModal;
