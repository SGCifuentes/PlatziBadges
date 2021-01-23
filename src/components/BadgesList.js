import React from "react";

import logoTwitter from "../images/twitter.png";
import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
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
                  />{" "}
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
