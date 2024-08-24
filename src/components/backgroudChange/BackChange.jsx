import React, { useState } from 'react'



const BackChange = () => {

    const [BgColor, setBgColor] = useState("black");

    const handleBgChange =(color)=>{
        setBgColor(color);
  
    };

  return (
    <div style={{backgroundColor: BgColor, height:"100Vh"}}>
        <div className="container d-flex">
            <div className="col-md-3"></div>
            <div className="col-md-6 text-center">
               <div className="all-btn  d-flex gap-2 justify-content-center pt-4">
               <button onClick={()=>handleBgChange("blue")} type='button' className='btn btn btn-primary'>blue</button>
                <button onClick={()=>handleBgChange("black")} type='button' className='btn btn-dark'> balck</button>
                <button onClick={()=>handleBgChange("orange")}  type='button' className='btn btn-warning'>orange</button>
                <button onClick={()=>handleBgChange("red")} type='button' className='btn btn-danger'>red</button>
                <button onClick={()=>handleBgChange("white")} type='button' className='btn btn-light'> white</button>
               </div>

            <h5 style={{backgroundColor:"white",}} className='p-2 mt-4 rounded'> You can change BackGroud Color by cking the button</h5>

            </div>
            <div  className="col-md-3"></div>

        </div>
    </div>
  )
}

export default BackChange