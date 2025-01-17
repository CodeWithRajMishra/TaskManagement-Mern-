import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminDashBoard from "./pages/AdminDashBoard";
import CreateUser from "./pages/CreateUser";
import AssignTask from "./pages/AssignTask";
import UserTaskAssign from "./pages/UserTaskAssign";
import UserDashBoard from "./pages/UserDashBoard";
import MyTask from "./pages/MyTask";

const App=()=>{
  return(
    <>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>} />
         <Route path="home" element={<Home/>}/>
         <Route path="/admindashboard" element={<AdminDashBoard/>}>
              <Route path="createuser" element={<CreateUser/>}/>
              <Route path="assigntask" element={<AssignTask/>}/>
              <Route path="usertaskassign/:id" element={<UserTaskAssign/>}/>
         </Route>

         <Route path="userdashboard" element={<UserDashBoard/>} >
             <Route path="mytask" element={<MyTask/>} />
         </Route>
        
         
        </Route>

       </Routes>
    
    </BrowserRouter>
     
    </>
  )
}

export default App;