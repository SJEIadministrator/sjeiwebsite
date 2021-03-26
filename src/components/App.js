import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './Navbar';
import Home from './Home';
import Whatwedo from './Whatwedo';
import Contact from './Contact';
import Corporate from './Corporate';
import Board from './Board';
import Volunteer from './Volunteer';
import William from './William';
import TakeAction from './TakeAction';
import Donation from './Donation';
import Footer from './Footer';
import Slide from './Slide';
import DonationForm1 from './DonationForm1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Slide />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/what-we-do" component={Whatwedo} />
          <Route path="/contact" component={Contact} />
          <Route path="/corporate-transparency" component={Corporate} />
          <Route path="/board" component={Board} />
          <Route path="/volunteer" component={Volunteer} />
          <Route path="/williambentz" component={William} />
          <Route path="/take-action" component={TakeAction} />
          <Route path="/donation" component={Donation} />
          <Route path="/donation-form1" component={DonationForm1} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
