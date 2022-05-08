import { AnyAction } from "redux";


export const postsReducer = (state:any  ,action:AnyAction)=>{
    console.log(state)
    switch (action.type){
        case 'POST_LIST':{
            return {...state,list:action.payload}
        }
        case 'POST_DETAILS':{
            return {...state,details:action.payload}
        }
        case 'EDIT_POST':{
            return {...state,message:action.payload}
        }
        case 'CLEAR_DETAILS':{
            return {...state,message:'',details:{}}
        }
        default: {
            return state||{list:[]};
        }
    } 
   
}

