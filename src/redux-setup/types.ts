export type PostType = {
    userId:number;
    id:number;
    title:string;
    body:string
}

export type StateType = {
    post:{
        list?:PostType[];
        details?:PostType
    };
}|undefined