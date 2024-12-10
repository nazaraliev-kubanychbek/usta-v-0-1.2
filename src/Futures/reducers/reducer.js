import { createAction, createReducer } from "@reduxjs/toolkit";
import { URL_API } from "../URLAPI";
import axios from "axios";


const SET_LANG = 'SET_LANG';
const SET_SELECTED_CATEGORY = 'SET_SELECTED_CAREGOY';
const GET_CONTACTS = 'GET_CONTACTS';


export const setLang = createAction(SET_LANG);
export const setSelectedCategory = createAction(SET_SELECTED_CATEGORY);
export const getContacts = () =>{
    let action = createAction(GET_CONTACTS)
    return (dispatch) =>{
        axios(`${URL_API}api/v1/contacts/contacts/`)
        .then(({data})=> dispatch(action(data[0])))
    }
}

const initialState = {
    lang: 'ru',
    selectedCategory: 'all',
    contacts: {},
}


export default createReducer(initialState, (builder)=>{
    builder
        .addCase(SET_LANG, (state, action) => {
        state.lang = action.payload
    })
    .addCase(SET_SELECTED_CATEGORY, (state, action) =>{
        state.selectedCategory = action.payload
    })
    .addCase(GET_CONTACTS, (state, action) =>{
        state.contacts = action.payload
    })
})
