import React from 'react';

// Reusable component for a flex row with two items
const FlexRow = ({ leftContent, rightContent }) => (
    <div className="flex justify-between">
      <div className="text-black w-40 h-10 m-2 flex items-center pl-5">{leftContent}</div>
      <div className="text-black w-40 h-10 m-2 flex items-center ml-5">{rightContent}</div>
    </div>
  );

  const AppointmentConfirmDetailItem = () => (
    <>
    <div className="mt-6"></div>
    <div className="bg-white h-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100">
    <div className="pt-6 pl-3 items-start">
    Patient Info
        </div>
        <div className="flex flex-col items-center p-1">
            <FlexRow leftContent="Full Name" rightContent="Naing Luu" />
            <FlexRow leftContent="Gender" rightContent="Male" />
            <FlexRow leftContent="Age" rightContent="28" />
        </div>

        <div className="pt-6 pl-3 items-start">
             Payment Detail
        </div>

        <div className="flex flex-col items-center p-1">
            <FlexRow leftContent="Date" rightContent="December 14, 2023" />
            <FlexRow leftContent="Time" rightContent="01:20 - 2:30" />
            <FlexRow leftContent="Fees" rightContent="5000 MMK" />
        </div>
    </div>
    <div class="mt-6 flex flex-nowrap">
            <button type="button" class="w-1/2 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Cancel</button>
            <button type="button" class="w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Check Out</button>
        </div>
    </>
  );

  export default AppointmentConfirmDetailItem;