import axios from 'axios';

export const axiosWithAuth = () =>{
    const token= localStorage.getItem('token')
    return axios.create({
        headers: {
            Authorization: token
        },
        baseUrl: "https://backend-for-wunderlist2.herokuapp.com/"
    })
}