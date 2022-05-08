import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import AppRouter from './app-router';
import { postsReducer } from './redux-setup/reducers/posts-reducer';
const store = configureStore({
    reducer:{
        post:postsReducer
    },
})
export const App = ()=>(
   
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

export default App;