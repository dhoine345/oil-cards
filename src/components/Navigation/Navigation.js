import './Navigation.css';

function Navigation() {
  return (
    <section className='navigation'>
      <nav>
        <ul className='navigation__menu'>
          <li className='navigation__menu-item'>
            <a className='navigation__menu-link' href='#'>Доставка топлива</a>
          </li>
          <li className='navigation__menu-item'>
            <a className='navigation__menu-link' href='#'>
              Топливные карты
              <div className='navigation__menu-arrow' />
            </a>
            <nav className='navigation__submenu'>
              <ul className='navigation__submenu-list'>
                <li className='navigation__submenu-item'>
                  <a href='#' className='navigatiom__submenu-link'>Ссылка</a>
                </li>
                <li className='navigation__submenu-item'>
                  <a href='#' className='navigatiom__submenu-link'>Ссылка</a>
                </li>
                <li className='navigation__submenu-item'>
                  <a href='#' className='navigatiom__submenu-link'>Ссылка</a>
                </li>
                <li className='navigation__submenu-item'>
                  <a href='#' className='navigatiom__submenu-link'>Ссылка</a>
                </li>
              </ul>
            </nav>
          </li>
          <li className='navigation__menu-item'>
            <a className='navigation__menu-link' href='#'>
              АЗС
              <div className='navigation__menu-arrow' />
            </a>
            <nav className='navigation__submenu'>
              <ul className='navigation__submenu-list'>
                <li className='navigation__submenu-item'>
                  <a href='#' className='navigatiom__submenu-link'>Ссылка</a>
                </li>
                <li className='navigation__submenu-item'>
                  <a href='#' className='navigatiom__submenu-link'>Ссылка</a>
                </li>
                <li className='navigation__submenu-item'>
                  <a href='#' className='navigatiom__submenu-link'>Ссылкаdfhgdfg gdfgdfgdfgg</a>
                </li>
                <li className='navigation__submenu-item'>
                  <a href='#' className='navigatiom__submenu-link'>Ссылка</a>
                </li>
              </ul>
            </nav>
          </li>
            <li className='navigation__menu-item'>
            <a className='navigation__menu-link' href='#'>Цены на топливо</a>
          </li>
          <li className='navigation__menu-item'>
            <a className='navigation__menu-link' href='#'>
              О компании
              <div className='navigation__menu-arrow' />
            </a>
            <nav className='navigation__submenu'>
              <ul className='navigation__submenu-list'>
                <li className='navigation__submenu-item'>
                  <a href='#' className='navigatiom__submenu-link'>Ссылка</a>
                </li>
                <li className='navigation__submenu-item'>
                  <a href='#' className='navigatiom__submenu-link'>Ссылка</a>
                </li>
                <li className='navigation__submenu-item'>
                  <a href='#' className='navigatiom__submenu-link'>Ссылка</a>
                </li>
                <li className='navigation__submenu-item'>
                  <a href='#' className='navigatiom__submenu-link'>Ссылка</a>
                </li>
              </ul>
            </nav>
          </li>
          <li className='navigation__menu-item'>
            <a className='navigation__menu-link' href='#'>Контакты</a>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Navigation;