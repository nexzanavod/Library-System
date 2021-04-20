import { Link } from 'react-router-dom';

import { FiHome } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';


const Navbar = ({ show }) => {

  return (
    <div className={show ? 'sidenav active' : 'sidenav'}>
      <ul>
        <li>
          <Link to="/">
            <FiHome />
         Home
      </Link>
        </li>

        <li>
          <Link to="/about">
            <BsPerson />
        About
      </Link>
        </li>

        <li>
          <Link to="/">Contact me</Link>
        </li>

        <li>
          <Link to="/login">
            <BsPerson />
        Login
      </Link>
        </li>





      </ul>
    </div>
  )
}

export default Navbar