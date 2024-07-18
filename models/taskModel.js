import mongoose from "mongoose";

const taskSchema =mongoose.Schema({
  name:{
    type:String,
    required:[true,"please enter name"], //required yani name is zaruri, agar nai kia to error is string
    trim:true, //whitespace hata deta hai
    maxlength:[20,"name cannot be more than 20 char"], //max len of name is 20, warna error is string

  },
  completed:{  //completed by default false rahega
    type:Boolean,
    default:false,
  },

}
,{timestamps:true});

// mongoose documentation to see kya kya daal sakte hain

export const Task=mongoose.model('Task',taskSchema); //mongoose ke thru model aka table banaya jiska naam is Task 
