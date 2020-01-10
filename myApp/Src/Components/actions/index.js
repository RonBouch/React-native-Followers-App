
export const FETCH_LOGIN='FETCH_LOGIN'
export const FETCH_REGISTER='FETCH_REGISTER'
export const FETCH_GET_POSTS='FETCH_GET_POSTS'
export const FETCH_DELETE_POSTS='FETCH_DELETE_POSTS'
export const FETCH_ADD_POST='FETCH_ADD_POST'
export const FETCH_ADD_FOLLOWER='FETCH_ADD_FOLLOWER'
export const FETCH_GET_FOLLOWERS_BY_ID='FETCH_GET_FOLLOWERS_BY_ID'
export const FETCH_MY_FOLLOWERS='FETCH_MY_FOLLOWERS'

export function login(data){
    return(dispatch)=>{
         if(data.res==undefined){
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
}else{
    dispatch({type:"FETCH_LOGIN",payload:data})

}
    }}

    export function register(data){
        return(dispatch)=>{
            
              fetch('https://moonsite-rn-follow-test.herokuapp.com/api/usr/register/', {
                method: 'POST',
                headers: {
                Accept: 'application/json',
               'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                 })
              
              .then(res=>res.json())
           .then(user=>{
                dispatch({type:"FETCH_REGISTER",payload:user}) 
                if (user.res == true) {
                    dispatch(login(data))
                  } 
    
        })
        .catch((err)=>{
            dispatch({type:"FETCH_REGISTER_REJECTED",payload:err})
        })
        }}

 export function  getPosts  (token)  {
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
                     if (posts.res == true) {
                        dispatch(getFollowersByUserID(token))
                      } 
                  })
                 .catch(error => {
                    dispatch({type:"FETCH_GET_POSTS_REJECTED",payload:error})
                });
 }
}
export function deletePost(post_id,token){
    return(dispatch)=>{
    fetch('https://moonsite-rn-follow-test.herokuapp.com/api/post/delete-post-by-id/'+post_id+"/", {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
       'Content-Type': 'application/json',
       'Authorization': token

        },
    }).then((response) => response.json())
    .then(remove=>{
        dispatch({type:'FETCH_DELETE_POSTS',payload:remove})
        if(remove.data==1){
            //reload posts
            dispatch(getPosts(token))
        }
    }).catch(err => {
      console.error(err)
    });
}
}
export function   addPost(token,data){
    return(dispatch)=>{
    fetch('https://moonsite-rn-follow-test.herokuapp.com/api/post/add-post', {
     method: 'POST',
     headers: {
     Accept: 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token

     },
     body: JSON.stringify(data),
      })
      .then(res => {
        return res.json();
      })
      .then(
        post => {
          if (post.res == true) {
            dispatch({type:'FETCH_ADD_POST',payload:post})
          } 
        })
        .catch(err => {
            console.error(err)
          });
    }
};
export const addFollower=(token,user_id)=>{
    const data={
        f_user_id:user_id
    }
        return(dispatch)=>{
              fetch('https://moonsite-rn-follow-test.herokuapp.com/api/follower/add-follower/', {
                method: 'POST',
                headers: {
                Accept: 'application/json',
               'Content-Type': 'application/json',
               'Authorization': token
                },
                body: JSON.stringify(data),
                 })
              
              .then(res=>res.json())
           .then(follower=>{
    
            dispatch({type:"FETCH_ADD_FOLLOWER",payload:follower})
            if (follower.res == true) {
                dispatch(getFollowersByUserID(token))
              } 
        })
        .catch((err)=>{
            dispatch({type:"FETCH_LOGIN_REJECTED",payload:err})
        })
        }}
        
        export function  getFollowersByUserID  (token)  {
            return(dispatch)=>{
                fetch('https://moonsite-rn-follow-test.herokuapp.com/api/follower/get-followers-by-user-id', {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    'Authorization': token
                     },
                     })
                     .then((response) => response.json())
                     .then(followers => {
                             dispatch({type:"FETCH_GET_FOLLOWERS_BY_ID",payload:followers})
                             if (followers.res == true) {
                                dispatch(getMyFollowers(token))
                              } 
                          })
                         .catch(error => {
                            dispatch({type:"FETCH_GET_FOLLOWERS_BY_ID_REJECTED",payload:error})
                        });
         }
        }

        export function  getMyFollowers  (token)  {
            return(dispatch)=>{
                fetch('https://moonsite-rn-follow-test.herokuapp.com/api/follower/get-my-followers', {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    'Authorization': token
                     },
                     })
                     .then((response) => response.json())
                     .then(followers => {
                             dispatch({type:"FETCH_MY_FOLLOWERS",payload:followers})
                          })
                         .catch(error => {
                            dispatch({type:"FETCH_MY_FOLLOWERS_REJECTED",payload:error})
                        });
         }
        }
