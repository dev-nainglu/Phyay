import AppointmentDetailItem from './Components/AppointmentDetailItem';
import ContainerLayout from './ContainerLayout';
import AppoinmentStatusCard from '../Pages/Components/AppoinmentStatusCard';

export default function AppointmentDetail(props){

    return(
        <>
        <ContainerLayout>
            <div className="pt-10"></div>
        <div className="bg-white h-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <div className="flex">
      <img src="https://i.pravatar.cc/200" alt="Your Image" className="w-1/2 h-15" style={{borderRadius: 14, height: 100, width: 100}} />
      <div className="flex flex-col ml-4">
        <div className="mb-2">Dr Soe Thura</div>
        <div className="mb-2">Therapist</div>
        <div className="mb-2">12 Years</div>
      </div>
    </div>
    </div>
          <AppointmentDetailItem />
        </ContainerLayout>
        </>
    )
}
