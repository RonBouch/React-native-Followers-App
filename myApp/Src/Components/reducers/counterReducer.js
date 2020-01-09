

const initialState={
  counter:0
}

const counterReducer = (state=initialState,action)=>{
  console.log("action type ", action,state.counter)
  switch(action.type){
      case 'PLUS':
      return {counter:state.counter+1}

  }
return state;
}
export default counterReducer;