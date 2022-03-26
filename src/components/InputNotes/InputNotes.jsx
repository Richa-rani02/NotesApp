import {GrUndo,GrRedo} from "react-icons/gr";
import {BsFillPinFill} from "react-icons/bs";
import {BiArchiveIn} from "react-icons/bi";
import {IoColorPalette} from "react-icons/io5";
import "./InputNotes.css";
import { useState } from "react";
import { ColorPicker } from "../colorPicker/ColorPicker";
export const InputNotes=()=>{

  const [isExpanded,setExpanded]=useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [labels,setLabels]=useState(["work","Test","test1"]);

  const expandHandler=()=>{
    setExpanded(true);
  }
    return(
        <div className="notesarea top-gutter-md">
      <form className="input-form">
      {isExpanded && 
       <div className="flex-container-space input__pin bottom-gutter-sm">
        
          <input
            value="test"
            type="text"
            placeholder="Title"
            name="title"
          />
          <div class="btn-container">
         <BsFillPinFill />
         </div>
         </div> 
        }
           <textarea
            value=""
            onClick={()=>expandHandler()}
            name="content"
            placeholder="Take a note..."
            rows={isExpanded ? 3 : 1} className="input-textarea"
          ></textarea>

          {isExpanded && 
          <div className="notesbtn flex-container-space">
          <div className="btn-left">
           <div class="btn-container">
           <IoColorPalette/>
           <ColorPicker/>
           </div> 
           <div class="btn-container">
           <BiArchiveIn/>
             </div>
             <select
            className="label-container"
            onChange=""
            value=""
            name="labelSelector"
          >
            {labels.map((label) => {
              return (
                <option key={label} value={label}>
                  {label}
                </option>
              );
            })}
          </select>
          </div>
          <div className="btn-right">
            <button class="add">Close</button>
          </div>
        </div>}
         
      </form>
      </div>
    )
}