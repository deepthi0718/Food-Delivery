import React, { createContext, useState } from 'react'
import { food_items } from '../food';
export const DataContext = createContext()

function userContext({children}) {
    let [cate, setCate] =useState(food_items)
    let [input, setInput]=useState("");
    let [showCard, setShowCard] = useState(false)
let data ={
    input, setInput,cate,setCate,showCard,setShowCard
};
  return (
    <div>
        <DataContext.Provider value={data}>
        {children}
        </DataContext.Provider>
    </div>
  )
}

export default userContext