import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home.js";
import { Container } from "@material-ui/core";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "./App.scss";

const App = (props) => {
  //give an initial state so that the data won't be undefined at start
  const [aqiData, setAqiData] = useState([]);

  useEffect(() => {
    const websocket = new WebSocket("ws://city-ws.herokuapp.com/"); // Using websockets to connect to the server

    websocket.onopen = () => {
      console.log("connected"); // consoles when websocket is opened
    };

     /* Fetches data */
    websocket.onmessage = function (event) {
      const json = JSON.parse(event.data);
      setAqiData(json);
    };

    return () => {
      websocket.close();
    };
  }, []);

  return (
    <div className="page">

      <AppBar>
        <Toolbar>
          <Typography variant="h5">{props.header}</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Home aqiData={aqiData} />
      </Container>
      
    </div>
  );
};

/**
 * Default values for passed properties
 *
 * @type {object}
 * @property {string} header='Air Quality Monitor' - The default value for header
 */
App.defaultProps = {
  header: "Air Quality Monitor"
};

export default App;
