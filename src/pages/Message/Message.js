import "./Message.css";
import Friends from "../../components/Friends/Friends";
import {useEffect, useState} from "react";

export default function Message(){

    const [canShow, setCanShow] = useState(false);

    const change = () => {
        setCanShow(!canShow);
    }

    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCanShow(true);
        }, 3000)
        const test = setTimeout(() => {
            setIsEnd(true);
        }, 2000)
        return () => {
            clearInterval(timeout);
            clearInterval(test);
        }
    }, [])

    return (
        <div className="message">
            {canShow ? <Friends /> : <img className={isEnd ? "message-img message-img-end" : "message-img"} src="https://thumbs.gfycat.com/AlienatedCanineHoneybee-size_restricted.gif" alt=""/>}
        </div>
    )
}