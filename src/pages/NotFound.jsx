import { useNavigate } from 'react-router-dom'
import Not from "../assets/404.jpg"


const NotFound = () => {
const navigate =useNavigate()


  return (
    <div className="flex justify-center items-center ">
   
<img src={Not} alt=""  className='not' />
        <button onClick={()=>navigate("/")} className="btn btn-outline text-primary  bg-slate-800 cursor-pointer hover:text-primaryDark hover:scale-105 duration-300 hover:bg-red-900"   >Nothing here ! Go  Home</button>
    
    </div>
  );
}

export default NotFound