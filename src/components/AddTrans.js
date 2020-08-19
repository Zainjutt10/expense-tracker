import React ,{useState,useContext} from "react";
import {Gloablcontext} from "../context/Globalcontetx";


export const AddTrans=() =>
{
    const [text,settext]=useState();
    const [amount,setamount]=useState(0);
    const {addtrans}=useContext(Gloablcontext);
    const onsubmit =(e)=>
    {
        e.preventDefault();
        const newtrans={
            id:Math.floor(Math.random()*100000000),
            text,
            amount:+amount
        }
        if (text=='')
        {
          return;
        }
        addtrans(newtrans);
    }
    return(<>
        <h3>Add new transaction</h3>
      <form onSubmit={onsubmit}>
        <div className="form-control">
          <label for="text">Text</label>
          <input type="text" value={text} onChange={(e)=>settext(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e)=>setamount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>)
}