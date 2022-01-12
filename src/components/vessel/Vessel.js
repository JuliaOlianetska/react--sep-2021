import './Vessel.css';

export default function Vessel({vessel}) {


    return (
        <div className={'vessel-info'}>
            <div className={'description'}>
                <h4>{vessel.mission_name}</h4>
                <p>{vessel.launch_year}</p>
            </div>
            <div className={'img'}>
                <img src={vessel.links.mission_patch_small} alt={vessel.mission_name}/>
            </div>
        </div>
    );
}