import { Fragment } from "react";
import Counter from "./components/counter/Counter";
import "./App.css";
import Auth from "./components/Auth";
import Header from "./components/layout/Header";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";
import { IAuthenticationReducerState } from "./types/state.types";

function App() {
  const isLoggedIn = useSelector(
    (state: IAuthenticationReducerState) => state.authentication.isAuthenticated
  );
  return (
    <Fragment>
      <Header />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && (
        <Fragment>
          <UserProfile />
          <Counter />
        </Fragment>
      )}
    </Fragment>
  );
}

export default App;
