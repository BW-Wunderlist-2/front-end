import axios from 'axios';

export const axiosWithAuth = () =>{
    const token= localStorage.getItem('token');
    return axios.create({
        baseUrl: "https://backend-for-wunderlist2.herokuapp.com",
        headers: {
            Authorization: token
        }
    })
}