export default function AppointmentDetail(props){
    function copyText(){
        var copyText = document.getElementById("default-search");

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
    }

    function gohome(){
        window.location.href = "/"
    }

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
                                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                        <div class="relative">
                                            <input type="search" id="default-search" value="https://us04web.zoom.us/j/74163162756?pwd=Ec2qoH6SSFGLy1XpCPNDcuHFbb8xba.1" class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Mockups, Logos..." disabled />
                                            <button type="submit" onClick={() => copyText()} class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1"><svg width="25px" height="25px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z" stroke="#1C274C" stroke-width="1.5"/>
                                            <path opacity="0.5" d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5" stroke="#1C274C" stroke-width="1.5"/>
                                            </svg>
                                            </button>
                                        </div>

                                </div>
                            </div>
                        </li>
                    </ul>
                    <a type="submit" onClick={() => gohome()} className="w-full mb-10 text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Done</a>
            </div>
            </div>

        </>
    )
}
