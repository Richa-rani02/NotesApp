import "./NotesList.css";
 import {Note} from "./SingleNote";
export const NotesList =()=>{
return(
    <>
    <main className="top-gutter-md">
            <div className="Notes-container">
             <h5>PINNED</h5>
             <div className="notes_list_grid top-gutter-md">
                 <Note/>
                 <Note/>
                 <Note/>
                 <Note/>
             </div>
             </div>
             <div className="Notes-container">
            <h5>OTHERS</h5>
            <div className="notes_list_grid">
             </div>
            </div>
        </main>
    </>
)
}