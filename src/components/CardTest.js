import React from 'react';
import '../styles/card.css';
const CardTest = () => {
  return (
    <div>
      <div className="card-container">
        <div className="card">
          <div className="box">
            <div className="content">
              <h2 className="card-number">01</h2>
              <h3 className="card-title">Process 1</h3>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
                unde.
              </p>
              <a className="card-link">Submit</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="content">
              <h2 className="card-number">02</h2>
              <h3 className="card-title">Process 2</h3>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
                unde.
              </p>
              <a className="card-link">Submit</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="content">
              <h2 className="card-number">03</h2>
              <h3 className="card-title">Process 3</h3>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
                unde.
              </p>
              <a className="card-link">Submit</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <div className="content">
              <h2 className="card-number">04</h2>
              <h3 className="card-title">Process 4</h3>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
                unde.
              </p>
              <a className="card-link">Submit</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTest;
