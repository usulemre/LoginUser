
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Router, Switch, Route,Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={() => <Home auth={!userInfo}/>} />
    </Switch>
  );
}

export default App;
