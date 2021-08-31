import axios from 'axios'

export default class CheckAuthentication {

    check(){
        let response = axios.get('/auth/auth')
        return response.then(res => {
            return res.data === 'Authorized'
        });
    }
}
