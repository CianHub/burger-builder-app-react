import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/burger-builder/burger-builder";
import Checkout from "./containers/Checkout/checkout";
import { Route, Switch, withRouter } from "react-router-dom";
import Orders from "./containers/Orders/Orders";
import Authentication from "./containers/auth/auth";
import Logout from "./containers/auth/logout";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";

class App extends Component {
  componentDidMount() {
    this.props.onTrySignIn();
  }
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/auth" component={Authentication} />
            <Route path="/logout" component={Logout} />

            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTrySignIn: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
