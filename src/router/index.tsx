import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Suspense } from "react";
import { ToDoListRoute, NewTaskRoute } from "./routers";

const Routers: React.FC = (props) => {
  return (
    <Router>
      <Suspense fallback={<div>Loading....</div>}>
        <Switch>
          <Route
            path={ToDoListRoute.path}
            exact
            component={ToDoListRoute.Component}
          />
          <Route
            path={NewTaskRoute.path}
            exact
            component={NewTaskRoute.Component}
          />
          <Redirect path="*" to={"/to-do-list"} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routers;
