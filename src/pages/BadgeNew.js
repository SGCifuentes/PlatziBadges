import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";

import Navbar from "../components/Navbar.js";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  state = { form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  } };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
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
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                avatarUrl="https://static.platzi.com/media/avatars/avatars/sebastiangonzalez19_c40420cd-0d41-4910-8654-c7beeb4ea680.jpeg"
                twitter={this.state.form.twitter}
                email={this.state.form.email}
              />
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
