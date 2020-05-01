import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header.js'

import Homepage from './pages/Homepage/Homepage.js'
import ShopPage from './pages/Shoppage/Shoppage.js'
import SigninAndSignUp from './pages/Signin-and-Signup/Signin-and-Signup.js';
import { auth, createUserProfileDocument } from './components/Firebase/FirebaseUtil.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = { currentUser: null }
  }
  unsubscribeDidMount = null

  componentDidMount() {
    this.unsubscribeDidMount = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })

        console.log(this.state)

      }

      this.setState({ currentUser: userAuth })

    })
  }

  componentWillUnmount() {
    this.unsubscribeDidMount()
  }

  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shops' component={ShopPage} />
          <Route path='/signin' component={SigninAndSignUp} />
        </Switch>
      </div >
    );
  }
}



// function App() {
//   return (
//     <div >
//       <Header />
//       <Switch>
//         <Route exact path='/' component={Homepage} />
//         <Route path='/shops' component={ShopPage} />
//         <Route path='/signin' component={SigninAndSignUp} />
//       </Switch>
//     </div>
//   );
// }

export default App;
