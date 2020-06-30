import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./App.css";
import Header from "./components/Header/Header.js";

import Homepage from "./pages/Homepage/Homepage.js";
import ShopPage from "./pages/Shoppage/Shoppage.js";
import SigninAndSignUp from "./pages/Signin-and-Signup/Signin-and-Signup.js";
import checkOutPage from "./pages/Checkout/Checkout.js";
import {
  auth,
  createUserProfileDocument,
} from "./components/Firebase/FirebaseUtil.js";
import { setCurrentUser } from "./redux/user/userAction";
import { selectCurrentUser } from "./redux/user/userSelector";

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = { currentUser: null };
  // }
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shops" component={ShopPage} />
          <Route exact path="/checkout" component={checkOutPage} />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SigninAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
