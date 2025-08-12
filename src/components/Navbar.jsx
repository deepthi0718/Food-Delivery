import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { DataContext } from '../context/userContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';
function Navbar() {
  let{input, setInput,cate,setCate,showCard,setShowCard} = useContext(DataContext)
  useEffect(()=>{
   let newlist =food_items.filter((item)=>item.food_name.includes(input)||item.food_name.toLowerCase().includes(input))
   setCate(newlist);
  },[input])
  let items = useSelector(state => state.cart)
  console.log(items);

  return (
   <>
   <div className="w-full h-[100px] flex items-center justify-between hover:cursor-pointer px-5 md:px-8">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl hover:bg-green-100 transition-all duration-300">
         <MdFastfood className='w-[30px] h-[30px] text-green-600'/>
      </div>
      <form action="" className='w-[45%] h-[60px] bg-white flex items-center p-5 gap-2 shadow-md rounded-md md:w-[70%]'
        onSubmit={(e) => e.preventDefault()}>
        <FaSearch className='text-xl text-green-600'/>
        <input type="text" placeholder='Search here' className='w-full outline-none text-[16px] md:text[20px]
        ' onChange={(e)=> setInput(e.target.value)} value={input}/>
      </form>
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer hover:bg-green-100 transition-all duration-300 "
      onClick={() => setShowCard(true)
       }>
        <span className='absolute top-0 right-2 text-green-600 font-bold text-xl'>{items.length}</span>
        <FiShoppingBag className='w-[30px] h-[30px] text-green-600'/>
      </div>
   </div>

   </>
  )
}

export default Navbar