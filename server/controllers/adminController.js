const AdminModel= require("../models/adminModel");
const UserModel= require("../models/userModel");
const TaskModel= require("../models/taskModel");

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


const createUser=async(req, res)=>{
   const {username, designation, email, password} = req.body;
   try {
         const User= await UserModel.create({
            username:username,
            designation:designation,
            email:email,
            password:password
         });
         if (User)
         {
            res.status(200).send({msg:"new user created!"});
         }
         else 
         {
            res.status(500).send({msg:"error in server!"})
         }
      
   } catch (error) {
       console.log(error);
   }
}

const userDataShow=async(req, res)=>{
   const User= await UserModel.find();
   res.status(200).send(User);
}


const assignTask=async(req, res)=>{

   try {
      const {id, tasktitle, taskdetail}= req.body;
      const Task= await TaskModel.create({
         tasktitle:tasktitle,
         taskdetail:taskdetail, 
         userid:id
      })

      res.status(200).json({msg:"task succesfully assign!"})
      
   } catch (error) {
      console.log(error);
   }
 
}

module.exports ={
    adminLogin,
    createUser,
    userDataShow,
    assignTask
}