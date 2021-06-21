import React from "react";

function About(props) {
  const profilepic = "images/" + props.data.image;
  const { name, marital, phone, email, resumedownload, address } = props.data;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Tim Baker Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <div className="row">
            <h2>About Me</h2>
            <p>
              <span>{name}</span> <br />
              <span>{marital}</span> <br />
              <span>
                {address.street}, {address.city}, {address.zip}
              </span>{" "}
              <br />
              <span>Indonesian Citizenship</span> <br />
              <span>{email}</span> <br />
              <span>{phone}</span> <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
