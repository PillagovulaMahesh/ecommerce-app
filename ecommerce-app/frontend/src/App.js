import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/products" exact component={ProductList} />
                    <Route path="/products/:id" component={ProductDetails} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </AuthProvider>
    );
};

export default App;
