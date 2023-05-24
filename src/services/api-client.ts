import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '744d2dd5d0f3442b890e3c79b2e3fc27'
    }
})