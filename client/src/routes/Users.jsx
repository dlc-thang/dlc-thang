import { useState } from "react";
import { Outlet } from 'react-router-dom';
import './users.scss';
import UserInfo from "../components/UserInfo";
import PSBT from "../components/PSBT";

const users = [
  {
    "name": "Alice",
    "subtitle": "in Wonderland",
    "txid": "fcf850f1dbcefcc690144d96e385cb0c3d1a9f523e2d4d2cf833f4ae4dc9c3fc",
    "vout": 0,
    "face": "/alice-face.png",
  },
  {
    "name": "Bob",
    "subtitle": "the Builder",
    "txid": "8625a4f367220761493ff9c5932b6042389eac060cbd62b700fec37a397cf6fe",
    "vout": 0,
    "face": "/bob.jpg"
  },
  {
    "name": "Charlie",
    "txid": "dad837b8a3324d6c084420bf26d3c1277cfa0afc9263320a01dac315274c82a6",
    "vout": 0,
    "subtitle": "Brown",
    "face": "/charlie.jpeg"
  },
  {
    "name": "Dave",
    "subtitle": "Breakfast Can Wait",
    "txid": "206a327bba33f9550acbc5614b1b9654b46327c52824b8462db16330e74e18d9",
    "vout": 0,
    "face": "/dave.webp"
  },
  {
    "name": "Oracle",
    "subtitle": "Incentivized to not Equivocate",
    "face": "/oracle.webp"
  }
];

const Users = () => {

  const [inputs, setInputs] = useState([]);

  const [output, setOutput] = useState('');

  const [psbt, setPSBT] = useState({});

  const handleSetInputs = (input) => {
    setInputs([...inputs, input]);
  }

  const handleSetOutput = (output) => {
    setOutput(output);
  }

  const handleSetPSBT = (updated_psbt) => {
    setPSBT(updated_psbt);
  }

  return (
    <div className="main-container">
      <div>
        <Outlet />
        {users.map(user => (
          <UserInfo user={user} setInput={handleSetInputs} setOutput={handleSetOutput} />
        ))}
      </div>
      <div>
        <PSBT inputs={inputs} psbt={psbt} output={output} />
      </div>
    </div>
  );
}

export default Users;