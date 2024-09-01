import { useState, useEffect } from "react";

function StatusCard() {
    const [status, setStatus] =useState("");
    const [text, setText] = useState("");
    const [bg, setBg] = useState("");
    const [textColor, setTextColor] = useState("");

    const handleOnClick = () => {
        const obj = {
            text,
            bg,
            textColor,
            createdAt: Date.now(),
        };

        setStatus([...status, obj]);
        console.log(obj);    
    };

    const onRemove = (createdAt) => {
        setStatus([...status.filter((data) => data.createdAt !== createdAt)])
    };
    return (
        <div>
            <div>
                
            </div>
        </div>
    )

}