import './App.css';
import Forms from "./components/forms/Forms";
import Cars from "./components/cars/Cars";
import {useState} from "react";

export default function App() {
    const [trigger, setTrigget] = useState(null);

   const update = (data) => {
       setTrigget(data)
   }

    return (
        <div>
            <Forms update={update}/>
            <Cars trigger={trigger}/>
        </div>
    );
}