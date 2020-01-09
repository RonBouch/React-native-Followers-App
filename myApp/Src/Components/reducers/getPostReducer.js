const initialState={
    fetched:false,
    posts:null,
    error:null,
}
const getPostReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_GET_POSTS':
        return {
            ...state,
            fetched:true,
            posts:action.payload}
        break;
           case 'FETCH_GET_POSTS_REJECTED':
           return {...state,error:action.payload}
           break;
          
           default :
           return state;
    }
};
export default getPostReducer;