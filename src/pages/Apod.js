import React, { useState, useEffect } from "react";

import { apodUrl } from "../service";

const Apod = () => {
  const [apodInfo, setApodInfo] = useState({});

  useEffect(() => {
    async function fetchApod() {
      let response = await fetch(apodUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      setApodInfo(response);
    }

    fetchApod();
  }, []);

  return (
    <div className="background background--apod">
      <div className="container">
      <div className="apod-display">
      {apodInfo ? (
        <div className="card text-dark mb-3 apod-display--card" id="scrollbar">
          <div className="text-center">
          <img src={apodInfo.url} className="img-fluid rounded mx-auto d-block apod-display--img" alt="random space view" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{apodInfo.title}</h5>
            <p className="card-text">{apodInfo.explanation}</p>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h6 className="card-subtitle mb-2 u-margin-bottom-small">{apodInfo.copyright}</h6>
                </div>
                <div className="col">
                  <h6 className="card-subtitle mb-2 u-margin-bottom-small">{apodInfo.date}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      </div>
      </div>
    </div>
  );
};

export default Apod;
