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
        <div className="container mx auto">
            <div className="my-4">
                <label>
                    Status Text
                    <input value={text} onChange={(e) => setText(e.target.value)}
                    className={`w-60 p-1 border rounded-md mx-4`} type="color" placeholder="Select Bg COlor" />
                </label>
                <label>Text Color
                    <input  value={textColor} 
                    onClick={(e) => setTextColor(e.target.value)}
                    className={`w-60 p-1 border rounded-md mx-4`}type="color" placeholder="Select Text Color" />
                </label>
                <button onClick={handleOnClick} className="p-1 bg-slate-700 text-White px-3 rounded-md">
                    Add
                </button>

            </div>
        </div>
    )

}