import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axiosInstance from './Axios';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const [user, setUser] = useState(useSelector((state) => state.userReducer));
  const [queueId, setQueueId] = useState(0);
  const [info, setInfo] = useState({ position: 0, estimated_time: 0 });
  const [number, setNumber] = useState(0);
  const [myNumber, setMyNumber] = useState(0);
  const client = new W3CWebSocket(
    `wss://${window.location.host}/ws/queue/` + queueId + '/'
  );
  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('id') == null) {
      history.push('/login');
    }

    const load_user = async () => {
      let res = await axiosInstance.get(`users/${localStorage.getItem('id')}`);
      setUser(res.data.user);
      console.log(res.data.user);
    };

    const get_queue_id = async () => {
      let res = await axiosInstance.get(
        `/queues/${localStorage.getItem('id')}/queue`
      );
      setQueueId(res.data[0]);
    };

    const load_data = async () => {
      let res = await axiosInstance.get(
        `/queues/${localStorage.getItem('id')}/first`
      );
      console.log(res.data);
      setNumber(res.data.first);
      setMyNumber(res.data.myNum);
    };

    const get_info = async () => {
      let res = await axiosInstance.post(`/queues/${queueId}/info`, {
        user: user.id,
      });
      setInfo({ position: res.data[0], estimated_time: res.data[1] });
    };

    load_user();
    get_queue_id();
    load_data();
    // get_info();

    client.onopen = () => {
      client.send(
        JSON.stringify({
          type: 'message',
          number: {
            'user': 999999,
            'queue': 9999999,
          },
        })
      );
    };
    client.onmessage = (message) => {
      console.log(message);
      const dataFromServer = JSON.parse(message.data);

      if (dataFromServer.message.queue < 9999999)
        setNumber(dataFromServer.message.queue);
      if (
        dataFromServer.message.user.toString() == localStorage.getItem('id')
      ) {
        window.focus();
        alert(
          `It's your turn please head to station ${dataFromServer.message.stationName}`
        );
        window.location.reload();
      }
    };
  }, [queueId]);
  // useEffect(() => {
  //     let ET = 0;
  //     user.queues.map(q => {
  //         if(q.completed == false) {
  //             ET += q.estimatedTime
  //         }
  //     })
  //     setTotalEstimatedTime(ET)
  // }, [])

  return (
    <div className="container ">
      <div className="row d-flex align-items-center min-vh-50">
        <div className="col-12">
          <div className="card card-signin">
            <div className="card-body">
              <div className="row">
                <form className="form-signin col-lg-12 col-md-12">
                  <div className="card ">
                    <div className="card-body">
                      <div className="align-left-h">
                        <label id="l1" className="p-1 txt-dec-bold">
                          Name:
                        </label>
                        <label id="l2" className="p-1 txt-dec">
                          {user ? user.full_name : ''}
                        </label>
                      </div>
                      <div className="align-left-h">
                        <label id="l3" className="p-1 txt-dec-bold">
                          ID:
                        </label>
                        <label id="l4" className="p-1 txt-dec">
                          {user ? user.id : ''}
                        </label>{' '}
                      </div>
                      <div className="align-left-h">
                        <label id="l5" className="p-1 txt-dec-bold">
                          Processes:
                        </label>
                        {user.processes
                          ? user.processes.map((u, index) => {
                              return (
                                <label
                                  key={index}
                                  id="l6"
                                  className="p-1 txt-dec"
                                >
                                  {u},
                                </label>
                              );
                            })
                          : null}
                      </div>
                      <div className="align-left-h">
                        <label id="l7" className="p-1 txt-dec-bold">
                          Current queue:
                        </label>
                        <label id="l4" className="p-1 txt-dec">
                          {user.queues
                            ? user.queues[0]
                              ? user.queues[0].name
                              : null
                            : null}
                        </label>
                        {''}
                        {/* {
                                                        user.queues.map(q => {
                                                            if(q.current == true){
                                                                return <label id="l8" className="p-1 txt-dec">{q.name}</label>
                                                            }
                                                        })
                                                    } */}
                      </div>
                      <div className="align-left-h">
                        <label id="l8" className="p-1 txt-dec-bold">
                          Your Number:
                        </label>
                        <label id="l4" className="p-1 txt-dec">
                          {myNumber}
                        </label>
                        {''}
                      </div>
                      {/* <div className="align-left-h">
                                                    <label id="l9" className="p-1 txt-dec-bold">Total estimated time:</label>
                                                    <label id="l10" className="p-1 txt-dec">{totalEstimatedTime}</label>
                                                </div> */}
                      <div className="align-left-h">
                        <Link
                          to="/"
                          className="btn btn-primary btn-shape btn-add "
                        >
                          Drop Service
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="d-flex flex-row justify-content-center ">
                  <label className="btn btn-circle mt-4 ">
                    {number > 1 ? number - 1 : 0}

                    {/* {user.queues.map(q => {
                                                if(q.current == true){
                                                    return <div className="est-time">Queue estimated time: {q.estimatedTime}</div>
                                                }
                                            })} */}
                  </label>
                </div>
                <br></br>

                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-12">
                      <h4 className="mt-5 mb-5 align-left-h">Listed Queues</h4>
                      <div className="hori-timeline">
                        <ul className="list-inline events">
                          {user.queues
                            ? user.queues.map((q, index) => {
                                if (index <= 3) {
                                  return (
                                    <li
                                      key={index}
                                      className="list-inline-item event-list"
                                    >
                                      <div>
                                        {q.que_completed ? (
                                          <div className="event-date btn-primary">
                                            <i className="bi bi-check"></i>
                                          </div>
                                        ) : (
                                          <div className="event-date btn-primary">
                                            {index + 1}
                                          </div>
                                        )}
                                        <div
                                          className={
                                            q.que_completed
                                              ? 'card mb-0 que-completed'
                                              : 'card mb-0'
                                          }
                                        >
                                          <div className="card-body card-user-2">
                                            {/* <h2 className="card-number mt-2">{index + 1}</h2> */}
                                            <h5 className="card-title ">
                                              <span>{q.name}</span>
                                            </h5>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  );
                                }
                              })
                            : null}
                        </ul>
                        {/* <ul className="list-inline events events-2">
                                            {
                                                user.queues.map((q, index) => {
                                                    if(index > 3) {
                                                        return <li className="list-inline-item event-list">
                                                            <div>
                                                                {q.completed ? <div className="event-date btn-primary"><i className="bi bi-check"></i></div> : <div className="event-date btn-primary">{index + 1}</div>}                                                            
                                                                
                                                                <div className={q.completed ? "card mb-0 que-completed" : "card mb-0"}>
                                                                    <div className="card-body card-user-2 ">
                                                                        <h2 className="card-number mt-2">{index + 1}</h2>
                                                                        <h5 className="card-title "><span>{q.name}</span></h5>
                                                                    </div>
                                                                </div>
                                                                
                                                            </div>
                                                        </li>
                                                    }
                                                })
                                            }
                                            
                                            </ul> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className={user.queues.length > 2 ? "container container-2 row " : "container container-2 row d-flex justify-content-center"}>
                                        <h2 className="align-left-h">Listed Queues</h2>
                                        <div className="container d-flex justify-content-center align-items-center">
                                            <div className="progresses">
                                            {user.queues.map((q, index) => {
                                                if(q.completed == true) {
                                                    return  <div className="steps">
                                                                <span><i className="bi bi-check"></i></span> 
                                                            </div>
                                                            // <span className="line"></span>
                                                }
                                                else {
                                                    return <div className="steps"> <span className="font-weight-bold">{index+1}</span> </div>
                                                } 
                                                
                                            })}
                                                
                                            </div>
                                        </div>

                                        

                                        {
                                            user.queues.map((q, index) => {
                                                return  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                                            <div className="card ">
                                                                <div className="card-body card-user-2">
                                                                    <h2 className="card-number mt-2">{index + 1}</h2>
                                                                    <h5 className="card-title"><span>{q.name}</span></h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                            })
                                        }
                                    </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
