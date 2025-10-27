import axios from "axios";

//creating a sleep function to add fake delay to our app
const sleep = (delay: number) => {
    return new Promise(resolve => {
        setTimeout(resolve, delay)
    })
}
const agent = axios.create({
    baseURL: import.meta.env.VITE_API_URL //from .env.development
})

agent.interceptors.response.use(async response => {
    try {
        await sleep(500);
        return response;
    } catch(error) {
        console.log(error);
        return Promise.reject(error);     
    }
})

export default agent;