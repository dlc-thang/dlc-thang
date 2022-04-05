import { useState } from "react";
import { Outlet } from 'react-router-dom';
import './users.scss';

const Users = () => {

  const users = [
    {
      "name": "Alice",
      "address": "tb1q499hrrgz8uep4l5vqymfjw7vxp3u69ql547eju",
      "pubkey": "03adf0d2e6138e26a617326837924ae54bd9a5082c7832cd8ac389700bf9751e78",
      "hidden_service_address": "",
    },
    {
      "name": "Bob",
      "address": "tb1q4ufl6t323d7swa6kah3qlq6wl32lr9x2t8d5k8",
      "pubkey": "0227eefedbea0ab5751c0f8a996dd3cddcd9c9b67917815099bfdb59279fba1bcf",
      "hidden_service_address": "",
    },
    {
      "name": "Charlie",
      "address": "tb1qaqslw9325a5s9twkcc5mfftj2qx9erksvk52tk",
      "pubkey": "03157d4db086d2097a14c0f38140f271f5c7ad1c78fc9742e688291163f43483fd",
      "hidden_service_address": "",
    },
    {
      "name": "Dana",
      "address": "tb1qqj9waxmrlwazz5gregpsx69gf2vdukzz0yr4kr",
      "pubkey": "03494d04e650ef1981fd9554e4751fd6f8dc04593ccbdec9a88132c0c3c883e9ec",
      "hidden_service_address": "",
    }
  ];

  const [currUser, setCurrUser] = useState(users[0]);

  return (
    <div>
      <Outlet />
      <div className="usernames-container">
        {users.map(user => (
          <button onClick={() => setCurrUser(user.name)}>{user.name}</button>
        ))}
      </div>
    </div>
  );
}

export default Users;