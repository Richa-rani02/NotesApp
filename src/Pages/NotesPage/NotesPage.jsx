import "./NotesPage.css";
import {Header,Sidebar,Footer} from "../../components/index";
import { MainArea } from "./MainArea/MainArea";
export const NotesPage=()=>{
    return(
        <>
        <input type="checkbox" id="check"></input>
        <Header/>
        <Sidebar/>
        <MainArea/>
        </>
    )
}
