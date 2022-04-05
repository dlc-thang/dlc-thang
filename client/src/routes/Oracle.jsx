import { Outlet } from 'react-router-dom';
import OracleInfo from "../components/OracleInfo";

const Oracle = ({ psbt, inputs }) => {
  return (
    <div>
      <Outlet />
      <OracleInfo psbt={psbt} inputs={inputs}></OracleInfo>
    </div>
  );
}

export default Oracle;