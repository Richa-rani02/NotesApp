import "./NotesPage.css";
import {Header,Sidebar,Footer} from "../../components/index";
import { MainArea } from "./MainArea/MainArea";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const NotesPage=()=>{
    return(
        <>
        <input type="checkbox" id="check"></input>
        <Header/>
        <Sidebar/>
        <MainArea/>
        <ToastContainer autoClose={2000}/>
        </>
    )
}
