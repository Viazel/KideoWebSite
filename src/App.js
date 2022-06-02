import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import Message from "./pages/Message/Message";
import Connexion from "./pages/Connexion/Connexion";

export default function App(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/message" element={<Message />}/>
                <Route path="/connexion" element={<Connexion />}/>
            </Routes>
        </div>
    )
}