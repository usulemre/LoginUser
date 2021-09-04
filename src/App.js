
import Login from "./Login";
import Home from "./Home";
import { Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
