import React from 'react';
import { hot } from 'react-hot-loader'
import {addOrder} from '../store/actions';
import {connect} from 'react-redux';
import Order from '../Order';

const title = 'Application as a module';

let orderId = 0;

const App = (props) => {
    const {orders, addOrder} = props;
    
    return (<div>{`${title} count: ${orders.size}`}
        <br/>
        <button onClick={
            () => {
                orderId += 1;
                addOrder({id: orderId, name: `Total at creation ${orders.size + 1}`});
            }
        }>Add Order</button>
        <table>
        <thead><tr><th>id</th><th>Description</th></tr></thead>
        <tbody>
        {orders.toList().map((order, idx) => {
            return (<Order key={order.get('id')} idx={idx}/>)
        }).toArray()}
        </tbody>
        </table>
        </div>);
}

const mapStateToProps = (state) => {
    return { orders: state.get('orders') };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addOrder: (porder) => dispatch(addOrder(porder))
  };
};

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));