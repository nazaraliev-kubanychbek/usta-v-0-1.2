import { createAction, createReducer } from "@reduxjs/toolkit";



const SET_LANG = 'SET_LANG';
const SET_SELECTED_CATEGORY = 'SET_SELECTED_CAREGOY';


export const setLang = createAction(SET_LANG);
export const setSelectedCategory = createAction(SET_SELECTED_CATEGORY);

const initialState = {
    lang: 'ru',
    selectedCategory: 'all',
}


export default createReducer(initialState, (builder)=>{
    builder
        .addCase(SET_LANG, (state, action) => {
        state.lang = action.payload
    })
    .addCase(SET_SELECTED_CATEGORY, (state, action) =>{
        state.selectedCategory = action.payload
    })
})
