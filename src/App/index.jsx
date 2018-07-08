import React from 'react';
import { hot } from 'react-hot-loader'
import {addOrder} from '../store/actions';
import {connect} from "react-redux";

const title = 'Application as a module';

const App = (props) => {
    const {orders, addOrder} = props;
    if (orders.size < 20) {
        setTimeout(() => {
            addOrder({id: orders.size + 1, name: `Order ${orders.size + 1}`})
        }, 200);
    } else {
        console.log(JSON.stringify(orders.toJSON(), null, 2));
    }
    return (<div>{`${title} count: ${orders.size}`}</div>);
}

const mapStateToProps = (state) => {
    return { orders: state.get('orders') };
};

const mapDispatchToProps = dispatch => {
    return {
        addOrder: (porder) => dispatch(addOrder(porder))
  };
};

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));