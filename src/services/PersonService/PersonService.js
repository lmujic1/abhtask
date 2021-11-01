import axios from 'axios'

const DICTIONARY_API_BASE_URL = "http://localhost:8080/api/v1/phone-numbers/autocomplete";

class PersonService {
    getDictionary = async (query) => {
        if(query?.length>0){
            return await axios.get(`${DICTIONARY_API_BASE_URL}?query=${query}`);
        } 
        return await axios.get(`${DICTIONARY_API_BASE_URL}`);
    }
}

export default new PersonService();