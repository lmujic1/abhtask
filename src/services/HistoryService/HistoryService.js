import axios from 'axios'

const HISTORY_API_BASE_URL = "http://localhost:8080/phone-numbers/autocomplete/history";
const HISTORY_API_BASE = "http://localhost:8080/history";

class HistoryService {

    addHistoryItem = async (params) =>{
        return await axios.post(`${HISTORY_API_BASE}/add`, params)
    }

    getHistory = async (params)=>{
        let queryParams = ''
        Object.keys(params).forEach((key)=>{
            if(params?.[key]?.length>0) {
                if(queryParams?.length>0) {
                    queryParams=`${queryParams}&${key}=${params[key]}`
                } else {
                    queryParams=`?${key}=${params[key]}`
                }
            }
        })
        return await axios.get(`${HISTORY_API_BASE_URL}${queryParams}`)
    }

    /* updateHistoryItem  = async (params,) => {
        const result = await axios.get()
        return await axios.put(`${HISTORY_API_BASE}/update/${result.id}`,params)
    } */

    getHistoryName = async (name) => {
        if(name?.length>0){
            return await axios.get(`${HISTORY_API_BASE_URL}?name=${name}`);
        } 
        return await axios.get(`${HISTORY_API_BASE_URL}`);
    }

    getHistoryPhoneNumber = async (phoneNmber) =>{
        if(phoneNmber?.length>0){
            return await axios.get(`${HISTORY_API_BASE_URL}?phoneNmber=${phoneNmber}`);
        } 
        return await axios.get(`${HISTORY_API_BASE_URL}`);
    }

    getHistoryRequestQuery = async (requestQuery) =>{
        if(requestQuery?.length>0){
            return await axios.get(`${HISTORY_API_BASE_URL}?requestQuery=${requestQuery}`);
        } 
        return await axios.get(`${HISTORY_API_BASE_URL}`);
    }

    getHistorySorted = async (sort) =>{
        if(sort?.length>0){
            return await axios.get(`${HISTORY_API_BASE_URL}?sort=${sort}`);
        } 
        return await axios.get(`${HISTORY_API_BASE_URL}`);
    }
}

export default new HistoryService();