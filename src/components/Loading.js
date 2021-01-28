import React from "react";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import logo from "../images/badge-header.svg";
import header from "../images/platziconf-logo.svg";
class Loading extends React.Component {
  render() {
    const skeletonCard = (
      <li className="Badge__card card">
        <img alt="" className="card--avatar" />
        <div className="Badge__card--info">
          <p>
            <Skeleton />
          </p>
          <p>
            <Skeleton />
          </p>
          <p>
            <Skeleton />
          </p>
        </div>
      </li>
    );
    if (this.props.name === "Badge") {
      return (
        <React.Fragment>
          <div className="Badges">
            <div className="Badges__hero">
              <div className="Badges__container">
                <img src={logo} alt="Logo" className="Badges_conf-logo" />
              </div>
            </div>
          </div>

          <div className="Badges__container">
            <div className="Badges__buttons">
              <Link to="/badges/new" className="btn btn-primary">
                New Badge
              </Link>
            </div>

            <div className="Badges__list">
              <div className="Badges__container">
                <ul className="list-unstyled list-group">
                  {skeletonCard}
                  {skeletonCard}
                  {skeletonCard}
                  {skeletonCard}
                </ul>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
    if (this.props.name === "BadgeNew") {
      return (
        <React.Fragment>
          <div className="BadgeNew__hero">
            <img
              className="BadgeNew__hero-image img-fluid"
              src={header}
              alt="Logo"
            />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-6">
                <SkeletonTheme color="white">
                  <Skeleton height={"300px"} />
                </SkeletonTheme>
              </div>
              <div className="col-6">
              <SkeletonTheme color="white">
                <Skeleton height={"500px"} />
                </SkeletonTheme>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Loading;
