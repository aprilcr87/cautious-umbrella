import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">
          <i class="fas fa-user-astronaut"></i>
          <Link to="/" className="home-btn">Space Cadet</Link>
        </span>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/apod">Apod</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/asteroids">Asteroids</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/mars">Mars Rover</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
