import AppointmentDetailItem from './Components/AppointmentDetailItem';
import ContainerLayout from './ContainerLayout';
import AppointmentItems from './Components/AppointmentItems';
import AppoinmentStatusCard from './Components/AppoinmentStatusCard';
import Title from './Components/Title';


export default function AppointmentDetail(props){
    console.log(props)
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
