import AppointmentItems from '../Components/AppointmentItems';

export default function Wall(props){

    return (
        <>
            <AppointmentItems appointments={props.appointments} show={props.show}  />
        </>
    );
}
