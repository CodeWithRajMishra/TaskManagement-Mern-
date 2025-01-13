const AdminModel= require("../models/adminModel");


const adminLogin=async(req, res)=>{
   const {userid, password}= req.body;
   try {
      const Admin= await AdminModel.findOne({userid:userid});  
      if (!Admin)
      {
         res.status(400).send({msg:"Invalid user id!"});
      }

      if (Admin.password!=password)
      {
        res.status(400).send({msg:"Invalid password!"});
      }
      
      res.status(200).send(Admin);
   } catch (error) {
      console.log(error);
   }
}


module.exports ={
    adminLogin
}