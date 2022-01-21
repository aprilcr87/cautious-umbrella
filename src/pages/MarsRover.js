import React, { useState, UseCallback } from "react";
import _ from 'lodash';
import { rovers, roverCamInfo } from "../CameraInfo";

const MarsRover = () => {
  const [currentRover, setCurrentRover] = useState(_.find(roverCamInfo, ['rover', 'Curiosity']));

  const handleChange = (selectedRover) => {};

  return (
    <div className="background background--rover">
      <div className="container">
        <div className="rover-input-container">
          <div className="rover-select">
            <label className="rover-select--label">Choose a rover</label>
            <select class="form-select" aria-label="Default select example">
                {/* <option selected>Open this select menu</option> */}
                {rovers.map((rover) => {
                return <option value={rover}>{rover}</option>;
                })}
            </select>
          </div>
          <div>
              <label>Choose a camera</label>
              <select class="form-select" aria-label="Default select example">
                  {currentRover.cameras.map(cam => {
                      return(
                          <option value={cam.abbv}>{cam.camera}</option>
                      );
                  })}
              </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarsRover;
