import "./ConnexionBox.css";
import {ReCAPTCHA} from "react-google-recaptcha";

export default function ConnexionBox(){

    const onChange = () => {
        console.log("OE")
    }

    return (
        <div className="connexionbox">
            <form>
                <div className="description">
                    <h1>Se connecter</h1>
                    <p>Connectez vous à Kideo pour continuer :)</p>
                </div>
                <div className="connexion-field">
                    <div className="mail">
                        <h1>Adresse Email</h1>
                        <input type="email" name="" placeholder="Adresse Email" id=""/>
                    </div>
                    <div className="pass">
                        <h1>Mot de passe</h1>
                        <input type="password" name="" placeholder="Password" id=""/>
                    </div>
                </div>
                <div className="connexion-option">
                    <input type="submit" value="Suivant"/>
                </div>
            </form>
        </div>
    )
}