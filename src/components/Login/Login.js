import Base64 from "@/utils/Base64";
import axios from 'axios'
export default class LoginScript {

    async tryLogin(formLogin, formSenha){
        const base64 = new Base64();
        const authEncoded = base64.encode(`${formLogin}:${formSenha}`);
        const response = await axios.post('/auth/login',{}, {
            headers : {
                'FirstAuth': 'Basic ' + authEncoded
            }
        });
        localStorage.setItem('token', response.data)
    }
}
