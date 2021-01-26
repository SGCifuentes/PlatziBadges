import React from "react";
import {Link} from 'react-router-dom';

import logoTwitter from "../images/twitter.png";
import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      )
    }
    return (
      <ul className="list-unstyled list-group">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="Badge__card card">
              <img
                src={badge.avatarUrl}
                alt="avatar"
                className="card--avatar"
              />
              <div className="Badge__card--info">
                <p className="font-weight-bold">
                  {badge.firstName} {badge.lastName}
                </p>
                <p className="text-primary twitter">
                  <img
                    src={logoTwitter}
                    alt="logo twitter"
                    className="twitter--logo"
                  />
                  @{badge.twitter}
                </p>
                <p className="font-weight-light">{badge.jobTitle}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
