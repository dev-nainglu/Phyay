import Wall from "./Layouts/Wall";
import DoctorList from "./Layouts/DoctorList";
import AppointmentList from "./Layouts/AppointmentList";
import Profile from "./Layouts/Profile";
import { useState } from "react";

export default function AppLayout(){

    const [activeTab, setValue] = useState('home')
    const WaveSDK = window.sdk;

    const getLocation = () => {
        WaveSDK.locationModule = {
            getCurrentPosition: function(){
                return new Promise((resolve, reject) => {
                    // for success response
                    resolve({
                        response: {
                            data: {
                                latitude: 37.7749,
                                longitude: -122.4194,
                            },
                        },
                    });

                    // for failed response
                    reject({
                      response: {
                        error: {
                          code: 'WM-OTHER-001',
                          message: 'An error occurred!',
                        },
                      },
                    });
                });
            }
        }
    }

    //getLocation()

    const changeTab = (tab) => {
        setValue(tab)
    }

    return (
        <>
            {activeTab == 'home' && <div id="sticky-banner" tabIndex="-1" className="fixed top-0 left-0 z-50 justify-between w-full p-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center mx-auto">
                    <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                        <span>Welcome, <a href="#" className="inline font-medium text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline">Naing Lu!</a></span>
                    </p>
                </div>
            </div>}
            {activeTab == 'doctors' && <h1 className="mt-4 text-center font-bold text-xl">All Doctors</h1>}
            {activeTab == 'appointments' && <h1 className="mt-4 text-center font-bold text-xl">My Appointments</h1>}
            {activeTab == 'profile' && <h1 className="mt-4 text-center font-bold text-xl">My Profile</h1>}
            <hr className="h-px my-2 bg-gray-300 border-0"></hr>
            <main className="mx-3">
                <div className="mt-30">
                    {activeTab == 'home' && <Wall />}
                    {activeTab == 'doctors' && <DoctorList />}
                    {activeTab == 'appointments' && <AppointmentList />}
                    {activeTab == 'profile' && <Profile />}
                </div>
            </main>
            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
                <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                    <button type="button" onClick={() => changeTab('home')} className="inline-flex flex-col items-center justify-center px-5 outline-none " style={{ outline: 'none', boxShadow: 'none' }}>
                                    <svg
                            className="w-5 h-5 mb-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill={activeTab === 'home' ? '#5185FE' : 'currentColor'}
                            viewBox="0 0 20 20"
                        >
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        <span className={`text-sm ${activeTab === 'home' ? 'text-blue-500' : 'text-black'}`}>
                                Home
                            </span>
                    </button>
                    <button type="button" onClick={() => changeTab('doctors')} className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50">
                                    <svg
                            width="25"
                            height="24"
                            className="w-5 h-5 mb-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill={activeTab === 'doctors' ? '#5185FE' : 'currentColor'}
                            viewBox="0 0 25 24"
                        >
                             <path d="M5.57143 3.46154C6.36043 3.46154 7 2.9105 7 2.23077C7 1.55103 6.36043 1 5.57143 1C5.04264 1 4.581 1.24751 4.334 1.61538H4.14286C2.95939 1.61538 2 2.44194 2 3.46154V9H3.42857V3.46154C3.42857 3.12167 3.74837 2.84615 4.14286 2.84615H4.334C4.581 3.21403 5.04264 3.46154 5.57143 3.46154Z"/>
                             <path fillRule="evenodd" clipRule="evenodd" d="M4.51982 8.94444H3.80999H2.58635C2.24845 8.94444 1.97166 9.21865 2.00233 9.55476C2.14457 11.1138 2.82843 12.5818 3.94572 13.6978C4.76503 14.5161 5.7738 15.1017 6.86908 15.4118V16.8889C6.86908 17.6872 7.37995 18.3664 8.09296 18.618C8.11902 21.0425 10.0949 23 12.5284 23C14.9782 23 16.9641 21.0164 16.9641 18.5694V16.125C16.9641 14.8593 17.9913 13.8333 19.2584 13.8333C20.5255 13.8333 21.5527 14.8593 21.5527 16.125V17.6043C20.8398 17.856 20.3291 18.5351 20.3291 19.3333C20.3291 20.3459 21.1508 21.1667 22.1645 21.1667C23.1783 21.1667 24 20.3459 24 19.3333C24 18.5351 23.4893 17.856 22.7764 17.6043V16.125C22.7764 14.1844 21.2013 12.6111 19.2584 12.6111C17.3155 12.6111 15.7404 14.1844 15.7404 16.125V18.5694C15.7404 20.3414 14.3024 21.7778 12.5284 21.7778C10.7706 21.7778 9.3426 20.3674 9.31672 18.6178C10.0294 18.366 10.54 17.687 10.54 16.8889V15.4118C11.6353 15.1017 12.6441 14.5161 13.4634 13.6978C14.5807 12.5818 15.2645 11.1138 15.4068 9.55476C15.4375 9.21865 15.1606 8.94444 14.8227 8.94444V3.44444C14.8227 2.43192 14.001 1.61111 12.9873 1.61111H12.8235C12.612 1.24579 12.2166 1 11.7636 1C11.0878 1 10.54 1.54721 10.54 2.22222C10.54 2.89724 11.0878 3.44444 11.7636 3.44444C12.2166 3.44444 12.612 3.19866 12.8235 2.83333H12.9873C13.3252 2.83333 13.5991 3.10694 13.5991 3.44444V8.94444H12.8893C12.5514 8.94444 12.2828 9.21999 12.2252 9.55262C12.1004 10.2734 11.7558 10.9438 11.231 11.468C10.561 12.1373 9.65218 12.5133 8.70454 12.5133C7.75695 12.5133 6.84815 12.1373 6.17809 11.468C5.65333 10.9438 5.30864 10.2734 5.18382 9.55262C5.12625 9.21999 4.85766 8.94444 4.51982 8.94444ZM13.3424 10.1667H14.0732C13.8446 11.1686 13.3373 12.0953 12.5981 12.8336C11.5655 13.865 10.1649 14.4444 8.70454 14.4444C7.24418 14.4444 5.84361 13.865 4.81098 12.8336C4.07183 12.0953 3.56451 11.1686 3.33584 10.1667H4.06666C4.28123 10.9789 4.70789 11.7279 5.31286 12.3322C6.21241 13.2307 7.43244 13.7355 8.70454 13.7355C9.97669 13.7355 11.1967 13.2307 12.0963 12.3322C12.7012 11.7279 13.1279 10.9789 13.3424 10.1667ZM22.1645 18.7222C22.5025 18.7222 22.7764 18.9958 22.7764 19.3333C22.7764 19.6708 22.5025 19.9444 22.1645 19.9444C21.8266 19.9444 21.5527 19.6708 21.5527 19.3333C21.5527 18.9958 21.8266 18.7222 22.1645 18.7222ZM9.31635 15.6667V16.8889C9.31635 17.2264 9.04244 17.5 8.70454 17.5C8.36663 17.5 8.09272 17.2264 8.09272 16.8889V15.6667H9.31635Z"/>
                        </svg>
                        <span className={`text-sm ${activeTab === 'doctors' ? 'text-blue-500' : 'text-black'}`}>
                             Doctors
                            </span>
                    </button>
                    <button type="button" onClick={() => changeTab('appointments')} className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50">
                                    <svg
                            width="25"
                            height="24"
                            className="w-5 h-5 mb-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill={activeTab === 'appointments' ? '#5185FE' : 'currentColor'}
                            viewBox="0 0 25 24"
                        >
                             <path d="M8.66667 12H7C6.08083 12 5.33333 12.7475 5.33333 13.6667V15.3333C5.33333 16.2525 6.08083 17 7 17H8.66667C9.58583 17 10.3333 16.2525 10.3333 15.3333V13.6667C10.3333 12.7475 9.58583 12 8.66667 12ZM7 15.3333V13.6667H8.66667V15.3333H7ZM17.8333 3.66667H17V2.83333C17 2.37333 16.6275 2 16.1667 2C15.7058 2 15.3333 2.37333 15.3333 2.83333V3.66667H8.66667V2.83333C8.66667 2.37333 8.29417 2 7.83333 2C7.3725 2 7 2.37333 7 2.83333V3.66667H6.16667C3.86917 3.66667 2 5.53583 2 7.83333V17.8333C2 20.1308 3.86917 22 6.16667 22H17.8333C20.1308 22 22 20.1308 22 17.8333V7.83333C22 5.53583 20.1308 3.66667 17.8333 3.66667ZM6.16667 5.33333H17.8333C19.2117 5.33333 20.3333 6.455 20.3333 7.83333V8.66667H3.66667V7.83333C3.66667 6.455 4.78833 5.33333 6.16667 5.33333ZM17.8333 20.3333H6.16667C4.78833 20.3333 3.66667 19.2117 3.66667 17.8333V10.3333H20.3333V17.8333C20.3333 19.2117 19.2117 20.3333 17.8333 20.3333Z"/>
                        </svg>
                        <span className={`text-sm ${activeTab === 'appointments' ? 'text-blue-500' : 'text-black'}`}>
                                Appointments
                            </span>
                    </button>
                    <button type="button" onClick={() => changeTab('profile')} className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M4.58947 15.4645C5.52715 14.5268 6.79892 14 8.125 14H16.125C17.4511 14 18.7229 14.5268 19.6605 15.4645C20.5982 16.4021 21.125 17.6739 21.125 19V21C21.125 21.5523 20.6773 22 20.125 22C19.5727 22 19.125 21.5523 19.125 21V19C19.125 18.2044 18.8089 17.4413 18.2463 16.8787C17.6837 16.3161 16.9206 16 16.125 16H8.125C7.32935 16 6.56629 16.3161 6.00368 16.8787C5.44107 17.4413 5.125 18.2044 5.125 19V21C5.125 21.5523 4.67728 22 4.125 22C3.57272 22 3.125 21.5523 3.125 21V19C3.125 17.6739 3.65178 16.4021 4.58947 15.4645Z" fill="#484C52"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12.125 4C10.4681 4 9.125 5.34315 9.125 7C9.125 8.65685 10.4681 10 12.125 10C13.7819 10 15.125 8.65685 15.125 7C15.125 5.34315 13.7819 4 12.125 4ZM7.125 7C7.125 4.23858 9.36358 2 12.125 2C14.8864 2 17.125 4.23858 17.125 7C17.125 9.76142 14.8864 12 12.125 12C9.36358 12 7.125 9.76142 7.125 7Z" fill="#484C52"/>
</svg>

                        <span className={`text-sm ${activeTab === 'profile' ? 'text-blue-500' : 'text-black'}`}>
                        Profile
                            </span>
                    </button>
                </div>
            </div>

        </>
    );
}

{/* <button type="button" onClick={() => changeTab('doctors')} className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 hover:bg-gray-800 group">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.57143 3.46154C6.36043 3.46154 7 2.9105 7 2.23077C7 1.55103 6.36043 1 5.57143 1C5.04264 1 4.581 1.24751 4.334 1.61538H4.14286C2.95939 1.61538 2 2.44194 2 3.46154V9H3.42857V3.46154C3.42857 3.12167 3.74837 2.84615 4.14286 2.84615H4.334C4.581 3.21403 5.04264 3.46154 5.57143 3.46154Z" fill="#539DF3"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.51982 8.94444H3.80999H2.58635C2.24845 8.94444 1.97166 9.21865 2.00233 9.55476C2.14457 11.1138 2.82843 12.5818 3.94572 13.6978C4.76503 14.5161 5.7738 15.1017 6.86908 15.4118V16.8889C6.86908 17.6872 7.37995 18.3664 8.09296 18.618C8.11902 21.0425 10.0949 23 12.5284 23C14.9782 23 16.9641 21.0164 16.9641 18.5694V16.125C16.9641 14.8593 17.9913 13.8333 19.2584 13.8333C20.5255 13.8333 21.5527 14.8593 21.5527 16.125V17.6043C20.8398 17.856 20.3291 18.5351 20.3291 19.3333C20.3291 20.3459 21.1508 21.1667 22.1645 21.1667C23.1783 21.1667 24 20.3459 24 19.3333C24 18.5351 23.4893 17.856 22.7764 17.6043V16.125C22.7764 14.1844 21.2013 12.6111 19.2584 12.6111C17.3155 12.6111 15.7404 14.1844 15.7404 16.125V18.5694C15.7404 20.3414 14.3024 21.7778 12.5284 21.7778C10.7706 21.7778 9.3426 20.3674 9.31672 18.6178C10.0294 18.366 10.54 17.687 10.54 16.8889V15.4118C11.6353 15.1017 12.6441 14.5161 13.4634 13.6978C14.5807 12.5818 15.2645 11.1138 15.4068 9.55476C15.4375 9.21865 15.1606 8.94444 14.8227 8.94444V3.44444C14.8227 2.43192 14.001 1.61111 12.9873 1.61111H12.8235C12.612 1.24579 12.2166 1 11.7636 1C11.0878 1 10.54 1.54721 10.54 2.22222C10.54 2.89724 11.0878 3.44444 11.7636 3.44444C12.2166 3.44444 12.612 3.19866 12.8235 2.83333H12.9873C13.3252 2.83333 13.5991 3.10694 13.5991 3.44444V8.94444H12.8893C12.5514 8.94444 12.2828 9.21999 12.2252 9.55262C12.1004 10.2734 11.7558 10.9438 11.231 11.468C10.561 12.1373 9.65218 12.5133 8.70454 12.5133C7.75695 12.5133 6.84815 12.1373 6.17809 11.468C5.65333 10.9438 5.30864 10.2734 5.18382 9.55262C5.12625 9.21999 4.85766 8.94444 4.51982 8.94444ZM13.3424 10.1667H14.0732C13.8446 11.1686 13.3373 12.0953 12.5981 12.8336C11.5655 13.865 10.1649 14.4444 8.70454 14.4444C7.24418 14.4444 5.84361 13.865 4.81098 12.8336C4.07183 12.0953 3.56451 11.1686 3.33584 10.1667H4.06666C4.28123 10.9789 4.70789 11.7279 5.31286 12.3322C6.21241 13.2307 7.43244 13.7355 8.70454 13.7355C9.97669 13.7355 11.1967 13.2307 12.0963 12.3322C12.7012 11.7279 13.1279 10.9789 13.3424 10.1667ZM22.1645 18.7222C22.5025 18.7222 22.7764 18.9958 22.7764 19.3333C22.7764 19.6708 22.5025 19.9444 22.1645 19.9444C21.8266 19.9444 21.5527 19.6708 21.5527 19.3333C21.5527 18.9958 21.8266 18.7222 22.1645 18.7222ZM9.31635 15.6667V16.8889C9.31635 17.2264 9.04244 17.5 8.70454 17.5C8.36663 17.5 8.09272 17.2264 8.09272 16.8889V15.6667H9.31635Z" fill="#539DF3"/>
                        </svg>
                        <span className="text-sm text-blue-500 group-hover:text-blue-600">Doctors</span>
                    </button> */}

                    // <button type="button" onClick={() => changeTab('appointments')} className="inline-flex flex-col items-center justify-center px-5">
                    //     <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500">
                    //         <path d="M8.66667 12H7C6.08083 12 5.33333 12.7475 5.33333 13.6667V15.3333C5.33333 16.2525 6.08083 17 7 17H8.66667C9.58583 17 10.3333 16.2525 10.3333 15.3333V13.6667C10.3333 12.7475 9.58583 12 8.66667 12ZM7 15.3333V13.6667H8.66667V15.3333H7ZM17.8333 3.66667H17V2.83333C17 2.37333 16.6275 2 16.1667 2C15.7058 2 15.3333 2.37333 15.3333 2.83333V3.66667H8.66667V2.83333C8.66667 2.37333 8.29417 2 7.83333 2C7.3725 2 7 2.37333 7 2.83333V3.66667H6.16667C3.86917 3.66667 2 5.53583 2 7.83333V17.8333C2 20.1308 3.86917 22 6.16667 22H17.8333C20.1308 22 22 20.1308 22 17.8333V7.83333C22 5.53583 20.1308 3.66667 17.8333 3.66667ZM6.16667 5.33333H17.8333C19.2117 5.33333 20.3333 6.455 20.3333 7.83333V8.66667H3.66667V7.83333C3.66667 6.455 4.78833 5.33333 6.16667 5.33333ZM17.8333 20.3333H6.16667C4.78833 20.3333 3.66667 19.2117 3.66667 17.8333V10.3333H20.3333V17.8333C20.3333 19.2117 19.2117 20.3333 17.8333 20.3333Z" fill="#539DF3"/>
                    //     </svg>
                    //     <span className="text-sm text-blue-500">Appointments</span>
                    // </button>

                    // <button type="button" onClick={() => changeTab('profile')} className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 hover:bg-gray-800 group">
                    //     <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    //         <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" fill="#539DF3"/>
                    //     </svg>
                    //     <span className="text-sm text-blue-500">Profile</span>
                    // </button>
