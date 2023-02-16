import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { IAuthenticationReducerState } from "../../types/state.types";
import { authenticationActions } from "../../store";

const Header = () => {
  const isLoggedIn = useSelector(
    (state: IAuthenticationReducerState) => state.authentication.isAuthenticated
  );
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authenticationActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isLoggedIn && (
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
