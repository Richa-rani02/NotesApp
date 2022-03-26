import "./MainArea.css";
import { InputNotes,NotesList,EditLabel } from "../../../components";
export const MainArea = () => {
    return (
        <div className="main-content">
            <EditLabel/>
            <InputNotes/>
            <NotesList/>
            
        </div>
    )
}