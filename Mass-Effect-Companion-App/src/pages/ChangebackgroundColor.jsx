import { useState } from "react";

function ChangebackgroundColor () {
    const [color, setColor] = useState(color);
    const onButtonClick = (color) => () => {
        setColor(color);
    };
    return {
        
    }

}
export default ChangebackgroundColor;