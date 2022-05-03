import React, { useEffect } from "react";
import { useHistory, Switch, Route,Link, useRouteMatch } from "react-router-dom";
import EditProfile from "./EditProfile";
import Orders from "./Orders";

function Profile({ isLog }) {
const history = useHistory();

useEffect(() => {
if (isLog) {
history.push("/");
}
}, [isLog, history]);
/* const { isLog } = props
console.log(isLog) */

const {path, url} = useRouteMatch()

return <> {isLog ? <>
    <h1> This is my profile </h1>
    <ol>
      <li>
        <Link to={`${url}/EditProfile`}>Edit</Link>
      </li>
      <li>
        <Link to={`${url}/Orders`}>Orders</Link>
      </li>
    </ol>
    <Switch>
      <Route path={`${path}/EditProfile`} component={EditProfile} />
      <Route path={`${path}/Orders`} component={Orders} />
    </Switch>
  </>: "need to log in"} </>;
}

export default Profile;