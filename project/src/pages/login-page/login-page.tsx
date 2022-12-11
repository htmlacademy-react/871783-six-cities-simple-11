import { Logo } from '../../components';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useRef, FormEvent } from 'react';
import { loginAction } from '../../store/api-actions';
import { AppRoute } from '../../router';
import { useAppDispatch } from '../../hooks';
import { AuthData } from '../../types/auth-data';
import { getRandomCity } from '../../utils';
import { changeCity } from '../../store/offers-process/offers-process';
import { toast } from 'react-toastify';

function LoginPage(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      if (!/^([A-Za-zА-Яа-я].*[0-9]|[0-9].*[A-Za-zА-Яа-я])$/.test(passwordRef.current.value.toString())) {
        toast.warn('Password must contain at least one letter and one number.');
        return;
      }
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  const handleLoginLocationClick = () => dispatch(changeCity(getRandomCity));

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 городов. Страница авторизации</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" onSubmit={ handleSubmit }>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={ loginRef }
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={ passwordRef }
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link tabs__item" to={ AppRoute.Main }>
                <span onClick={ handleLoginLocationClick }>{ getRandomCity }</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
