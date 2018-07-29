import React from 'react';
import PropTypes from 'prop-types';
import {removeOrder} from '../store/actions';
import {connect} from "react-redux";

const Order = (props) => {
    const {deleteOrder, order} = props;
    const {id, name} = order.toJS();
    return (<tr>
        <td>{id}</td>
        <td>{name}</td>
        <td><button onClick={() => (deleteOrder(id))}>Delete</button></td>
        </tr>);
}

Order.propTypes = {
  idx: PropTypes.number.isRequired
}

const mapStateToProps = (state, props) => {
    const {idx} = props;
    return { order: state.get('orders').toList().get(idx) };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteOrder: (id) => dispatch(removeOrder(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);


