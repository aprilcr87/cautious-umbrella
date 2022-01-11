import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="background">
      <div className="container">
        <div className="page-selection">

          <div class="card page-selection--card">
            <div class="card-body">
              <h5 class="card-title">Astronomy Picture of the Day</h5>
              <h6 class="card-subtitle mb-2 u-margin-bottom-small">
                Check out today's subject
              </h6>
              <Link to="/apod"><button type="button" class="round-btn round-btn--gray">Lift off</button></Link>
            </div>
          </div>

          <div class="card page-selection--card">
            <div class="card-body">
              <h5 class="card-title">Near Earth Object Service</h5>
              <h6 class="card-subtitle mb-2 u-margin-bottom-small">
                Search for asteroids by date
              </h6>
              <Link to="/asteroids"><button type="button" class="round-btn round-btn--gray">Lift off</button></Link>            </div>
          </div>

          <div class="card page-selection--card">
            <div class="card-body">
              <h5 class="card-title">Mars Rover Photos</h5>
              <h6 class="card-subtitle mb-2 u-margin-bottom-small">
                View pictures by sol (Earth date)
              </h6>
              <Link to="/mars"><button type="button" class="round-btn round-btn--gray">Lift off</button></Link>            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
