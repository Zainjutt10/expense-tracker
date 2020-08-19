import React ,{useContext} from 'react';
import {Translis} from "./Translis";
import {Gloablcontext} from "../context/Globalcontetx";

export const Transaction =() =>
{
    const {transaction}=useContext(Gloablcontext);
    // console.log(transaction[0].text);
    return <>
    <h3>History</h3>
      <ul id="list" class="list">
          {transaction.map(element => <Translis key={element.id} element={element} /> )}
         
      </ul>
    </>
}