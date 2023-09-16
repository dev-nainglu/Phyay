import { useState } from "react";
import ContainerLayout from "./ContainerLayout";

export default function DoctorProfile(
{
    doctor
}
){
    console.log(doctor)
    const [patientName, setName] = useState('Naing Lu')
    const [patientAge, setAge] = useState('23')
    const [gender, setGender] = useState('Male')
    const [timeslot, setTimeslot] = useState('2 PM - 4 PM')
    const [balance, setBalance] = useState('5000')
    const WaveSDK = WaveJsSDK;
    const [userInfo, setUserInfo] = useState({})

    WaveSDK.userModule.getUserInformation().then((success) => {
        setUserInfo(success.response.data)
        setName(userInfo.name)
        let by = userInfo.dob.split('-')[0]
        setAge(by)
        setGender(userInfo.gender)
    }).catch((err)=>{
        console.log(err.response.error)
    });

    const changeTimeslot = () => {
        let timeslot = document.getElementById("timeslot").value;
        setTimeslot(timeslot)
    }

    const bookAppointment = (timeslot) => {
        setTimeslot(timeslot)

        const booking = {
            name: patientName,
            age: patientAge,
            gender: gender,
            timeslot: timeslot,
            date: 'Sun 17',
            doctor: 'Soe Thura'
        }

        const wavePaymentModule = WaveSDK.paymentModule;
        const walletBalance = wavePaymentModule.walletBalance();
        setAge(walletBalance)
    }

    return (
        <>
            <ContainerLayout>
                <div className="max-w-2xl mx-4 mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                    <div className="rounded-t-lg h-20 overflow-hidden">
                    </div>
                    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                        <img className="object-cover object-center h-32" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front' />
                    </div>
                    <div className="text-center mt-2">
                        <h2 className="font-semibold">Soe Thura</h2>
                        <p className="text-gray-500">Therapist</p>
                    </div>
                    <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
                        <li className="flex flex-col items-center justify-around">
                            <svg width="49" height="63" viewBox="0 0 49 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0H49V48C49 56.2843 42.2843 63 34 63H15C6.71573 63 0 56.2843 0 48V0Z" fill="#FDF1F3"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M25.0363 48.1777C24.6942 47.9896 24.2806 47.9929 23.9473 48.192L19.8245 50.612L21.4393 44.331C22.4018 44.881 23.5139 45.2 24.6997 45.2C25.8855 45.2 26.9976 44.881 27.9612 44.331L29.5991 50.7022L25.0363 48.1777ZM24.6997 34.2C27.1263 34.2 29.0997 36.1734 29.0997 38.6C29.0997 41.0266 27.1263 43 24.6997 43C22.2731 43 20.2997 41.0266 20.2997 38.6C20.2997 36.1734 22.2731 34.2 24.6997 34.2ZM32.3656 52.6261L29.8257 42.7492C30.7453 41.614 31.2997 40.1719 31.2997 38.6C31.2997 34.9601 28.3396 32 24.6997 32C21.0609 32 18.0997 34.9601 18.0997 38.6C18.0997 40.1719 18.6541 41.614 19.5737 42.7492L17.0349 52.6261C16.9238 53.0573 17.0833 53.5116 17.4386 53.7789C17.7928 54.0462 18.2746 54.0704 18.6563 53.8482L24.5193 50.4063L30.7673 53.8625C30.9334 53.9549 31.1171 54 31.2997 54C31.5384 54 31.776 53.923 31.974 53.7701C32.3205 53.5017 32.4756 53.0518 32.3656 52.6261Z" fill="#E8899E"/>
                            </svg>
                            <div className="mt-1"><b>10 Yrs</b></div>
                            <div className="text-xs">Experience</div>
                        </li>
                        <li className="flex flex-col items-center justify-between">
                            <svg width="49" height="63" viewBox="0 0 49 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H49V48C49 56.2843 42.2843 63 34 63H15C6.71573 63 0 56.2843 0 48V0Z" fill="#D6E3FF"/>
                            <g clipPath="url(#clip0_0_1)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M24.5505 47.8244C24.7183 47.8244 24.8861 47.8645 25.0391 47.9436L29.0158 50.0222L28.2593 45.6361C28.1991 45.2921 28.3141 44.9418 28.5652 44.6981L31.7686 41.6003L27.3339 40.9545C26.991 40.9049 26.6945 40.6908 26.5405 40.3806L24.5505 36.3775L22.5606 40.3806C22.4066 40.6908 22.1101 40.9049 21.7672 40.9545L17.3325 41.6003L20.5358 44.6981C20.787 44.9418 20.902 45.2921 20.8418 45.6361L20.0853 50.0222L24.062 47.9436C24.215 47.8645 24.3828 47.8244 24.5505 47.8244ZM30.4192 52.9997C30.2514 52.9997 30.0837 52.9606 29.9307 52.8804L24.5506 50.0696L19.1706 52.8804C18.814 53.0661 18.3835 53.0334 18.0617 52.7971C17.7367 52.5607 17.5753 52.1608 17.6428 51.7652L18.6684 45.827L14.3213 41.6224C14.0312 41.3428 13.9278 40.9228 14.0512 40.5398C14.1736 40.1568 14.5049 39.8783 14.9027 39.8202L20.9179 38.9466L23.6053 33.5381C23.9619 32.8206 25.1394 32.8206 25.496 33.5381L28.1834 38.9466L34.1986 39.8202C34.5964 39.8783 34.9277 40.1568 35.0501 40.5398C35.1735 40.9228 35.0701 41.3428 34.78 41.6224L30.4329 45.827L31.4585 51.7652C31.526 52.1608 31.3646 52.5607 31.0396 52.7971C30.857 52.9321 30.6386 52.9997 30.4192 52.9997Z" fill="#6996FF"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_0_1">
                            <rect width="22" height="22" fill="white" transform="translate(14 32)"/>
                            </clipPath>
                            </defs>
                            </svg>
                            <div className="mt-1"><b>4.5</b></div>
                            <div className="text-xs">Ratings</div>
                        </li>
                        <li className="flex flex-col items-center justify-around">
                            <svg width="49" height="63" viewBox="0 0 49 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H49V48C49 56.2843 42.2843 63 34 63H15C6.71573 63 0 56.2843 0 48V0Z" fill="#FEF6EC"/>
                            <g clipPath="url(#clip0_31_2564)">
                            <path d="M28.125 32C24.2695 32 21.25 33.8123 21.25 36.125V38.4964C20.8063 38.4442 20.3471 38.4167 19.875 38.4167C16.0195 38.4167 13 40.2289 13 42.5417V49.875C13 52.1877 16.0195 54 19.875 54C23.0063 54 25.5868 52.8047 26.4447 51.1162C26.992 51.1959 27.5512 51.25 28.125 51.25C31.9805 51.25 35 49.4377 35 47.125V36.125C35 33.8123 31.9805 32 28.125 32ZM28.125 33.8333C31.0107 33.8333 33.1667 35.0433 33.1667 36.125C33.1667 37.2067 31.0107 38.4167 28.125 38.4167C25.2393 38.4167 23.0833 37.2067 23.0833 36.125C23.0833 35.0433 25.2393 33.8333 28.125 33.8333ZM19.875 40.25C22.7607 40.25 24.9167 41.46 24.9167 42.5417C24.9167 43.6233 22.7607 44.8333 19.875 44.8333C16.9893 44.8333 14.8333 43.6233 14.8333 42.5417C14.8333 41.46 16.9893 40.25 19.875 40.25ZM14.8333 45.3668C16.08 46.1689 17.8611 46.6667 19.875 46.6667C21.8889 46.6667 23.67 46.1689 24.9167 45.3668V46.2083C24.9167 47.29 22.7607 48.5 19.875 48.5C16.9893 48.5 14.8333 47.29 14.8333 46.2083V45.3668ZM19.875 52.1667C16.9893 52.1667 14.8333 50.9567 14.8333 49.875V49.0335C16.08 49.8356 17.8611 50.3333 19.875 50.3333C21.8889 50.3333 23.67 49.8356 24.9167 49.0335V49.875C24.9167 50.9567 22.7607 52.1667 19.875 52.1667ZM28.125 49.4167C27.6538 49.4167 27.1973 49.3736 26.75 49.3103V47.4953C27.201 47.5485 27.6575 47.5833 28.125 47.5833C30.1389 47.5833 31.92 47.0856 33.1667 46.2835V47.125C33.1667 48.2067 31.0107 49.4167 28.125 49.4167ZM28.125 45.75C27.6538 45.75 27.1973 45.7069 26.75 45.6437V43.8287C27.201 43.8818 27.6575 43.9167 28.125 43.9167C30.1389 43.9167 31.92 43.4189 33.1667 42.6168V43.4583C33.1667 44.54 31.0107 45.75 28.125 45.75ZM28.125 42.0833C27.6282 42.0833 27.1478 42.0366 26.6785 41.9669C26.497 41.1538 25.9369 40.4233 25.1009 39.8393C26.0103 40.1006 27.0314 40.2509 28.125 40.2509C30.1389 40.2509 31.92 39.7532 33.1667 38.9511V39.7926C33.1667 40.8743 31.0107 42.0843 28.125 42.0843V42.0833Z" fill="#F7C480"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_31_2564">
                            <rect width="22" height="22" fill="white" transform="translate(13 32)"/>
                            </clipPath>
                            </defs>
                            </svg>
                            <div className="mt-1"><b>{balance}</b></div>
                            <div className="text-xs">MMK</div>
                        </li>
                    </ul>
                </div>

                <div className="max-w-2xl mx-4 p-3 mt-1 bg-white shadow-xl rounded-lg text-gray-900">
                    <h3><b>About Doctor</b></h3>
                    <p className="text-xs text-blue-900">
                        Dr. Soe Thura is a top specialist at London Bridge Hospital at London. He has achieved several awards and recognition for is contribution and service in his own field. He is available for private consultation.
                    </p>
                </div>
                <div className="mt-6">
                    <h3 className="mx-4"><b>Available Date</b></h3>
                    <div className="mx-2 grid grid-cols-7 gap-2 text-center">
                        <button className="custom-button">
                            <p className="text-primary"><b>Sun</b></p>
                            <p className="text-secondary">17</p>
                        </button>
                        <button className="custom-button">
                            <p className="text-primary"><b>Mon</b></p>
                            <p className="text-secondary">18</p>
                        </button>
                        <button className="custom-button">
                            <p className="text-primary"><b>Tue</b></p>
                            <p className="text-secondary">19</p>
                        </button>
                        <button className="custom-button">
                            <p className="text-primary"><b>Wed</b></p>
                            <p className="text-secondary">20</p>
                        </button>
                        <button className="custom-button">
                            <p className="text-primary"><b>Thu</b></p>
                            <p className="text-secondary">21</p>
                        </button>
                        <button className="custom-button">
                            <p className="text-primary"><b>Fri</b></p>
                            <p className="text-secondary">22</p>
                        </button>
                        <button className="custom-button">
                            <p className="text-primary"><b>Sun</b></p>
                            <p className="text-secondary">23</p>
                        </button>
                    </div>
                    <div className="mx-3">
                        <h3 className="mt-6"><b>Time Slot</b></h3>
                        <select id="timeslot" value={timeslot} onChange={() => changeTimeslot()} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                            <option>10 AM - 12 AM</option>
                            <option>2 PM - 4 PM</option>
                            <option>6 PM - 8 PM</option>
                            <option>9 PM - 11 PM</option>
                        </select>

                        <h2 className="mt-6"><b>Patient Details</b></h2>
                        <div className="mt-2">
                            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-600">Name</label>
                            <input type="email" id="email" value={patientName} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled required />
                        </div>
                        <div className="mt-2">
                            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-600">Age</label>
                            <input type="email" id="email" value={patientAge} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled required />
                        </div>

                        <fieldset className="mt-3">
                            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-600">Gender</label>
                            <div className="flex items-center mb-1">
                                <input id="country-option-1" type="radio" defaultChecked={gender == 'Male'} name="gender" value='Male' className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                <label htmlFor="country-option-1" className="block ml-2 text-sm font-medium text-gray-700">
                                Male
                                </label>
                            </div>

                            <div className="flex items-center mb-1">
                                <input id="country-option-2" type="radio" defaultChecked={gender == 'Female'} name="gender" value='Female' className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" />
                                <label htmlFor="country-option-2" className="block ml-2 text-sm font-medium text-gray-700">
                                Female
                                </label>
                            </div>
                        </fieldset>

                        <label htmlFor="message" className="block mt-4 mb-2 text-sm font-medium text-gray-900">Write your problem</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                        <button type="submit" onClick={() => bookAppointment(timeslot)} className="w-full mb-10 text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Book Appointment</button>
                    </div>
                </div>


            </ContainerLayout>
        </>
    );
}
