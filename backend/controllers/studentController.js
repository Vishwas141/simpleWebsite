const Student=require("../models/studentSchema");
const mongoose=require("mongoose");

exports.createStudent=async(req,res)=>
{
    try
    {
            const {name,prn,email}=req.body;

            const exist=await Student.findOne({prn:prn});

            if(exist)
            {
                 return res.status(200).json({
                    success:false,
                    exist
                 })
            }

            const student=await Student.create({name:name,prn:prn,email:email,});

            return res.status(200).json({
                success:true,
                student
             })




    }catch(err)
    {
        return res.status(404).json({
            success:false,
            error:err
         })
    }
}
exports.showAllStudents=async(req,res)=>
{
    try
    {
         const response=await Student.find({},{new:true});

         return res.status(200).json(response);
    }catch(err)
    {
        return res.status(404).json({
            success:false,
            error:err
          })
    }
}


exports.show = async (req, res) => {
    try {
      const id = req.params.id; // Access the ID from the URL using req.params
      console.log(id);
  
      // Example: Finding a student by ID using Mongoose
      const student = await Student.findById(id);
  
      if (!student) {
        return res.status(404).json({
          success: false,
          error: "Student not found",
        });
      }
  
      return res.json({
        success: true,
        data: student,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  };
  