import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/restaurantCardStyles.css";
import restPlaceHolder from "../resources/images/restPlaceholder.jpg";

export class RestaurantCard extends Component {
  static propTypes = {
    restaurant: PropTypes.object,
    onClick: PropTypes.func
  };

  render() {
    return (
      <div
        className="restaurant-card"
        onClick={() =>
          this.props.history.push("/orders/" + this.props.restaurant.id)
        }
      >
        <img
          className="restaurant-logo"
          src={
            this.props.restaurant.img
              ? this.props.restaurant.img
              : restPlaceHolder
          }
          alt="restaurant pic"
        />
        <div className="restaurant-name wrap-text">
          {this.props.restaurant.name}
        </div>
        <div className="restaurant-desc wrap-text">
          {this.props.restaurant.cuisines}
        </div>
        <div className="restaurant-location">
          <i className="fas fa-map-marker-alt"></i>
          <span className="distance">{this.props.restaurant.rating}</span>
        </div>
        <div className="restaurant-review">{`${this.props.restaurant.reviews} reviews`}</div>
      </div>
    );
  }
}

export default RestaurantCard;
