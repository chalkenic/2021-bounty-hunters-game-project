import React, {useRef} from "react";
// import classes from "./SetupForm.module.css";
import Input from "../UI/Input/Input";


const SetupForm = (props) => {
const ref = useRef(1);


const testValue = ref.current.value;

  return <form className="form">

    <Input
    ref = {testValue} label = "game" input />



  </form>;
};
export default SetupForm;
