import {Textfit} from "react-textfit";
import "./Screen.css";

const Screen = ({value}) =>{
    return(
       <Textfit className="screen">{value}</Textfit>
    );
};

export default Screen;