const initialState={
    fetched:false,
    follower:null,
    error:null,
}
const addPostReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_ADD_FOLLOWER':
        return {
            ...state,
            fetched:true,
            follower:action.payload}
        break;
           case 'FETCH_ADD_FOLLOWER_REJECTED':
           return {...state,error:action.payload}
           break;
          
           default :
           return state;
    }
};
export default addPostReducer;