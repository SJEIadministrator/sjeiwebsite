import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import NavBar from './Navbar';
import Home from './Home';
import Whatwedo from './Whatwedo';
import Team from './team';
import Board from './Board';
import Volunteer from './Volunteer';
import William from './William';
import TakeAction from './TakeAction';
import Donation from './Donation';
import Footer from './Footer';
import CorporateTransparency from './corporatetransparency';
import Contact from './Contact';
import PressRelease from './pressrelease';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Whatwedo" component={Whatwedo} />
          <Route path="/team" component={Team} />
          <Route path="/pressrelease" component={PressRelease} />

          <Route
            path="/corporatetransparency"
            component={CorporateTransparency}
          />
          <Route path="/Contact" component={Contact} />

          <Route path="/board" component={Board} />
          <Route path="/volunteer" component={Volunteer} />
          <Route path="/William-G-Bentz" component={William} />
          <Route path="/take-action" component={TakeAction} />
          <Route path="/donation" component={Donation} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
