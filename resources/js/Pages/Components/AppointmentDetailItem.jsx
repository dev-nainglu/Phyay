export default function AppointmentDetail(props){
    console.log(props)
    return(
        <>

<div className="w-full mt-2 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900">Appointment Detail</h5>

            </div>
            <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">

                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        Appointment Date
                                    </p>
                                    <p className="text-sm text-gray-800 truncate">
                                        17 September, 2023
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">

                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        Appointment Time
                                    </p>
                                    <p className="text-sm text-gray-800 truncate">
                                        1 PM - 2 PM
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">

                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        Category
                                    </p>
                                    <p className="text-sm text-gray-800 truncate">
                                        General
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">

                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        Your Problem
                                    </p>
                                    <p className="text-sm text-gray-800 truncate">
                                        "I want to quit smoking"
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">

                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        Meeting Link
                                    </p>
                                        <a href="https://us04web.zoom.us/j/74163162756?pwd=Ec2qoH6SSFGLy1XpCPNDcuHFbb8xba.1" class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        https://us04web.zoom.us/j/74163162756?pwd=Ec2qoH6SSFGLy1XpCPNDcuHFbb8xba.1
                                        <svg class="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                        </a>
                                </div>
                            </div>
                        </li>
                    </ul>
            </div>
            </div>

        </>
    )
}
