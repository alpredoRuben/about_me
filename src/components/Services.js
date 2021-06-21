import React from "react";

export default function Services() {
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Website App</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <p className="info">
                Create and develop web based application for your business
                project
              </p>
              <p className="info">Fixing bugs services for your source code</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Android App</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p className="info">
            Create and develop android application for your business project
          </p>
          <p className="info">Fixing bugs services for your android source code</p>
        </div>
      </div>
    </section>
  );
}
