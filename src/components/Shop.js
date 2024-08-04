import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreaters } from '../state/index';
import { bindActionCreators } from 'redux';

const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.amount);
  const actions = bindActionCreators(actionCreaters, dispatch);

  return (
    <div>
      <h2>Deposit / Withdraw</h2>
      {/* <button className="btn btn-primary mx-2" onClick={() => dispatch(actionCreaters.withdrawMoney(100))}>-</button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={() => dispatch(actionCreaters.depositMoney(100))}>+</button> */}
      <button className="btn btn-primary mx-2" onClick={() => actions.withdrawMoney(100)}>-</button>
      Update Balance ({balance})
      <button className="btn btn-primary mx-2" onClick={() => actions.depositMoney(100)}>+</button>
    </div>
  )
}

export default Shop
