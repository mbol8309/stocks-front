import { gql, useMutation, useQuery } from '@apollo/client';
import { apollo_nauth_client } from '../../app/apollo';
import { useNavigate, Navigate } from 'react-router-dom';



//------------Me
const USER_ME = gql`
query{ me {
  id name email
}}
`;

const useUserMe = (onError, onCompleted) => {
  const navigate = useNavigate();
  return useQuery(USER_ME, {
    onCompleted: onCompleted ? onCompleted : undefined,
    onError: onError ? onError : () => { navigate('/login') }
  });
}



//---------------Login
const USER_LOGIN = gql`
mutation login($username:String!,$password:String!)
{ login (username: $username,password: $password){
  id, name, email, token
}}`;

const useLogin = (redirect, onError = null) => {

  const navigate = useNavigate()

  return useMutation(USER_LOGIN, {
    update(cache,{data: { login }}){
      cache.writeQuery({query: USER_ME,data: {me:login}});
    },
    client: apollo_nauth_client,
    onCompleted: ({ login }) => {
      localStorage.setItem('token', login.token);
      navigate(redirect);
    },
    onError: onError ? onError : (error) => console.error(error)
  })
};

//-----------------------Register
const USER_REGISTER = gql`
mutation registerUser($name:String!, $email:String!,$password:String!,$password_confirmation:String!){
  registerUser(name:$name, email: $email, password: $password, password_confirmation:$password_confirmation){
    id name email token
  }
}
`;

const useRegisterUser = (onError) => {
  const navigate = useNavigate()
  return useMutation(USER_REGISTER, {
    client: apollo_nauth_client,
    update(cache,{data: { registerUser }}){
      cache.writeQuery({query: USER_ME,data: {me:registerUser}});
    },
    onCompleted: ({ registerUser }) => {
      localStorage.setItem('token', registerUser.token);
      navigate('/');
    },
    onError: onError ? onError : (error) => console.error(error)
  })
}





export { USER_ME, USER_LOGIN, useLogin, useUserMe, useRegisterUser }
