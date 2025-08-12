import React from 'react'
import image1 from "../assets/image1.avif"
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { RemoveItem, IcrementQty, DecrementQty } from '../redux/cartSlice';

function Card2({name,id,price,image,qty}) {
  let dispatch = useDispatch()
  return (
    <div className='w-full h-[120px] p-2 shadow-lg rounded-2xl flex justify-between'>
        <div className="w-[70%] h-[100%] flex gap-5">
            <div className="w-[50%] h-full overflow-hidden rounded-md">
               <img src={image} alt="" className='object-cover'/>
            </div>
            <div className="w-[40%] h-full flex flex-col gap-2">
                <div className="text-lg text-black font-semibold "
                >{name}</div>
                <div className="w-[110px] h-[50px] bg-slate-400 flex items-center rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-600 text-xl ">
                    <button className='w-[30%] h-full bg-white text-green-600 hover:bg-gray-100 cursor-pointer' onClick={() => {
                      qty>1?dispatch(DecrementQty(id)):1
                    }}>-</button>
                    <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-600'>{qty || 1}</span>
                    <button className='w-[30%] h-full bg-white text-green-600 hover:bg-gray-100 cursor-pointer ' onClick={() =>{
                      dispatch(IcrementQty(id))
                    }
                    }>+</button>
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-start items-end gap-6">
          <span className='text-xl text-green-600 font-semibold'>Rs {price}/-</span>
          <RiDeleteBin5Line className='w-[30px] h-[30px] text-red-400 cursor-pointer'onClick={()=>dispatch(RemoveItem(id))}/>
        </div>
    </div>
  )
}

export default Card2