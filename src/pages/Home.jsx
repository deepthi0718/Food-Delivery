import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { categories } from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'
import { DataContext } from '../context/userContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { ClearCart } from '../redux/cartSlice'

function Home() {
  let { cate, setCate, input, showCard, setShowCard } = useContext(DataContext)
  const dispatch = useDispatch();

  const [showPayment, setShowPayment] = useState(false); // 🔹 Payment modal state
  const [paymentMethod, setPaymentMethod] = useState(""); // 🔹 Selected payment

  function filter(category) {
    if (category.toLowerCase() === "all") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category.toLowerCase() === category.toLowerCase()
      );
      setCate(newList);
    }
  }

  let items = useSelector(state => state.cart)
  let subtotal = items.reduce((total, item) => total + item.qty * item.price, 0)
  let deliveryFee = 20;
  let taxes = subtotal * 0.5 / 100;
  let total = Math.floor(subtotal + deliveryFee + taxes)

  const handlePayment = () => {
    if (!paymentMethod) {
      toast.error("Please select a payment method!");
      return;
    }
    toast.success(`Order Placed via ${paymentMethod}`);
    dispatch(ClearCart());
    setShowPayment(false);
    setShowCard(false);
  };

  return (
    <div className='bg-green-800 w-full min-h-screen'>
      <Navbar />

      {/* 🔹 Categories */}
      {!input ?
        <div className="flex flex-wrap justify-center items-center gap-5 w-full">
          {categories.map((item) => (
            <div key={item.name} className="w-[120px] h-[120px] bg-white flex justify-center items-center flex-col rounded-md shadow-md gap-2 p-5 mt-4 hover:cursor-pointer hover:bg-green-100 transition-all duration-300"
              onClick={() => filter(item.name)}>
              <div>{item.icon}</div>
              <div className="font-bold text-neutral-600">{item.name}</div>
            </div>
          ))}
        </div> : null}

      {/* 🔹 Food Cards */}
      <div className="w-full flex flex-wrap gap-5 px-5 justify-center pt-8 pb-8 cursor-pointer">
        {cate.length > 1 ?
          cate.map((item) => (
            <Card
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              id={item.id}
              type={item.food_type}
            />
          )) :
          <div className='text-2xl text-center font-semibold'>No dish Found</div>}
      </div>

      {/* 🔹 Cart Drawer */}
      <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex items-center flex-col overflow-auto ${showCard ? "translate-x-0" : "translate-x-full"}`}>
        <header className='w-[100%] flex justify-between items-center'>
          <span className='text-green-600 text-[18px] font-semibold'>Order items</span>
          <RxCross2 className='text-green-600 font-bold w-[20px] h-[20px] cursor-pointer hover:text-gray-600'
            onClick={() => setShowCard(false)} />
        </header>

        {items.length > 0 ? <>
          <div className='w-full flex flex-col gap-8 mt-9'>
            {items.map((item) => (
              <Card2
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                qty={item.qty}
              />
            ))}
          </div>

          {/* Totals */}
          <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex gap-2 p-8 flex-col'>
            <div className="w-full flex justify-between items-center">
              <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
              <span className='text-green-600 font-semibold text-lg'>Rs {subtotal}/-</span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
              <span className='text-green-600 font-semibold text-lg'>Rs {deliveryFee}/-</span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
              <span className='text-green-600 font-semibold text-lg'>Rs {taxes}/-</span>
            </div>
          </div>

          <div className="w-[80%] flex justify-between items-center p-9">
            <span className='text-lg text-gray-600 font-semibold'>Total</span>
            <span className='text-green-600 font-semibold text-lg'>Rs {total}/-</span>
          </div>

          {/* 🔹 Show Payment Modal */}
          <button
            className='w-[80%] p-3 bg-green-500 text-lg text-white font-md rounded-md hover:bg-green-400 cursor-pointer transition-all bg-gre'
            onClick={() => setShowPayment(true)}
          >
            Place Order
          </button>
        </> :
          <div className='text-center text-2xl text-green-600 font-semibold pt-5'>
            Empty Cart...
          </div>}
      </div>

      {/* 🔹 Payment Modal */}
      {showPayment && (
        <div className="fixed top-0 left-0 w-full h-full bg-green-800 bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[300px] flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-center">Select Payment Method</h2>
            <div className="flex flex-col gap-3">
              <label>
                <input type="radio" name="payment" value="UPI" onChange={(e) => setPaymentMethod(e.target.value)} /> UPI
              </label>
              <label>
                <input type="radio" name="payment" value="Credit Card" onChange={(e) => setPaymentMethod(e.target.value)} /> Credit Card
              </label>
              <label>
                <input type="radio" name="payment" value="Cash on Delivery" onChange={(e) => setPaymentMethod(e.target.value)} /> Cash on Delivery
              </label>
            </div>
            <div className="flex justify-between mt-4">
              <button className="px-4 py-2 bg-gray-300 rounded-lg" onClick={() => setShowPayment(false)}>Cancel</button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg" onClick={handlePayment}>Pay</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home;

