const initialState={
    fetched:false,
    post:null,
    error:null,
}
const addPostReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_ADD_POST':
        return {
            ...state,
            fetched:true,
            post:action.payload}
        break;
           case 'FETCH_GET_POSTS_REJECTED':
           return {...state,error:action.payload}
           break;
          
           default :
           return state;
    }
};
export default addPostReducer;