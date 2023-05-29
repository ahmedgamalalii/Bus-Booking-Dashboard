import { useEffect, useState } from "react";
import axios from "axios";
const INITIAL_STATE = [
  {
    name: "",
    user_id: "",
    route_id: "",
    from: "",
    to: "",
    date: "",
    time: "",
  },
];

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

function Approval() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/requests")
      .then((response) => {
        if (response.data) {
          setUsers(response.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const accept = (e, id) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/requests/${id}`, {
        requeststatus: 1,
      })
      .then((res) => {
        alert(res.data.msg);
      });
  };
  const decline = (e,id) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/requests/${id}`, {
        requeststatus: 2,
      })
      .then((res) => alert(res.data.msg));
  };

  const renderUsers = () => {
    return users.map(({ id,user_id, route_id, name, from, to,date,time }) => {
     
      
      return (
        <tr key={id}>
          <td style={{ padding: "10px", border: "1px solid black" }}>
            {name ? name : ""}
          </td>
          <td style={{ padding: "10px", border: "1px solid black" }}>
            {user_id ? user_id : ""}
          </td>
          <td style={{ padding: "10px", border: "1px solid black" }}>
            {route_id ? route_id: ""}
          </td>
          <td style={{ padding: "10px", border: "1px solid black" }}>
            {from ? from: ""}
          </td>
          <td style={{ padding: "10px", border: "1px solid black" }}>
            {to ? to: ""}
          </td>
          <td style={{ padding: "10px", border: "1px solid black" }}>
            {date ? date: ""}
          </td>
          <td style={{ padding: "10px", border: "1px solid black" }}>
            {time ? time: ""}
          </td>
          <td className="btns">
            <button
              className="accept-button"
              onClick={(e) => accept(e,id)}
            >
              Accept
            </button>
            <button
              className="decline-button"
              onClick={(e) => decline(e,id)}
            >
              Decline
            </button>
          </td>
        </tr>
      );
    });
  };

  const renderHeader = () => {
    return (
      <tr className="table-header">
        {Object.keys(INITIAL_STATE[0]).map((key) => (
          <th>{capitalize(key)}</th>
        ))}
      </tr>
    );
  };

  return (
    <table id="table">
      {renderHeader()}
      <tbody>{renderUsers()}</tbody>
    </table>
  );
}
export default Approval;