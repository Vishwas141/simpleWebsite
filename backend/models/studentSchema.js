const mongoose=require("mongoose");

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    prn:{
        type:String,
        required:true,
        unmodifiable: true
    },
    email:
    {
        type:String
    }
});

module.exports=mongoose.model("Student",studentSchema);