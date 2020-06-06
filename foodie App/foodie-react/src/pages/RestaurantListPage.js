import React, { Component } from "react";
import "../styles/restaurantListPageStyles.css";
import HeaderBar from "../components/HeaderBar";
import { RestaurantService } from "../services/RestaurantService";
import RestaurantCard from "../components/RestaurantCard";

export class RestaurantListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      error: null,
      data: []
    };
  }

  componentDidMount() {
    this.fetchRestaurantList();
  }

  /**
   * Fetch the list of restaurants from RestaurantService and updates the component state.
   * Sets the state to display loading indicator during data fetch from service.
   */
  async fetchRestaurantList() {
    this.setState({ isLoading: true });
    let restaurantsList = await RestaurantService.getRestaurantsList();
    if (restaurantsList.length > 0) {
      this.setState({
        isLoading: false,
        data: restaurantsList,
        error: null
      });
      console.log(this.state);
    } else {
      this.setState({
        isLoading: false,
        data: restaurantsList,
        error: "No Data Present!"
      });
    }
  }

  render() {
    return (
      <div className="restaurant-list-container">
        <HeaderBar />
        <div className="restaurant-list-wrapper child">
          {this.state.data.map(res => {
            return (
              <div>
                <RestaurantCard
                  key={res.id}
                  restaurant={res}
                  history={this.props.history}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default RestaurantListPage;
