import css from './Shorten.css';
import {useState} from 'react';
import validator from "validator";
function Shorten(){
    const [inputText, setInputText] = useState("");
    const [isValidURL, setIsValidURL] = useState(false);
    const validate = (value) => {
        if(validator.isURL(value)) {
          setIsValidURL(true);
        } else {
          setIsValidURL(false);
        }
      };
    return(   
    <div className="link_shortener">
     <input type="text"className="input" placeholder="Shorten a link here..." value={inputText} onChange={(e) => { validate(e.target.value); setInputText(e.target.value)}}/>
     <button className="button1">Shorten It!</button></div>
    )}
export default Shorten;