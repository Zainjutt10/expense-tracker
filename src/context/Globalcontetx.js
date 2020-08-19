import React, {createContext,useReducer} from 'react';
import AppReducer from "./AppReducer";
//intialstate

const initstate={
    transaction: []
}

export const Gloablcontext =createContext(initstate);
export const GlobalProvider =({children})=>
{
    const [state,dispatch]=useReducer(AppReducer,initstate);
    function deletetrans(id)
    {
        dispatch({
            payload:id,
            type:'Delete_transaction'
        })
    }
    function addtrans(transactions)
    {
        dispatch({
            payload:transactions,
            type:'Add_transaction'
        })
    }

    return(<Gloablcontext.Provider value={{transaction: state.transaction,deletetrans,addtrans}} >{children}</Gloablcontext.Provider>)
}