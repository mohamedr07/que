import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axiosInstance from '../Axios';

export default function Stations() {
  const [availableStations, setAvailableStations] = useState(
    useSelector((state) => state.stationsReducer)
  );

  useEffect(() => {
    axiosInstance.get(`stations`).then((res) => {
      console.log(res.data);
      setAvailableStations(res.data);
    });
  }, []);

  const deleteStation = (id) => {
    axiosInstance.delete(`stations/${id}`).then(console.log('deleted'));
    window.location.reload(false);
  };
  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">stations</h1>
          <p className="lead">a description about stations</p>
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        {availableStations.map((station, index) => (
          <div key={index} className="col-xl-4 col-lg-6 col-md-6">
            <div className="card-container">
              <div className="card">
                <div className="box">
                  <div className="v-menu-btn dropdown">
                    <button
                      className="btn"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-three-dots-vertical v-menu-icon"></i>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <Link
                          to={`/editstation/${station.id}`}
                          className="dropdown-item"
                          href="#"
                        >
                          Edit
                        </Link>
                      </li>
                      <li>
                        <a
                          onClick={() => deleteStation(station.id)}
                          className="dropdown-item"
                          href="#"
                        >
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="content">
                    <h3 className="card-title">{station.name}</h3>
                    <div className="card-text">
                      <h6>Station ID: {station.id}</h6>
                      <hr></hr>
                      <ul className="list-unstyled">
                        <li>
                          Provider:{' '}
                          <span className="font-bold">
                            {station.provider.email}
                          </span>
                        </li>
                        <li>
                          Queue:{' '}
                          <span className="font-bold">{station.queue}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/createStation" className="btn btn-primary btn-add">
        Add
      </Link>
    </div>
  );
}
