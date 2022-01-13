import React, { useState, useCallback } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import _ from "lodash";
import { buildNeoUrl } from "../service";

const Asteroids = () => {
  const [asteroidsList, setAsteroidsList] = useState({});
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleChange = (e) => {
    const currentDate = e || startDate;
    let formattedStartDate = formatDate(currentDate);
    let calculatedEndDate = subtractDays(currentDate, 7);
    console.log(e);
    console.log(formattedStartDate);
    console.log(calculatedEndDate.toISOString().substring(0, 10));
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
    console.log(startDate, endDate);
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
      setAsteroidsList(response.near_earth_objects);
    }
    fetchNeoByDate();
  }, [startDate, endDate]);

  
  return (
    <div className="background background--asteroids">
      <div className="container">
        <div className="asteroids-container">
          <div className="input-box">
            <h4 className="input-box__heading">
              Choose a start date and we'll show you Neos for that week (7 days
              prior to start date)
            </h4>
            <DatePicker selected={date} onChange={handleChange} withPortal />
            <button onClick={fetchNeo}>Launch</button>
          </div>

          <div className="list-box">
            {startDate !== "" && asteroidsList
              ? _.map(asteroidsList, function (value, key) {
                  let id = _.uniqueId();
                  return (
                    <div className="accordion accordion-flush" id={id}>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#collapse' + id} aria-expanded="false" aria-controls="flush-collapseOne">
                            {key}
                          </button>
                        </h2>
                        <div
                          id={'collapse' + id}
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <ul className="list-group">
                                {value.map(v => (
                                    <li className="list-group-item" key={v.id}>
                                        <div className="card w-75">
                                            <div className="card-body">
                                                <h5 className="card-title">Name: {v.name}</h5>
                                                <p className="card-text">Is hazardous: {v.is_potentially_hazardous_asteroid === true ? 'true' : 'false'}</p>
                                                <hr className="dropdown-divider" />
                                                <h5 className="card-title">Relative Velocity</h5>
                                                <p className="card-text">Kilometers per hour: {v.close_approach_data[0].relative_velocity.kilometers_per_hour}</p>
                                                <p className="card-text">Miles per hour: {v.close_approach_data[0].relative_velocity.miles_per_hour}</p>
                                                <hr className="dropdown-divider" />
                                                <h5 className="card-title">Miss Distance</h5>
                                                <p className="card-text">Kilometers: {v.close_approach_data[0].miss_distance.kilometers}</p>
                                                <p className="card-text">Miles: {v.close_approach_data[0].miss_distance.miles}</p>
                                                <hr className="dropdown-divider" />
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
              : <p>No asteroids for those dates.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asteroids;
