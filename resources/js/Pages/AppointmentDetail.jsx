import AppointmentDetailItem from './Components/AppointmentDetailItem';
import ContainerLayout from './ContainerLayout';
import AppointmentItems from './Components/AppointmentItems';
import AppoinmentStatusCard from '../Pages/Components/AppoinmentStatusCard';

export default function AppointmentDetail(props){

    return(
        <>
        <ContainerLayout>
            <div className="pt-10"></div>
            <AppointmentItems />
          <AppointmentDetailItem />
        </ContainerLayout>
        </>
    )
}
