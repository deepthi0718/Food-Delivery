
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

function Card({name,image,id,price,type}) {
  let dispatch = useDispatch()
  return (
   <>
    <div className="w-[300px] h-[400px] bg-white rounded-lg p-3 flex flex-col gap-3 shadow-lg hover:border-5 border-green-400">
            <div className="w-[100%] h-[60%] overflow-hidden ">
                <img src={image} alt="" className='object-cover rounded-l-lg'/>
            </div>
            <div className="text-2xl font-semibold">{name}</div>
            
            <div className=" w-full flex justify-between items-center">
                <div className="text-lg font-bold text-green-600">{price}</div>

                <div className="flex gap-2 items-center">{type === "veg" ?<LuLeafyGreen className='text-green-600 '/>:<GiChickenOven className='text-green-600'/>}  <span className='text-green-600 font-semibold text-lg'>{type}</span></div>
            </div>
            <div className="">
            <button className='w-full p-3 bg-green-500 text-lg text-white font-md rounded-md hover:bg-green-400 cursor-pointer transition-all' onClick={()=>
            {dispatch(AddItem({id:id,name:name,price:price,image:image,qty:1}))
            toast.success("item added")}
            }>Add to dish</button>
            </div>
        </div>
   </>
  )
}

export default Card