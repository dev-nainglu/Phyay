import AppointmentDetailItem from './Components/AppointmentDetailItem';
import ContainerLayout from './ContainerLayout';
import AppointmentItems from './Components/AppointmentItems';
import AppoinmentStatusCard from './Components/AppoinmentStatusCard';

export default function AppointmentDetail(props){

    return(
        <>
        <ContainerLayout>
            <div className="pt-10"></div>
            <AppoinmentStatusCard />
          <AppointmentDetailItem />
        </ContainerLayout>
        </>
    )
}
