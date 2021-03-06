import React from 'react';
import './cartIcon.styles.scss';
import { connect } from 'react-redux';
import toggleCartHidden from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
// import CartItem from '../cartItem/CartItem.component';

const CartIcon = props => {
  return (
    <div className='cart-icon' onClick={props.toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'></ShoppingIcon>
      <span className='item-count'>{props.itemCount}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
