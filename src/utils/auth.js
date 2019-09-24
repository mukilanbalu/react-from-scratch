function isAuthenticated() {
   let auth = localStorage.getItem("auth")
      if(auth){
          return true
      }else{
          return false
      }
   
  }

export default isAuthenticated;