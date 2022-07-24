
import "./Screen.css";

const Screen = ({value}) =>{
    return(
        <h2 className="screen" mode="single">
            {value}
        </h2>
    );
};

export default Screen;