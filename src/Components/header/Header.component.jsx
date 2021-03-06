import React from 'react';
import './Header.styles.scss';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cartIcon/cartIcon.component';
import CartDropdown from '../cartDropdown/CartDropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = props => {
  const signOutHandler = () => {
    auth.signOut();
  };

  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo'></Logo>
      </Link>
      <div className='options'>
        <NavLink activeClassName='selected' to='/shop' className='option'>
          SHOP
        </NavLink>
        <NavLink activeClassName='selected' exact to='/' className='option'>
          HOME
        </NavLink>
        {!props.currentUser ? (
          <NavLink activeClassName='selected' to='/signin' className='option'>
            SIGN IN
          </NavLink>
        ) : (
          <div className='option' onClick={signOutHandler}>
            SIGN OUT
          </div>
        )}
        <CartIcon></CartIcon>
      </div>
      {!props.cartHidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  cartHidden: selectCartHidden(state),
});

export default connect(mapStateToProps)(Header);
