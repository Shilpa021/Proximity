import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { getModalStyle, useStyles} from "../../utils/ModalUtils";
import { Typography } from "@material-ui/core";

/**
 * Represents a CitiesTable component
 * Component rendering a City data modal consists of chart showing City name and it's AQI
 * @method
 * @param {object} props - React properties passed from composition
 * @returns ChartAQIModal
 */

const ChartAQIModal = (props) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.open}
        onClose={props.onClose}
      >
        <div style={modalStyle} className={classes.paper}>
        <Typography variant="h6" id="modal-title">
        {props.cityData.city} AQI
          </Typography>

          <ResponsiveContainer width={"100%"} height={400}>
          <LineChart
            data={props.cityData.data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <Line type="monotone" dataKey="aqi" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="time" />
            <YAxis dataKey="aqi" />
          </LineChart>
          </ResponsiveContainer>
          
        </div>
      </Modal>
    </div>
  );
};

export default ChartAQIModal;
