import React, { useContext, useEffect } from 'react';
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { DataContext } from '../context/userContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function Navbar() {
  const { input, setInput, setCate, setShowCard } = useContext(DataContext);

  useEffect(() => {
    const newList = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCate(newList);
  }, [input, setCate]);

  const items = useSelector((state) => state.cart);

  return (
    <div className="w-full h-[100px] flex items-center justify-between p-3 md:px-8 ">
      {/* Logo */}
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl hover:bg-green-100 transition-all">
        <MdFastfood className="w-[30px] h-[30px] text-green-600" />
      </div>

      {/* Search Bar */}
      <form
        className="w-[45%] h-[60px] bg-white flex items-center p-5 gap-2 shadow-md rounded-md md:w-[70%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <FaSearch className="text-xl text-green-600" />
        <input
          type="text"
          placeholder="Search here"
          className="w-full outline-none text-[16px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>

      {/* Cart */}
      <div
        className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer hover:bg-green-100 transition-all"
        onClick={() => setShowCard(true)}
      >
        <span className="absolute top-0 right-2 text-green-600 font-bold text-xl">
          {items.length}
        </span>
        <FiShoppingBag className="w-[30px] h-[30px] text-green-600" />
      </div>

      
    </div>
  );
}

export default Navbar;


