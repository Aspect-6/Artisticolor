import { InputType } from "artisticolor/login-box";
import { useEffect, useRef } from "react";

export default function InputWrap({ type, Ref }: InputType) {
    const typeToLower = type.toLowerCase();
    
    const handleEvents = (eventType: 'focus' | 'blur') => {
        if(eventType === 'focus') require('anim/login/box')[typeToLower]();
        if(eventType === 'blur') require('anim/login/box').deselect();
    };

    return (
        <div className="wraps">
            <label id={typeToLower.concat('Label')}>{type}</label>
            <input 
                type={typeToLower} 
                id={typeToLower} 
                className="lgnBoxInput" 
                onFocus={() => handleEvents('focus')}
                onBlur={() => handleEvents('blur')}
                ref={Ref}
            />
        </div>
    );
};