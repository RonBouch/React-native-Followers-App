const initialState={
    fetched:false,
    followers:null,
    error:null,
}
const getFollowersByIDReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_GET_FOLLOWERS_BY_ID':
        return {
            ...state,
            fetched:true,
            followers:action.payload}
        break;
           case 'FETCH_GET_FOLLOWERS_BY_ID_REJECTED':
           return {...state,error:action.payload}
           break;
          
           default :
           return state;
    }
};
export default getFollowersByIDReducer;