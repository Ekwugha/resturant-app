import HomePage from './pages/home/home.page';
import AboutPage from './pages/about/about.page';
import { Switch, Route } from 'react-router-dom';
import CustomNavbar from './components/navbar/navbar.component';
import ContactBtn from './components/contact-btn/contact-btn.component';
import ContactPage from './pages/contact/contact.page';
import MenuPage from './pages/menu/menu.page';
import CartPage from './pages/cart/cart.page';
// import Footer from './components/footer/footer.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <ContactBtn />
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/about' component={AboutPage} />
          <Route  path='/contact' component={ContactPage} />
          <Route  path='/menu' component={MenuPage} />
          <Route  path='/cart' component={CartPage} />
        </Switch>
        {/* <Footer /> */}
    </div>
  );
}

export default App;
