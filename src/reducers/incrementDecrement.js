const initialState = 0

const changeTheNumber = (state = initialState,action)=>{
    if(action.type==='INCREMENT'){
        return state + action.payload
    }else if(action.type==='DECREMENT'){
        return state - action.payload
    }else{
        return state
    }
}

export default changeTheNumber