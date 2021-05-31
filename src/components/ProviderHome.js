import React, { useState, useEffect } from 'react';
import QueueUsers from './QueueUsers';
import { useSelector } from 'react-redux';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import axiosInstance from './Axios';
import { useHistory } from 'react-router-dom';

function ProviderHome() {
  const [user, setUser] = useState(useSelector((state) => state.userReducer));
  const [showUsers, setShowUsers] = useState(false);
  const [queueId, setQueueId] = useState(0);
  const [station, setStation] = useState(0);

  let history = useHistory();
  console.log(window.location.host);
  const client = new W3CWebSocket(
    `wss://${window.location.host}/ws/queue/` + queueId + '/'
  );

  useEffect(() => {
    if (localStorage.getItem('id') == null) {
      history.push('/login');
    }

    const load_user = async () => {
      let res = await axiosInstance.get(`users/${localStorage.getItem('id')}`);
      setUser(res.data.user);
    };

    const get_queue_info = async () => {
      let res = await axiosInstance.get(
        `stations/station/${localStorage.getItem('id')}`
      );
      setQueueId(res.data.queue);
      setStation(res.data.name);
    };

    load_user();
    get_queue_info();
  }, []);
  const onClick = () => {
    setShowUsers(!showUsers);
  };

  const onAdvance = () => {
    axiosInstance.put(`queues/${queueId}/advance`).then((res) => {
      console.log(res);
      client.send(
        JSON.stringify({
          type: 'message',
          number: res.data,
        })
      );
    });
  };

  return (
    <div className="container ">
      <br />
      <br />

      <div className="row d-flex align-items-center min-vh-50">
        <div className="col-12">
          <div className="card card-signin">
            <div className="card-body">
              <div className="row">
                <form className="form-signin col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="align-left-h">
                        <label id="l1" className="p-1 txt-dec-bold">
                          Name:
                        </label>
                        <label id="l2" className="p-1 txt-dec">
                          {user.full_name}
                        </label>
                      </div>
                      <div className="align-left-h">
                        <label id="l1" className="p-1 txt-dec-bold">
                          Station ID:
                        </label>
                        <label id="l2" className="p-1 txt-dec">
                          {station}
                        </label>{' '}
                      </div>
                      <div className="align-left-h">
                        <label id="l1" className="p-1 txt-dec-bold">
                          Queue:
                        </label>
                        <label id="l2" className="p-1 txt-dec">
                          {queueId}
                        </label>
                      </div>
                      <div className="align-left-h">
                        <button
                          type="button"
                          onClick={onAdvance}
                          className="btn btn-primary btn-shape btn-add"
                        >
                          Advance
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="col-lg-6 col-md-12">
                  <button className="btn btn-circle" onClick={onClick}>
                    10<div className="est-time">Current in queue</div>
                  </button>
                </div>
                <div>{showUsers ? <QueueUsers /> : null}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProviderHome;
