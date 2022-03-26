import "./ColorPicker.css";
import {colorsData} from "../../data";
export const ColorPicker=()=>{
    return(
        <div className="color-pallete-grid"> 
        {colorsData.map((color)=>(
        <div className="color-pallete"
                style={{
                    backgroundColor: color,
                  }}
                  >
                
                 </div>
             ))} 
           </div>
    )
}