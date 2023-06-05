import axios from 'axios';//third party library

// const API_URL = 'http://localhost:8000'
const API_URL='https://fsrender.onrender.com';

export const uploadFile = async (data) => {
    try {
        //with the help of routing we can handle endpoint:http://localhost:8000/upload
        let response = await axios.post(`${API_URL}/upload`, data);///upload is the endpoint
        //axios returns object to response
        //response object has header: property and requestHeaders: and data :  prop which is a object
        // console.log("lll",response)
        return response.data;//to calling
      

    } catch (error) {
        console.log("error while calling api", error.message)
 }
}