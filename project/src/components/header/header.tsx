import { Logo } from '../../components';
import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute } from '../../router';

function Header(): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const { avatarUrl, email } = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          { authStatus === AuthorizationStatus.Auth
            ?
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div
                      className="header__avatar-wrapper user__avatar-wrapper"
                      style={{
                        backgroundImage: `url(${avatarUrl})`,
                        borderRadius: '50%',
                      }}
                    />
                    <span className="header__user-name user__name">{ email }</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <Link
                    className="header__nav-link"
                    to={ AppRoute.Main }
                    onClick={ handleLogout }
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
            :
            <nav className="header__nav">
              <Link className="header__nav-link" to={ AppRoute.Login }>
                <span className="header__signout">Sign in</span>
              </Link>
            </nav>}
        </div>
      </div>
    </header>
  );
}

export default Header;
