import ContainerLayout from './ContainerLayout';
import AppoinmentStatusCard from './Components/AppoinmentStatusCard';
import AppointmentConfirmDetailItem from './Components/AppointmentConfirmDetailItem'

export default function AppointmentConfirm(props){ 
    return(
        <>
        <ContainerLayout>
            <div className="pt-10"></div>
            <AppoinmentStatusCard />
          <AppointmentConfirmDetailItem />
        </ContainerLayout>
        </>
    )
}