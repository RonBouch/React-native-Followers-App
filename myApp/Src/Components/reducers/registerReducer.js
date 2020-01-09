const initialState={
    fetched:false,
    user:null,
    error:null,
}
const LoginReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_REGISTER':
        return {
            ...state,
            fetched:true,
            user:action.payload}
        break;
           case 'FETCH_REGISTER_REJECTED':
           return {...state,error:action.payload}
           break;
          
           default :
           return state;
    }
};
export default LoginReducer;