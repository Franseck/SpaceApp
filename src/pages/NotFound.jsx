import { useNavigate } from 'react-router-dom'


const NotFound = () => {
const navigate =useNavigate()


  return (
    <div className="not flex justify-center items-center ">
   

        <button onClick={()=>navigate("/")} className="btn btn-outline text-primary  bg-slate-800 cursor-pointer hover:text-primaryDark hover:scale-105 duration-300 hover:bg-red-900"   >Nothing here ! Go  Home</button>
    
    </div>
  );
}

export default NotFound