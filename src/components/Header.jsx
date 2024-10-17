import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authenAction } from '../store/auth';

const Header = () => {
  const isAuthen = useSelector(({ auth }) => auth.isAuthen)
  const dispatch = useDispatch()

  function logout() {
    dispatch(authenAction.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {
        isAuthen &&
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </nav>
      }
    </header>
  );
};

export default Header;
