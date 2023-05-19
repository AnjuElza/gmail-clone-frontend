import axios from 'axios';

 //const API_URI = 'http://localhost:8000'
const API_URI = 'https://gmailclone-backend-ay9j.onrender.com'

const API_GMAIL = async (serviceUrlObject, requestData = {}, type) => {
    const { params, urlParams,email, ...body } = requestData;
//    const email= localStorage.getItem("email");
  
    return await axios({
        method: serviceUrlObject.method,
        
        url: (`${API_URI}/${serviceUrlObject.endpoint}/${type}`),
        data: requestData,
        headers:{
                    "x-auth-token": localStorage.getItem("token") ,
                    "email": localStorage.getItem("email"),
                },
        
    })
}

export default API_GMAIL;