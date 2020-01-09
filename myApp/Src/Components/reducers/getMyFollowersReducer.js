const initialState={
    fetched:false,
    followers:null,
    error:null,
}
const getMyFollowersReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_MY_FOLLOWERS':
        return {
            ...state,
            fetched:true,
            followers:action.payload}
        break;
           case 'FETCH_MY_FOLLOWERS_REJECTED':
           return {...state,error:action.payload}
           break;
          
           default :
           return state;
    }
};
export default getMyFollowersReducer;