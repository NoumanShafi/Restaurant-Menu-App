import React, { useState } from "react";
import Data from "./data"
import Menu from "./components/Menu/Menu";
import Button from "./components/Button/Button";
import "./app.css";
const CategoryList=['all',...new Set(Data.map((items) => items.category))] 
export default function App() {
    const [MenuData, setMenuData] = useState(Data)
    const [Categories, setCategroies] = useState(CategoryList)
   const FilterData = (category) => {
    if(category === 'all'){
        setMenuData(Data)
        return
    }
const NewData= Data.filter((items) => items.category === category)
setMenuData(NewData)
   }
    return (
        <div className="container">
            <h1 className="menu-heading">Our Menu</h1>
            <div className="menu-underline"></div>
            <Button FilterData={FilterData} Categories={Categories}/>
            <Menu MenuData={MenuData}/>
         
        </div>



    )

}