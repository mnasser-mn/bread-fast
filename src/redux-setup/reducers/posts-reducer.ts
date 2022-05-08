import { AnyAction } from "redux";
import { StateType } from "../types"

export const postsReducer = (state:StateType = {post:{list:[]}} ,action:AnyAction)=>{
    switch (action.type){
        case 'POST_LIST':{
            return {...state,list:action.payload}
        }
        case 'POST_DETAILS':{
            return {...state,details:action.payload}
        }
        default: {
            return state;
        }
    } 
   
}

