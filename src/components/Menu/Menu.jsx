import React from "react";
export default function Menu({MenuData}){
    return(
        <div className="menu-container">
        {
       
           MenuData.map((data) => {
                return (
                    <div className="menu-list">
                        <div className="menu-img">
                            <img src={data.img} alt="images" />
                        </div>
                        <div className="menu-details">
                            <div className="menu-info">
                                <h4>{data.title}</h4>
                                <h4 className="price">${data.price}</h4>
                            </div>
                            <p>{data.desc}</p>

                        </div>

                    </div>
                )

            }) 
}


    </div>
    )
}