import {ADD_ORDER, REMOVE_ORDER, CHANGE_ORDER} from "./action-type";

export const addOrder = (porder) => ({type : ADD_ORDER, order : porder});

export const removeOrder = (pid) => ({type : REMOVE_ORDER, id : pid});

export const changeOrder = (porder) => ({type : CHANGE_ORDER, order : porder});