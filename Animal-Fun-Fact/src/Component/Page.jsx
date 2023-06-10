import React from 'react'
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";


function Page() {
  return (
    <div>
        <h1>Click on images to display content.</h1>

        <img src={img1} alt="squiral" />
        <img src={img3} alt="cheeta" />
        <img src={img2} alt="fox" />
    </div>
  )
}

export default Page