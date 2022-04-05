import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import './navigation.scss';

const Navigation = ({ users }) => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="home-link" to="/">
          <h1>OraclePayouts</h1>
        </Link>
        <div className="nav-links-container">
          <Link className='nav-link' to='/users'>
            <h2>Users</h2>
          </Link>
          <Link className='nav-link' to='/oracle'>
            <h2>Oracle</h2>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;
