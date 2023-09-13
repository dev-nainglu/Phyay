import ContainerLayout from "./ContainerLayout";

export default function DoctorProfile(){

    return (
        <>
            <ContainerLayout>
                <div
                    className="max-w-2xl mx-4 mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                    <div className="rounded-t-lg h-20 overflow-hidden">
                    </div>
                    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                        <img className="object-cover object-center h-32" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front' />
                    </div>
                    <div className="text-center mt-2">
                        <h2 className="font-semibold">Sarah Smith</h2>
                        <p className="text-gray-500">Freelance Web Designer</p>
                    </div>
                    <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
                        <li className="flex flex-col items-center justify-around">
                            <svg className="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                            <div>2k</div>
                        </li>
                        <li className="flex flex-col items-center justify-between">
                            <svg className="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path
                                    d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                            </svg>
                            <div>10k</div>
                        </li>
                        <li className="flex flex-col items-center justify-around">
                            <svg className="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path
                                    d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                            </svg>
                            <div>15</div>
                        </li>
                    </ul>
                </div>

                <div className="max-w-2xl mx-4 p-3 mt-1 bg-white shadow-xl rounded-lg text-gray-900">
                    <h3><b>About Doctor</b></h3>
                    <p className="text-xs">
                    Dr. Bellamy Nicholas is a top specialist at London Bridge Hospital at London. He has achieved several awards and recognition for is contribution and service in his own field. He is available for private consultation.
                    </p>
                </div>
                <div className="mx-4 mt-6 mx-auto">
                    <h3><b>Available Date</b></h3>
                    <div class="grid grid-cols-7 gap-2 text-center">
                        <div className="p-3 mt-1 text-center bg-white border-black shadow-xl rounded-lg text-gray-900">
                            <p>Mon</p>
                            <p>11</p>
                        </div>
                        <div className="p-3 mt-1 text-center bg-white shadow-xl rounded-lg text-gray-900">
                        <p>Mon</p>
                            <p>11</p>
                        </div>
                        <div className="p-3 mt-1 text-center bg-white shadow-xl rounded-lg text-gray-900">
                        <p>Mon</p>
                            <p>11</p>
                        </div>
                        <div className="p-3 mt-1 text-center bg-white shadow-xl rounded-lg text-gray-900">
                        <p>Mon</p>
                            <p>11</p>
                        </div>

                        <div className="p-3 mt-1 text-center bg-white shadow-xl rounded-lg text-gray-900">
                        <p>Mon</p>
                            <p>11</p>
                        </div>
                        <div className="p-3 mt-1 text-center bg-white shadow-xl rounded-lg text-gray-900">
                            <p>Mon</p>
                            <p>11</p>
                        </div>
                        <div className="p-3 mt-1 text-center bg-white shadow-xl rounded-lg text-gray-900">
                            <p>Mon</p>
                            <p>11</p>
                        </div>
                    </div>

                    <h3 className="mt-6"><b>Time Slot</b></h3>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                    </select>

                    <h2 className="mt-6"><b>Patient Details</b></h2>
                    <div class="mt-2">
                        <label for="email" class="block mb-1 text-sm font-medium text-gray-600">Name</label>
                        <input type="email" id="email" value="Tolu Arowolesu" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled required />
                    </div>
                    <div class="mt-2">
                        <label for="email" class="block mb-1 text-sm font-medium text-gray-600">Age</label>
                        <input type="email" id="email" value="23" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled required />
                    </div>

                    <fieldset className="mt-3">
                        <label for="email" class="block mb-1 text-sm font-medium text-gray-600">Gender</label>
                        <div class="flex items-center mb-1">
                            <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked />
                            <label for="country-option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Male
                            </label>
                        </div>

                        <div class="flex items-center mb-1">
                            <input id="country-option-2" type="radio" name="countries" value="Germany" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                            <label for="country-option-2" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Female
                            </label>
                        </div>
                    </fieldset>

                    <label for="message" class="block mt-4 mb-2 text-sm font-medium text-gray-900">Write your problem</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                    <button type="submit" class="w-full mb-10 text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Book Appointment</button>
                </div>


            </ContainerLayout>
        </>
    );
}
