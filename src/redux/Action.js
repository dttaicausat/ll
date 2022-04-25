import {ADD,MINUS,REMOVE} from "./ActionName";

export const add= (item) => {
  return {
    type: ADD,
    payload :{
        id:item.id
    }
  }
};
export const minus=(item)=>{
  return {
    type : MINUS,
    payload :{
      id:item.id
    }
  }
}
export const remove=(item)=>{
  return { 
    type:REMOVE,
    payload :{
      id:item.id
    }
  }
}
