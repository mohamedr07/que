import React, { useState, useEffect } from 'react';
import axiosInstance from './Axios';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

export default function Screen() {
  const [stations, setStations] = useState([]);
  const [connections, setConnections] = useState([]);
  const [loaded, setLoaded] = useState(false);
  let msg = new SpeechSynthesisUtterance();
  msg.voice = speechSynthesis.getVoices()[3];

  useEffect(() => {
    axiosInstance.get('stations/details').then((res) => {
      setStations(res.data.stations);
      if (!loaded) {
        setConnections(
          stations.map(
            (station) =>
              new W3CWebSocket(
                `wss://${window.location.host}/ws/queue/` + station.queue + '/'
              )
          )
        );
        connections.forEach((connection) => {
          setLoaded(true);
          connection.onopen = () => {
            console.log('WebSocket Client Connected');
          };
          connection.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            axiosInstance
              .get('stations/details')
              .then((res) => setStations(res.data.stations));
            if (dataFromServer.message.queue < 9999999)
              msg.text = `Client number ${dataFromServer.message.queue} please head to station ${dataFromServer.message.stationName}`;

            window.speechSynthesis.speak(msg);
          };
        });
      }
    });
  }, [stations]);

  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Active Stations</h1>
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        {stations
          ? stations.map((station) => (
              <div key={station.id} className="col-lg-3 col-md-4 col-sm-12">
                <div className="card-container">
                  <div className="wide-card">
                    <div className="box">
                      <div className="content">
                        <h3 className="card-title">{station.name}</h3>
                        <div className="card-text">
                          <hr></hr>
                          <ul className="list-unstyled">
                            <li>In queue:{station.in_queue}</li>
                            <li>Currently serving:{station.serving}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
