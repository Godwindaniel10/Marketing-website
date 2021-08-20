import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/contact/Contact';
import Product from './pages/product/Product';
import Navbar from './components/Navbar/Navbar';


const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <main>
                    <Switch>
                       <Route path="/" exact>
                          <Home />
                       </Route>
                       <Route path="/about" exact>
                          <About />
                       </Route>
                       <Route path="/contact" exact>
                          <Contact />
                       </Route>
                       <Route path="/product" exact>
                          <Product />
                       </Route>

                       <Redirect to="/" />
                    </Switch>
                </main>
            </Router>
        </>
    )
}

export default App
