import React, { Component, useEffect } from 'react';

import processImage from '../resources/process3.jpg';
import providerImage from '../resources/provider3.jpg';
import queueImage from '../resources/queue3.jpg';
import stationImage from '../resources/station3.jpg';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const AdminView = () => {
  let history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('id') == null) {
      history.push('/login');
    }
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="card-container">
            <div className="card">
              <div className="box">
                <div className="content">
                  <img src={processImage} className="card-img-top" alt="..." />
                  <h5 className="card-title">Processes</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/processes" className="btn btn-card">
                    View processes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="card-container">
            <div className="card">
              <div className="box">
                <div className="content">
                  <img src={providerImage} className="card-img-top" alt="..." />
                  <h5 className="card-title">Providers</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/providers" className="btn btn-card">
                    View providers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="card-container">
            <div className="card">
              <div className="box">
                <div className="content">
                  <img src={stationImage} className="card-img-top" alt="..." />
                  <h5 className="card-title">Stations</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/stations" className="btn btn-card">
                    View stations
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="card-container">
            <div className="card">
              <div className="box">
                <div className="content">
                  <img src={queueImage} className="card-img-top" alt="..." />
                  <h5 className="card-title">Queues</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/queues" className="btn btn-card">
                    View queues
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminView;
