import React, { Component } from "react";
import "../styles/ordersPageStyles.css";
import HeaderBar from "../components/HeaderBar";
import { RestaurantService } from "../services/RestaurantService";
import OrdersView from "../components/OrdersView";
import CartView from "../components/CartView";
class OrdersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {},
      cart: {
        items: [],
        subTotal: 0,
        deliveryCharges: 45,
        coupon: 90,
        grandTotal: 0
      }
    };
  }

  componentDidMount() {
    this.fetchRestaurantDetails(this.props.match.params.id);
  }

  /**
   * Fetch the restaurant details from RestaurantService and updates the component state.
   * Sets the state to display loading indicator during data fetch from service.
   */
  async fetchRestaurantDetails(id) {
    this.setState({ isLoading: true });
    let restaurantDetails = await RestaurantService.getRestaurantDetail(id);
    if (restaurantDetails) {
      this.setState({
        isLoading: false,
        restaurant: restaurantDetails,
        error: null
      });
    } else {
      this.setState({
        isLoading: false,
        restaurant: null,
        error: "Restaurant detail not found!"
      });
    }
  }

  handleAddToCart = item => {
    let cart = { ...this.state.cart };

    // If an element is already present increment otherwise add to cart
    let itemPresent = cart.items.findIndex(element => element.id === item.id);
    if (itemPresent >= 0) {
      this.handleIncrement(item);
    } else {
      const newItem = { ...item, quantity: 1 };
      cart.items.push(newItem);
      this.calculateTotal(cart);
    }
  };

  calculateTotal = cart => {
    //Calculate Totals and update
    cart.subTotal = 0;
    for (let item of cart.items) {
      cart.subTotal = cart.subTotal + item.price * item.quantity;
    }
    cart.grandTotal = cart.subTotal + cart.deliveryCharges - cart.coupon;
    cart.grandTotal = cart.grandTotal > 0 ? cart.grandTotal : 0;
    this.setState({ cart });
  };

  handleIncrement = item => {
    let cart = { ...this.state.cart };
    let newItems = [...this.state.cart.items];

    //Update the item in cart
    newItems[newItems.findIndex(element => element.id === item.id)].quantity++;
    cart.items = newItems;
    this.calculateTotal(cart);
  };

  handleDecrement = item => {
    let cart = { ...this.state.cart };
    let newItems = [...this.state.cart.items];

    //Update the item in cart
    if (item.quantity !== 1) {
      newItems[newItems.findIndex(element => element.id === item.id)]
        .quantity--;
    } else {
      newItems.splice(
        newItems.findIndex(element => element.id === item.id),
        1
      );
    }
    cart.items = newItems;
    this.calculateTotal(cart);
  };

  render() {
    return (
      <div className="main-container order-page">
        <HeaderBar />
        <div className="order">
          <OrdersView
            restaurant={this.state.restaurant}
            onAddToCart={this.handleAddToCart}
          />
          <CartView
            cart={this.state.cart}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </div>
      </div>
    );
  }
}
export default OrdersPage;
