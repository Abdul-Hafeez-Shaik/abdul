// import logo from './logo.svg';
import './App.css';
import { useRoutes} from 'react-router-dom'
import HomePage from './Components/HomePage';
import SignIn from './Components/loginForm';
import SignUp from './Components/Signup';

const App = () => {
    const routes = useRoutes([
      {path: "/", element: < HomePage />},
      {path: "/login", element: < SignIn />},
      {path: "/signup", element: <SignUp />},
    ])
    return routes
}

export default App;
