import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";


export const categories = [
    { id: 1, name: "all", icon: <TiThSmallOutline className="w-[50px] h-[50px] text-green-600" /> },
    { id: 2, name: "breakfast", icon: <MdOutlineFreeBreakfast className="w-[50px] h-[50px] text-green-600" /> },
    { id: 3, name: "soups", icon: <LuSoup className="w-[50px] h-[50px] text-green-600" /> },
    { id: 4, name: "pasta", icon: <CiBowlNoodles className="w-[50px] h-[50px] text-green-600" /> },
    { id: 5, name: "main_course", icon: <MdOutlineFoodBank className="w-[50px] h-[50px] text-green-600" /> },
    { id: 6, name: "pizza", icon: <GiFullPizza className="w-[50px] h-[50px] text-green-600" /> },
    { id: 7, name: "burger", icon: <FaHamburger className="w-[50px] h-[50px] text-green-600" /> }
];
