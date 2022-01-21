import React, { useState, useCallback } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import _ from "lodash";
import { buildNeoUrl } from "../service";
import Loading from '../components/Loading';

const Asteroids = () => {
  const [asteroidsList, setAsteroidsList] = useState({});
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const currentDate = e || startDate;
    let formattedStartDate = formatDate(currentDate);
    let calculatedEndDate = subtractDays(currentDate, 7);
    setDate(e);
    setStartDate(formattedStartDate);
    setEndDate(calculatedEndDate.toISOString().substring(0, 10));
  };

  function formatDate(date) {
    return (
      date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDate()
    );
  }

  function subtractDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

  const fetchNeo = useCallback(() => {
    setAsteroidsList([]);
    setLoading(true);
    async function fetchNeoByDate() {
      let neoUrl = buildNeoUrl(startDate, endDate);
      let response = await fetch(neoUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      setLoading(false);
      setAsteroidsList(response.near_earth_objects);
    }
    fetchNeoByDate();
  }, [startDate, endDate]);
  
  return (
    <div className="background background--asteroids">
      <div className="container">
        <div className="asteroids-container">
          <div className="asteroids-input-container">
            <h4 className="asteroids-input-container__heading">
              Choose a start date and we'll show you Neos for that week (7 days
              prior to start date)
            </h4>
            <DatePicker selected={date} onChange={handleChange} withPortal />
            <hr />
            <button className="round-btn round-btn--white" onClick={fetchNeo}>Launch</button>
          </div>
          
          {loading ? <Loading />: ''}

          <div className={_.isEmpty(asteroidsList) ? "list-box" : "list-box list-box__backgroundColor"} id="scrollbar">
            {startDate !== "" && asteroidsList
              ? _.map(asteroidsList, function (value, key) {
                  let id = _.uniqueId();
                  return (
                    <div className="accordion accordion-flush" id={id} key={key}>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#collapse' + id} aria-expanded="false" aria-controls="flush-collapseOne">
                            <span className="list-box__neo-date">{key}</span>
                            <span className="list-box__neo-date--count">{value.length + ' objects'}</span>
                          </button>
                        </h2>
                        <div
                          id={'collapse' + id}
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <ul className="list-group asteroid-list">
                                {value.map(v => (
                                    <li className="list-group-item asteroid-list__item" key={v.id}>
                                        <h4 className="card-title">Name: {v.name}</h4>
                                        <p className="card-text">Is hazardous: {v.is_potentially_hazardous_asteroid === true ? 'Yes' : 'No'}</p>
                                        <p className="card-text">Absolute magnitutde: {v.absolute_magnitude_h}</p>
                                        <div className="asteroid-list__item--content">
                                        <div>
                                            <hr className="dropdown-divider" />
                                            <h5 className="card-subtitle text-muted">Estimated Diameter</h5>
                                            <h6 className="lh-sm d-grid">Kilometers:
                                            <span className="lh-1">Min - {v.estimated_diameter.kilometers.estimated_diameter_min}</span>
                                            <span className="lh-1">Max - {v.estimated_diameter.kilometers.estimated_diameter_max}</span>
                                            </h6>
                                            
                                            <h6 className="lh-sm d-grid">Miles: 
                                            <span className="lh-1">Min - {v.estimated_diameter.miles.estimated_diameter_min}</span>
                                            <span className="lh-1">Max - {v.estimated_diameter.miles.estimated_diameter_max}</span>
                                            </h6>
                                        </div>
                                          <div>
                                              <hr className="dropdown-divider" />
                                              <h5 className="card-subtitle text-muted">Relative Velocity</h5>
                                              <p className="card-text">Kilometers per hour: {v.close_approach_data[0].relative_velocity.kilometers_per_hour}</p>
                                              <p className="card-text">Miles per hour: {v.close_approach_data[0].relative_velocity.miles_per_hour}</p>
                                          </div>
                                          <div>
                                              <hr className="dropdown-divider" />
                                              <h5 className="card-subtitle text-muted">Miss Distance</h5>
                                              <p className="card-text">Kilometers: {v.close_approach_data[0].miss_distance.kilometers}</p>
                                              <p className="card-text">Miles: {v.close_approach_data[0].miss_distance.miles}</p>
                                          </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asteroids;
