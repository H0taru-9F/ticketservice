import axios from 'axios';
import {LOCALSTORE_USER} from "../../data/constants";

const SingUpUser = async (
    name,
    surname,
    email,
    password,
    confirmPass
) => {
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPass);

    if (password === confirmPass){
        try {
            const resp = await axios.post('http://localhost:8081/api/v1/auth/signup',{
                name: name,
                surname: surname,
                email: email,
                password: password
            })
            const token = resp.data.accessToken
            const user = {
                email: email,
                password: password,
                token: token
            }
            window.localStorage.setItem(LOCALSTORE_USER, JSON.stringify(user))
            window.location.href = '/account';
        }catch (err){
            console.log(err.message)
        }
    }else {
        alert('Паролі не збігаються')
    }

}
export default SingUpUser;