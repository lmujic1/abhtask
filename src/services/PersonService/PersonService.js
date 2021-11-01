import axios from 'axios'

const DICTIONARY_API_BASE_URL = "http://localhost:8080/api/v1/phone-numbers/autocomplete";
const DICTIONARY_API_BASE_URL_2 = "http://localhost:8080/api/v2/phone-numbers/autocomplete";
class PersonService {
    getDictionary = async (query,page) => {
        if(query?.length>0){
            const firstCallNumOfResults = await axios.get(`${DICTIONARY_API_BASE_URL_2}?query=${query}`);
            const result = await axios.get(`${DICTIONARY_API_BASE_URL}?query=${query}&page=${page}&perPage=${'10'}`);
            return {
               content:result,
               numFound:firstCallNumOfResults
            }
        } 
        const firstCallNumOfResults = await axios.get(`${DICTIONARY_API_BASE_URL_2}`);
        const result = await axios.get(`${DICTIONARY_API_BASE_URL}?page=${page}&perPage=${'10'}`);
        return {
            content:result,
            numFound:firstCallNumOfResults
        }
    }
    getDictionaryOnPage = async (query,page) => {
        if(query?.length>0){
            const result = await axios.get(`${DICTIONARY_API_BASE_URL}?query=${query}&page=${page}&perPage=${'10'}`);
            return {
               content:result,
            }
        } 
        const result = await axios.get(`${DICTIONARY_API_BASE_URL}&page=${page}&perPage=${'10'}`);
        return {
            content:result,
        }
    }
}

export default new PersonService();