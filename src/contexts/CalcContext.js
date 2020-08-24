import React , {    createContext, useReducer } from 'react';
import {calcReducer} from './../reducers/calcReducer';

  const initialState={
    value:0,
    op:'',
    num1:0,
    num2:0
}

export const CalcContext = createContext();

const  CalcContextProvider = (props)=> {

        console.log('from CalcContextProvider');
        const [state , dispatch] = useReducer(calcReducer,initialState);
       
        return (
            <CalcContext.Provider value={ { ...state , dispatch } } >
                    {props.children}
            </CalcContext.Provider>
        );




}




export default CalcContextProvider;



