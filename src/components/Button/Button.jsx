import React from "react";
export default function Button({FilterData , Categories}){
    return (
        <div className="btn-container">
            {
                Categories.map((Categoryitem , index) => {
                    return(
                        <button key={index} onClick={() => FilterData(Categoryitem)}>
                            {Categoryitem}
                        </button>
                    )
                })
            }
            
        </div>
    )
}