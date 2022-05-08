import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import AppRouter from './app-router';
import { postsReducer } from './redux-setup/reducers/posts-reducer';
import { StateType } from './redux-setup/types';
const initialState:StateType = {
    post:{list:[]
 }}
const store = configureStore({
    reducer:{
        post:postsReducer
    },
    preloadedState:initialState
})
export const App = ()=>(
   
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

export default App;