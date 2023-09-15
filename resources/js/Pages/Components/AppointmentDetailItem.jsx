
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
    <div className="flex flex-col pl-1">
            <div>Reason</div>
            <div className="pt-2">
                I have been experiencing persistent feelings of sadness, hopelessness, and anxiety for several months, which are affecting my daily life, relationships, and overall well-being. I believe therapy could help me better understand and manage these emotions and provide me with the tools to improve my mental health.
            </div>
            </div>
  
  </>
);

export default AppointmentDetails;
