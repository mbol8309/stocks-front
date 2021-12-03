import { gql, useMutation, useQuery } from '@apollo/client';
import { apollo_nauth_client } from '../../app/apollo';
import { useNavigate } from 'react-router-dom';

//------------Me
const USER_ME = gql`
query{ me {
  id name email
}}
`;

const useUserMe = () => {
  return useQuery(USER_ME);
}



//---------------Login
const USER_LOGIN = gql`
mutation login($username:String!,$password:String!)
{ login (username: $username,password: $password){
  id, name, email, token
}}`;

//const [setLogin, { error : loginErrors, data, loading : loginLoading, reset: loginReset}] = useMutation(USER_LOGIN,{
const useLogin = (redirect, onError=null) => {
  
  const navigate = useNavigate()
  
  return useMutation(USER_LOGIN,{

  client:apollo_nauth_client,
  onCompleted:({login})=>{
      localStorage.setItem('token',login.token);
      navigate(redirect);
  },
  onError: onError ? onError : (error)=>console.error(error)
})
};

export { USER_ME, USER_LOGIN, useLogin,useUserMe }
