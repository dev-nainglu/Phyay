import AppointmentDetailItem from '../Pages/Components/AppointmentDetailItem';
import ContainerLayout from './ContainerLayout';
import AppoinmentStatusCard from '../Pages/Components/AppoinmentStatusCard';

export default function AppointmentDetail(props){

    return(
        <>
        <ContainerLayout>
            <AppoinmentStatusCard />
          <AppointmentDetailItem />
        </ContainerLayout>
        </>
    )
}
