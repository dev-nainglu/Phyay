import ContainerLayout from './ContainerLayout';
import AppoinmentStatusCard from './Components/AppoinmentStatusCard';

export default function AppointmentConfirm(props){
    return(
        <>
            <div className="bg-gray-100">
                <div className="bg-white p-6  md:mx-auto">
                    <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
                        <path fill="currentColor"
                            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                        </path>
                    </svg>
                    <div>
                        <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Success!</h3>
                        <p className="text-center text-black-900">{props.transID}</p>
                    </div>
                </div>
            </div>
            <AppoinmentStatusCard />
            <div className="mt-6 flex flex-nowrap">
                <a href="/" className="w-1/2 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Close</a>
                <a href={"/appointments/" + props.apptID} className="w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 text-center focus:outline-none">View</a>
            </div>
        </>
    )
}
