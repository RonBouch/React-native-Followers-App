
export const FETCH_LOGIN='FETCH_LOGIN'
export const FETCH_GET_POSTS='FETCH_GET_POSTS'

export const login=(data)=>{
    console.log("data action ",data)

    return(dispatch)=>{
        
          fetch('https://moonsite-rn-follow-test.herokuapp.com/api/usr/login/', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
           'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
             })
          
          .then(res=>res.json())
       .then(user=>{

        dispatch({type:"FETCH_LOGIN",payload:user})

    })
    .catch((err)=>{
        dispatch({type:"FETCH_LOGIN_REJECTED",payload:err})
    })
    }}

 export const  getPosts = (token) => {
     console.log("tok action ",token)
    return(dispatch)=>{
        fetch('https://moonsite-rn-follow-test.herokuapp.com/api/post/get-all-posts', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            'Authorization': token
             },
             })
             .then((response) => response.json())
             .then(posts => {
                     dispatch({type:"FETCH_GET_POSTS",payload:posts})
                  })
                 .catch(error => {
                    dispatch({type:"FETCH_GET_POSTS_REJECTED",payload:error})
                });
 }
}