/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const TextChange = () => {

    // changing text
    const texts = ["RAJU AHMMED","RAJU AHMMED","RAJU AHMMED"];
    const [currentText, setCurrentText] = useState("");
    const [endValue, setEndValue] = useState(true);
    const [isForward, setIsForward] = useState(true);
    const [index, setIndex] = useState(0);



    useEffect(() => {
        const interValid = setInterval(() => {
             setCurrentText(texts[index].substring(0,endValue));
             if(isForward){
             setEndValue((prev) =>prev + 1);   
             }
             else{
                setEndValue((prev) =>prev - 1);
             }
             if(endValue > texts[index].length+10){
                setIsForward(false)
             }
             if(endValue < 2.1){
                setIsForward(true)
                setIndex((prov)=>prov&texts.length)
             }
        }, 50);
      return ()=>clearInterval(interValid)

    }, [endValue, isForward, index, texts]);

    // return current text
    return (
        <div className="transition ease duration-500">
            {currentText}
        </div>
    );
};

export default TextChange;