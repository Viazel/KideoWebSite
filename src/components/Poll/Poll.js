import "./Poll.css";

export default function Poll(options){
    return (
        <div className="poll">
            <h1 className="title">Sondage:</h1>
            <h1 className="poll-text">{options.polltext}</h1>
            <div className="poll-buttons">
                <input type="submit" value="Oui"/>
                <input type="submit" value="IDK*"/>
                <input type="submit" value="Non"/>
            </div>
            <p>*IDK: I don't know (Je ne sais pas)</p>
        </div>
    )
}