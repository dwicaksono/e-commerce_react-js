import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const onToken = (token) => {
    alert("Payment Succesful");
  };
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GyARHCZXI2NPxte6mmweec9fGyZjNay2tbNoVze6TjAAl14tssSdmc91KuxQrmrsQOg6SSv410Q3XRSZT8jmmpg00QdPBDMQG";
  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
