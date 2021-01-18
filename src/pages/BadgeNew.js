import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";

import Navbar from "../components/Navbar.js";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  state = { form: {} };

  handleChange = (e) => {
    this.setState({
      form: {
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Sebastian"
                lastName="Gonzalez"
                jobTitle="Frontend Developer"
                avatarUrl="https://media-exp1.licdn.com/dms/image/C4E03AQGSwkRIuQkyvg/profile-displayphoto-shrink_200_200/0/1606506361834?e=1616630400&v=beta&t=WA70fHT0jDt4b16rY0tpPgAZFjRFq_gZZa84UdKR_kU"
                twitter="SGCifuentes"
              />
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
