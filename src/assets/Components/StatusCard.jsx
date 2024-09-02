import { useState, useEffect } from "react";

function StatusCard() {
    const [status, setStatus] =useState([]);
    const [text, setText] = useState("Hello");
    const [bg, setBg] = useState("#00000");
    const [textColor, setTextColor] = useState("#ffffff");

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
                    className={`w-60 p-1 border rounded-md mx-4`} type="text" placeholder="Add Text" />
                </label>
                <label>Bg Color
                    <input  value={bg} 
                    onClick={(e) => setBg(e.target.value)}
                    className={`w-60 p-1 border rounded-md mx-4`}type="color" placeholder="Select Bg Color" />
                </label>
                <label> Text Color
                    <input value={textColor} onChange={(e) => setTextColor(e.target.value)} type="color" placeholder="Select Text Color" /> 
                    </label>
                <button onClick={handleOnClick} className="p-1 bg-slate-700 text-White px-3 rounded-md">
                    Add
                </button>
            </div>
            <div className="flex flex-wrap gap-2">
            {status.map((data) => (
                 <card removeCard={onRemove} key={data.createdAt} data={data}/>   
            ))}
            </div>
        </div>
    );

}