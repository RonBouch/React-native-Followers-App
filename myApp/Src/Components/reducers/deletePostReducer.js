const initialState={
    fetched:false,
    delete:null,
    error:null,
}
const deletePostReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_DELETE_POSTS':
        return {
            ...state,
            fetched:true,
            delete:action.payload}
        break;
           case 'FETCH_DELETE_POSTS_REJECTED':
           return {...state,error:action.payload}
           break;
          
           default :
           return state;
    }
};
export default deletePostReducer;