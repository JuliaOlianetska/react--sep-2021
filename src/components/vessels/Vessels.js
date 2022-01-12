import Vessel from "../vessel/Vessel";
import {useEffect, useState} from "react";

export default function Vessels() {

    const [vessels, setVessels] = useState([]);

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/').
        then(value => value.json()).
        then(value => setVessels(value))
    }, [])



  return (
    <div>
        {
            vessels.filter(vessel => {
                    if (vessel.launch_year !== '2020') {
                        return vessel;
                    }
                }).map(vessel => <Vessel key={vessel.mission_name} vessel={vessel}/>)
        }

    </div>
  );
}