import React from 'react';

// Reusable component for a flex row with two items
const FlexRow = ({ leftContent, rightContent }) => (
    <div className="flex justify-between">
      <div className="text-black w-40 h-10 m-2 flex items-center">{leftContent}</div>
      <div className="text-black w-40 h-10 m-2 flex items-center justify-end">{rightContent}</div>
    </div>
  );

  const AppointmentConfirmDetailItem = () => (
    <>
        <div className="pt-6 items-start">
    Patient Info
        </div>
        <div className="flex flex-col items-center p-1">
            <FlexRow leftContent="Full Name" rightContent="Naing Luu" />
            <FlexRow leftContent="Gender" rightContent="Male" />
            <FlexRow leftContent="Age" rightContent="28" />
        </div>

        <div className="pt-6 items-start">
             Payment Detail
        </div>

        <div className="flex flex-col items-center p-1">
            <FlexRow leftContent="Date" rightContent="December 14, 2023" />
            <FlexRow leftContent="Time" rightContent="01:20 - 2:30" />
            <FlexRow leftContent="Fees" rightContent="5000 MMK" />
        </div>

        <div class="flex flex-nowrap">
            <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Cancel</button>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Check Out</button>
        </div>
    </>
  );

  export default AppointmentConfirmDetailItem;