// import logo from './logo.svg';
import './App.css';
import { useRoutes} from 'react-router-dom'
import HomePage from './Components/HomePage';
import SignIn from './Components/loginForm';
import SignUp from './Components/Signup';
import AddCustomer from './Components/AddCustomer';
import Navbar from './Components/NavBar';
import CustomerDetails from './Components/CustomerDetails';
import CreateOrderPerWeight from './Components/CreateOrders/CreateOrderPerWeight';

const App = () => {
    const routes = useRoutes([
      {path: "/", element: < HomePage />},
      {path: "/login", element: < SignIn />},
      {path: "/signup", element: <SignUp />},
      {path: "/addCustomer", element: <AddCustomer />},
      {path: "/customerDetails", element: <CustomerDetails />},
      {path: "/createOrderPerWeight", element: <CreateOrderPerWeight />},
    ])
    return routes
}

export default App;
