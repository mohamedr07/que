import React from 'react';
import '../styles/task.css';
import p1 from '../resources/p1.jpg';
import p2 from '../resources/p2.jpg';
import p3 from '../resources/p3.jpg';
import p4 from '../resources/p4.jpg';
import { Link } from 'react-router-dom';
const AdminProviderView = () => {
  return (
    <div>
      <header>
        Admin /provider
        <button type="button" name="button">
          <Link to="/admin/providers/add">Add</Link>
        </button>
      </header>
      <section>
        <div className="container">
          <div className="flex">
            <div className="div1">
              <table>
                <tr className="image">
                  <td colspan="2">
                    <img src={p1} alt="jjhj" />
                  </td>
                </tr>
                <tr>
                  <td>Name : Sara Ahmed</td>
                </tr>

                <tr>
                  <td>Queue : Queue1</td>
                </tr>
                <tr>
                  <td>Station : Station 1</td>
                </tr>

                <tr className="btn">
                  <td colspan="2">
                    <button type="button" name="button">
                      {' '}
                      <Link to="/admin/providers/edit"> Edit</Link>
                    </button>
                  </td>
                </tr>
              </table>
            </div>
            <div className="div2">
              <table>
                <tr className="image">
                  <td colspan="2">
                    <img src={p2} alt="jjhj" />
                  </td>
                </tr>
                <tr>
                  <td>Name : Ahmed Hany</td>
                </tr>

                <tr>
                  <td>Queue : Queue3</td>
                </tr>
                <tr>
                  <td>Station : Station 1</td>
                </tr>

                <tr className="btn">
                  <td colspan="2">
                    <button type="button" name="button">
                      {' '}
                      <Link to="/admin/providers/edit"> Edit</Link>
                    </button>
                  </td>
                </tr>
              </table>
            </div>
            <div className="div3">
              <table>
                <tr className="image">
                  <td colspan="2">
                    <img src={p3} alt="jjhj" />
                  </td>
                </tr>
                <tr>
                  <td>Name : Hanya Ahmed</td>
                </tr>

                <tr>
                  <td>Queue : Queue2</td>
                </tr>
                <tr>
                  <td>Station : Station 2</td>
                </tr>

                <tr className="btn">
                  <td colspan="2">
                    <button type="button" name="button">
                      {' '}
                      <Link to="/admin/providers/edit"> Edit</Link>
                    </button>
                  </td>
                </tr>
              </table>
            </div>
            <div className="div4">
              <table>
                <tr className="image">
                  <td colspan="2">
                    <img src={p4} alt="jjhj" />
                  </td>
                </tr>
                <tr>
                  <td>Name : Yasser Ahmed</td>
                </tr>

                <tr>
                  <td>Queue : Queue4</td>
                </tr>
                <tr>
                  <td>Station : Station 3</td>
                </tr>

                <tr className="btn">
                  <td colspan="2">
                    <button type="button" name="button">
                      {' '}
                      <Link to="/admin/providers/edit"> Edit</Link>
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminProviderView;
