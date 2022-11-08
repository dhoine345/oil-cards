import './Header.css';
import logo from '../../images/logo.jpg';
import { phoneNumber, buttonName } from '../../utils/constants'

function Header() {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt="Логотоип компании." />
      <div className='header__phone-container'>
        <div className='header__phone-icon' />
        <a className='header__phone-number' href="#">{phoneNumber}</ a>
      </div>
      <div className='header__links-container'>
        <a href='#' className='header__link link-hover'>{buttonName.writeUs}</a>
        <a type='button' className='header__link header__link_with-icon link-hover'>
          <div className='header__account-logo' />
          {buttonName.account}
        </a>
      </div>
    </header>
  )
}

export default Header;