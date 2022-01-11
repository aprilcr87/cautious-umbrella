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
    <div class="container">
      <div className="apod-container">
      {apodInfo ? (
        <div class="card text-dark bg-light mb-3 apod-container--card">
          <div class="text-center">
          <img src={apodInfo.url} class="img-fluid rounded mx-auto d-block apod-container--img" alt="random space view" />
          </div>
          <div class="card-body">
            <h5 class="card-title">{apodInfo.title}</h5>
            <p class="card-text">{apodInfo.explanation}</p>
            <div class="container">
              <div class="row">
                <div class="col">{apodInfo.copyright}</div>
                <div class="col">{apodInfo.date}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      </div>
    </div>
  );
};

export default Apod;
