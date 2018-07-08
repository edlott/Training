import { createStore } from "redux";
import {fromJS} from "immutable";

import {ADD_ORDER, REMOVE_ORDER, CHANGE_ORDER} from "./action-type";

const initialState = fromJS({
    orders: {}
});

const rootReducer = (state = initialState, action) => {
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
    }
}

const store = createStore(rootReducer);
export default store;

