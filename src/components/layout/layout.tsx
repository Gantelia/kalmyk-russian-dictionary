import { Link, Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';

import Logo from '../../images/kalmgu-logo.svg';
import ScrollButton from '../scroll-button/scroll-button';
import './layout.scss';

function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="app">
      <header className="header">
        <Link className="logo" to="/">
          <img
            className="logo__image"
            src={Logo}
            width="35"
            height="35"
            alt="Логотип КалмГУ"
          />
        </Link>
        {/* Одинаковый <h1> для всех страниц - плохая практика для поисковиков, поэтому <p> или <div>*/}
        <p className="header__title">
          Электронный сводный
          <br /> калмыцко-русский
          <br /> и русско-калмыцкий словарь
        </p>
      </header>
      <Outlet />
      <footer className="footer">
        <div className="social">
          <ul className="social__list">
            <li className="social__item">
              <a className="social__link" href="https://m.vk.com/kalmgu08">
                <svg
                  className="social__icon"
                  aria-hidden="true"
                  focusable="false"
                  viewBox="5 0 16 15"
                  width="26"
                  height="15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M25.96 1.08c.21.59-.47 1.93-2.03 4.03a103.28 103.28 0 01-1.62 2.15c-.14.19-.27.41-.41.67-.14.26-.2.46-.17.58.03.12.1.28.18.47.08.2.23.39.44.59a45.25 45.25 0 00.84.78 13.6 13.6 0 012.67 3.2c.03.07.07.19.1.36.03.17.03.33-.01.46-.04.14-.15.27-.34.38-.19.12-.45.17-.8.17l-3.46.06a1.5 1.5 0 01-.76-.07c-.29-.1-.52-.2-.7-.3l-.28-.17c-.27-.19-.58-.48-.94-.87l-.93-1.06a4.5 4.5 0 00-.83-.8c-.29-.21-.54-.28-.76-.21a.89.89 0 00-.1.05 1.74 1.74 0 00-.52.6c-.1.16-.17.4-.24.71-.07.32-.1.67-.09 1.06a1.4 1.4 0 01-.15.63l-.05.07c-.16.17-.4.28-.72.3h-1.56c-.64.04-1.3-.04-1.97-.22a7.5 7.5 0 01-1.78-.73c-.51-.3-.98-.6-1.4-.9-.42-.3-.73-.57-.95-.79l-.34-.33-.37-.4c-.16-.2-.48-.6-.97-1.25a34.22 34.22 0 01-3.1-4.96A45.41 45.41 0 01.09 1.62 1.1 1.1 0 010 1.25c0-.1.01-.18.04-.22L.1.95C.23.77.5.69.87.69l3.7-.03a1.44 1.44 0 01.53.2l.07.05c.15.1.25.24.33.43a21.73 21.73 0 001.17 2.54l.22.4c.26.54.51 1.01.76 1.42.24.4.46.71.65.93.2.23.39.4.57.53.18.13.33.2.46.2a1 1 0 00.36-.08c.02 0 .04-.03.07-.06l.16-.3c.08-.17.14-.38.19-.65a10.76 10.76 0 000-3.82c-.06-.3-.12-.5-.19-.63l-.08-.16c-.22-.31-.6-.5-1.15-.59-.12-.02-.1-.13.07-.33.14-.17.31-.3.51-.41.48-.24 1.56-.35 3.24-.33.74.01 1.35.07 1.83.18.18.05.33.1.45.18.12.08.21.2.28.33a2.16 2.16 0 01.19 1.06c0 .27 0 .52-.02.76a213.7 213.7 0 00-.07 3.32c0 .16.02.34.05.56.02.21.07.39.15.53a.9.9 0 00.3.34l.24.05c.08.02.2-.03.35-.15a4.94 4.94 0 001.22-1.39 22.45 22.45 0 002.37-4.55c.03-.1.08-.17.13-.24a.6.6 0 01.15-.14l.05-.04.07-.04.18-.04h.27l3.9-.03c.35-.05.64-.04.86.03.23.07.37.14.42.23l.08.13z" />
                </svg>
                <span className="visually-hidden">Вконтакте</span>
              </a>
            </li>
            <li className="social__item">
              <a className="social__link" href="https://t.me/kalmguoficial">
                <svg
                  className="social__icon"
                  aria-hidden="true"
                  focusable="false"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13 2.17a10.84 10.84 0 100 21.67 10.84 10.84 0 000-21.67zm5.03 7.36c-.17 1.71-.87 5.88-1.23 7.8-.15.8-.45 1.08-.73 1.1-.63.06-1.1-.4-1.72-.8-.95-.63-1.5-1.02-2.41-1.63-1.07-.7-.38-1.1.24-1.72.16-.16 2.93-2.69 2.99-2.92a.22.22 0 00-.06-.2c-.06-.04-.15-.02-.22-.01-.1.02-1.62 1.03-4.58 3.02-.43.3-.82.44-1.17.43a7.56 7.56 0 01-1.68-.4c-.68-.21-1.2-.33-1.17-.71.03-.2.3-.4.8-.6a485.6 485.6 0 016.32-2.72c3.01-1.25 3.63-1.47 4.04-1.47.09 0 .3.02.43.13.1.09.14.2.15.3v.4z" />
                </svg>
                <span className="visually-hidden">Телеграм</span>
              </a>
            </li>
          </ul>
        </div>
        <p className="copyright">
          2022 © Калмыцкий Государственный Университет
        </p>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link
                className="navigation__link"
                to={pathname !== AppRoute.Main ? AppRoute.Main : AppRoute.About}
              >
                {pathname !== AppRoute.Main ? 'Главная' : 'О проекте'}
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
      <ScrollButton />
    </div>
  );
}

export default Layout;
