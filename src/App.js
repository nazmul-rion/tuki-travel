import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Register from './pages/Resgister/Register';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './routes/PrivateRoute';
import Navigationbar from './pages/Navigationbar/Navigationbar';
import Footer from './pages/Footer/Footer';
import PackageDetailsPage from './pages/PackageDetailsPage/PackageDetailsPage';
import ManageAllOrder from './pages/ManageAllOrders/ManageAllOrder';
import MyOrders from './pages/MyOrders/MyOrders';



function App() {
  return (
    <div className="App bg-custom">

      <BrowserRouter>
        <AuthProvider>
          <Navigationbar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/home"><HomePage /></Route>
            <Route path="/signin"><Login /></Route>
            <Route path="/signup"><Register /></Route>
            <PrivateRoute path="/packageDetails/:id">
              <PackageDetailsPage />
            </PrivateRoute>
            <PrivateRoute path="/manageallorders">
              <ManageAllOrder></ManageAllOrder>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </AuthProvider>
      </BrowserRouter >

    </div>
  );
}

export default App;
