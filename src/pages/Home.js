import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="background background--home">
      <div className="container">
        <div className="page-selection">

          <div className="card page-selection--card">
            <div className="card-body">
              <h5 className="card-title">Astronomy Picture of the Day</h5>
              <h6 className="card-subtitle mb-2 u-margin-bottom-small">
                Check out today's subject
              </h6>
              <Link to="apod"><button type="button" className="round-btn round-btn--gray">Lift off</button></Link>
            </div>
          </div>

          <div className="card page-selection--card">
            <div className="card-body">
              <h5 className="card-title">Near Earth Object Service</h5>
              <h6 className="card-subtitle mb-2 u-margin-bottom-small">
                Search for asteroids by date
              </h6>
              <Link to="asteroids"><button type="button" class="round-btn round-btn--gray">Lift off</button></Link>            
            </div>
          </div>

          <div className="card page-selection--card">
            <div className="card-body">
              <h5 className="card-title">Mars Rover Photos</h5>
              <h6 className="card-subtitle mb-2 u-margin-bottom-small">
                View pictures by sol (Earth date)
              </h6>
              <Link to="mars"><button type="button" className="round-btn round-btn--gray">Lift off</button></Link>            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
