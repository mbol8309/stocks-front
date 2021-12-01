import { useQuery, gql } from '@apollo/client';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useEffect } from 'react';

const USER_ME = gql`
query{ me {
  id name email
}}
`;


const USER_LOGIN = gql`
query login($username:String!,$password:String!)
{ login (username: $username,password: $password){
  id, name, email, token
}}`;

export { USER_ME, USER_LOGIN }
