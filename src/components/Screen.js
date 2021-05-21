import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Screen() {
  const [stations, setStations] = useState(
    useSelector((state) => state.stationsReducer)
  );

  let msg = new SpeechSynthesisUtterance();
  msg.voice = speechSynthesis.getVoices()[3];
  msg.text = 'Client x please head to station y';

  return (
    <div className="container">
      <div class="row">
        <div className="col-4">
          <h6>
            Active stations:{' '}
            <span className="font-bold">{stations.length}</span>
          </h6>
        </div>
      </div>
      <hr></hr>
      <div className="row">
        {stations.map((station, index) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div key={index} className="card">
                <div className="card-body screen-card-body">
                  <div className="card-text">
                    <h6>Station ID: {station.id}</h6>
                    <hr></hr>
                    <ul className="list-unstyled">
                      <li>
                        Queue:{' '}
                        <span className="font-bold">{station.queue}</span>
                      </li>
                      <li>
                        Current serving:{' '}
                        <span className="font-bold">
                          {station.currentlyServing}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={() => window.speechSynthesis.speak(msg)}>Speak</button>
    </div>
  );
}
