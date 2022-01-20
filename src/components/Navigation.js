import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <i className="fas fa-user-astronaut"/>
          <Link to="/" className="logo-btn">Space Cadet</Link>
        </span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="apod">Apod</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="asteroids">Asteroids</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="mars">Mars Rover</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
