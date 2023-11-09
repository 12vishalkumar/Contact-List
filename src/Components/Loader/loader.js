//------------------------------ importing required libaries --------------------------//
import { BeatLoader } from "react-spinners";
import Style from "./loader.module.css";


//----------------------------- Loader function --------------------------------------//
const Loader = () => {

  
  return (
    <div className={Style.loader}>
      <BeatLoader className={Style.beatLoader} />
    </div>
  );
};

//---------------------------- default exportor function ---------------------------//
export default Loader;
