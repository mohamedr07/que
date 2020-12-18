import React from 'react';
import '../styles/task.css';
import { Link } from 'react-router-dom';
const AdminProviderEditView = () => {
  return (
    <div classNameName="forms">
      <section>
        <div className="Form">
          <form className="sign">
            <table>
              <tr>
                <th
                  colspan="2"
                  style={{
                    color: 'orange',
                    padding: '20px',
                    textAlign: 'center',
                  }}
                >
                  Add Modify
                </th>
              </tr>
              <tr>
                <td>
                  <label for="name">Name</label>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value=""
                    placeholder="Enter your Name"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="queue">Queue</label>
                </td>
              </tr>
              <tr>
                <td>
                  <select className="" name="queue" id="queue">
                    <option value="">Enter your Queue</option>
                    <option value="queue1">queue1</option>
                    <option value="queue2">queue2</option>
                    <option value="queue3">queue3</option>
                    <option value="queue4">queue4</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="station">Station</label>
                </td>
              </tr>
              <tr>
                <td>
                  <select className="" name="station" id="station">
                    <option value="">Enter your Station</option>
                    <option value="station1">station1</option>
                    <option value="station2">station2</option>
                    <option value="station3">station3</option>
                    <option value="station4">station4</option>
                  </select>
                </td>
              </tr>
              <tr className="t">
                <td colspan="2">
                  <button type="submit" name="button" onclick="add()">
                    <Link to="/admin/providers">Submit</Link>
                  </button>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AdminProviderEditView;
