import axios from "axios";

class ProxyService {
    async getProxy(url, params) {

        try {
            return axios.get(url,params).catch(reason => reason)
        } catch (e) {
            return  {data: null, status: null}
        }
    }
    async postProxy(url, body) {

        try {
            return axios.post(url,body).catch(reason => reason)
        } catch (e) {
            return  {data: null, status: null}
        }
    }
}

export default new ProxyService()