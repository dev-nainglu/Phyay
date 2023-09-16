
import React from 'react';

// Reusable component for a flex row with two items
const FlexRow = ({ leftContent, rightContent }) => (
  <div className="flex justify-between">
    <div className="text-black w-40 h-10 m-2 flex items-center">{leftContent}</div>
    <div className="text-black w-40 h-10 m-2 flex items-center justify-end">{rightContent}</div>
  </div>
);

const AppointmentDetails = () => (
  <>
  <div className="pt-6 items-start">
   Scheduled Appointment
    </div>
    
    <div className="flex flex-col items-center p-1">
      <FlexRow leftContent="Time" rightContent="01:20 - 2:30" />
      <FlexRow leftContent="Patient Info" />
      <FlexRow leftContent="Full Name" rightContent="Naing Lu" />
      <FlexRow leftContent="Gender" rightContent="Male" />
      <FlexRow leftContent="Age" rightContent="28" />
    </div>
    <div className="text-black">Reason</div>
        <div className="pt-2">
          I have been experiencing persistent feelings of sadness, hopelessness, and anxiety for several months, which are affecting my daily life, relationships, and overall well-being. I believe therapy could help me better understand and manage these emotions and provide me with the tools to improve my mental health.
        </div>
        <div className="text-black mt-3"><b>Zoom Link</b></div>
        <div className="mt-3 text-black">Copy and paste Zoon link in your browser to call with doctor.</div>
        <form className="mt-3">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    {/* <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg> */}
                </div>
                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  style={{ borderColor: '#5185FE', borderRadius: 17 }}/>
                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 over:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ borderColor: '#5185FE', borderRadius: 17 }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 mr-2"
                >
                  <path
                    d="M6 12C5.45 12 4.97917 11.8042 4.5875 11.4125C4.19583 11.0208 4 10.55 4 10V2C4 1.45 4.19583 0.979167 4.5875 0.5875C4.97917 0.195833 5.45 0 6 0H14C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2V10C16 10.55 15.8042 11.0208 15.4125 11.4125C15.0208 11.8042 14.55 12 14 12H6ZM6 2V10H14V2H6ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V4.525H2V14H11.475V16H2Z"
                    fill="#5185FE"
                  />
                </svg>
                </button>
            </div>
        </form>
  </>
);

export default AppointmentDetails;
