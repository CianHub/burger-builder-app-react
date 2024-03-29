import React from "react";

import Burger from "../../Burger/burger";
import Button from "../../ui/button/button";
import classes from "./CheckoutSummary.module.css";

const CheckoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Order Summary:</h1>
      <div
        style={{
          width: "100%",
          margin: "0",
          boxSizing: "border-box",
          paddingRight: "5px"
        }}
      >
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
