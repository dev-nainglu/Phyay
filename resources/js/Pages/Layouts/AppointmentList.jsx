import AppointmentItems from '../Components/AppointmentItems';
import HorizontalStatusItem from '../Components/HorizontalStatusItem'

export default function Wall(props){

    return (
        <>
            <div className="overflow-x-scroll pt-3 no-scrollbar">
                {props.show != 'noshow' && <HorizontalStatusItem />}
            </div>
            <div className="pt-3"></div>
            <AppointmentItems appointments={props.appointments} />
        </>
    );
}
