import React ,{useContext} from 'react';
import {Gloablcontext} from "../context/Globalcontetx";


export const Translis=({element})=>
{
    const{deletetrans}=useContext(Gloablcontext);
    console.log(element);
    const sign=element.amount<0 ? '-' : '+';
    return <li class={element.amount>0?"plus":"minus"}>
    {element.text} <span>{sign}${Math.abs(element.amount)}</span><button
    onClick={()=>deletetrans(element.id)}
    class="delete-btn">x</button>
  </li>
}