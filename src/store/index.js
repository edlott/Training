import { createStore, compose } from "redux";
import {fromJS} from "immutable";

import {ADD_ORDER, REMOVE_ORDER, CHANGE_ORDER} from "./action-type";

const initialState = fromJS({
    orders: {}
});

const rootReducer = (state, action) => {
    const orders = state.get('orders');
    switch(action.type) {
        case ADD_ORDER:
            return state.set('orders', orders.set(action.order.id, fromJS(action.order)));
        case REMOVE_ORDER:
            return state.set('orders', orders.delete(action.id));
        case CHANGE_ORDER:
            if (orders.has(action.order.id))
                return state.set('orders', orders.set(action.order.id, fromJS(action.order)));
            else
                return state;
        default:
            return state;
    }
}

const enhancers = compose(
  window.devToolsExtension && process.env.NODE_ENV !== "production" ? window.devToolsExtension() : f => f
);
const store = createStore(rootReducer, initialState, enhancers);
export default store;

