export default (state,action)=>{
    switch(action.type){
        case 'Delete_transaction':
            return{
                ...state,
                transaction:state.transaction.filter(transaction => transaction.id !==action.payload)
    }
    case 'Add_transaction':
        return{
            ...state,
            transaction:[...state.transaction,action.payload]
        }
        default:
            return state;
    }
}