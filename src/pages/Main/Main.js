import "./Main.css";
import Poll from "../../components/Poll/Poll";
import Navbar from "../../components/Navbar/Navbar";

export default function Main(){
    return (
        <div className="app">
            <Navbar />
            <div className="landing-page">
                <div className="news">
                    <div className="kideo">
                        <h1>Kideo is comming !</h1>
                        <p>Aujourd'hui le 1er Juin 2022, moi et Layttos avons commencés le développement du site Kideo :)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}