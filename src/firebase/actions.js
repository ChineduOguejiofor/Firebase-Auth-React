import {auth} from './firebase.utils';
import axios from 'axios';
const fbfunction =
  'https://us-central1-cleanit-7147d.cloudfunctions.net/app/api/v1/auth/';

export const createUserProfile = async user => {
  const userInfo = { userAuth: user, userType: 'user' };
  const config = { headers: { 'Content-Type': 'application/json' } };
  const body = JSON.stringify(userInfo);
  const res = await axios.post(fbfunction, body, config);

  // console.log(res.data.data.info);
  return res.data.data.info;
};


export const getArticles = async () => {
const token = await auth.currentUser.getIdToken();
// console.log(token);

return axios.get(fbfunction, {headers:  
  { authorization: `Bearer ${token}` }})
  .then(res => {console.log(res.data) });
}