import { useQuery, gql } from '@apollo/client';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useEffect } from 'react';

const USER_ME = gql`
query{ me {
  id name email
}}
`;

export { USER_ME }
