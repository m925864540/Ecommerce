import axios from "axios";

const url = "http://localhost:8080/api/";
// console.log("local second: ",  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser);
// console.log("local: ", localStorage.getItem("persist:root"));

const getToken = () =>{

    if(localStorage.getItem("persist:root")===null){
        return "";
    }else if( JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser === null){
        return ""
    }else{
        return JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser.accessToken
    }

}
const token = getToken();
// (localStorage.getItem("persist:root") ||
// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser)
//   ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//       .currentUser.accessToken
//   : ""

// console.log("Request method: ", token);
// console.log("Request method: ", JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user))
export const adminRequest = axios.create({
  baseURL: url,
  headers: { token: `Bearer ${token}` },
});
