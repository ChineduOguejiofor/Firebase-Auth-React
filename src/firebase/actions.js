import axios from 'axios';

export const createUserProfile = async user => {
  const fbfunction =
    'https://us-central1-cleanit-7147d.cloudfunctions.net/app/api/v1/auth/';
  const userInfo = { userAuth: user, userType: 'user' };
  const config = { headers: { 'Content-Type': 'application/json' } };
  const body = JSON.stringify(userInfo);
  const res = await axios.post(fbfunction, body, config);

  // console.log(res.data.data.info);
  return res.data.data.info;
};
