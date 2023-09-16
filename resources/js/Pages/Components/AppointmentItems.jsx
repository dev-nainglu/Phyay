import React from 'react';

export default function AppointmentItems(props) {

  const cards = [
    {
      name: 'Dr. Soe Thura',
      numberOfPatients: '(320)',
      rating: '4.5',
      date: 'September 17, 2023',
      time: '01:00 PM - 02:00 PM',
      numberOfExperience: '12 Years',
      fees: '3,000 MMK'   // Default rating label
    },

    {
        name: 'Dr. Naing Lu',
        numberOfPatients: '(320)',
        rating: '4.5',
        date: 'September 17, 2023',
        time: '01:00 PM - 02:00 PM',
        numberOfExperience: '12 Years',
        fees: '3,000 MMK'   // Default rating label
      }
    // Add more card data as needed
  ];

  return (
    <>
            <div className="grid grid-row-1 gap-2" key="">
            {cards.map((card, index) => (
                 <a href={`/appointments/${index}`} key={index} className="bg-white h-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                    <div className="flex flex-row items-center">
                    <img src="https://i.pravatar.cc/200" alt="Your Image" className="pl-2 w-1/2 h-15" style={{borderRadius: 14, height: 100, width: 100}} />
                    <div className="justify-between p-4 leading-normal">
                <div className="justify-between leading-normal flex items-center">
                    {/* Card Title */}
                    <h5 className="text-md font-bold tracking-tight text-gray-900" style={{ whiteSpace: 'nowrap' }}>{card.name}</h5>
                    {/* Rounded Chip View */}
                    <div className="bg-yellow-200 px-2 py-1 rounded-full ml-2 text-xs text-yellow-800">
                        Upcoming
                    </div>
                </div>
                        {/* <p className="text-sm tracking-tight text-gray-400">Sleeping Disorder</p> */}
                        <div className="pt-3 my-1 flex items-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6667 1.33333H12V0.666667C12 0.298667 11.702 0 11.3333 0C10.9647 0 10.6667 0.298667 10.6667 0.666667V1.33333H5.33333V0.666667C5.33333 0.298667 5.03533 0 4.66667 0C4.298 0 4 0.298667 4 0.666667V1.33333H3.33333C1.49533 1.33333 0 2.82867 0 4.66667V12.6667C0 14.5047 1.49533 16 3.33333 16H12.6667C14.5047 16 16 14.5047 16 12.6667V4.66667C16 2.82867 14.5047 1.33333 12.6667 1.33333ZM3.33333 2.66667H12.6667C13.7693 2.66667 14.6667 3.564 14.6667 4.66667V5.33333H1.33333V4.66667C1.33333 3.564 2.23067 2.66667 3.33333 2.66667ZM12.6667 14.6667H3.33333C2.23067 14.6667 1.33333 13.7693 1.33333 12.6667V6.66667H14.6667V12.6667C14.6667 13.7693 13.7693 14.6667 12.6667 14.6667ZM12.6667 9.33333C12.6667 9.70133 12.3687 10 12 10H4C3.63133 10 3.33333 9.70133 3.33333 9.33333C3.33333 8.96533 3.63133 8.66667 4 8.66667H12C12.3687 8.66667 12.6667 8.96533 12.6667 9.33333ZM8 12C8 12.368 7.702 12.6667 7.33333 12.6667H4C3.63133 12.6667 3.33333 12.368 3.33333 12C3.33333 11.632 3.63133 11.3333 4 11.3333H7.33333C7.702 11.3333 8 11.632 8 12Z" fill="#3F3E3E"/>
                            </svg>
                            <p className="font-normal text-gray-700 dark:text-gray-400" style={{ fontSize: '12px', marginLeft: '8px' }}>
                                {card.date}
                            </p>
                        </div>
                        <div className="pt-3 my-1 flex items-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_26_346)">
                                <path d="M8 16C3.58867 16 0 12.4113 0 8C0 3.58867 3.58867 0 8 0C12.4113 0 16 3.58867 16 8C16 12.4113 12.4113 16 8 16ZM8 1.33333C4.324 1.33333 1.33333 4.324 1.33333 8C1.33333 11.676 4.324 14.6667 8 14.6667C11.676 14.6667 14.6667 11.676 14.6667 8C14.6667 4.324 11.676 1.33333 8 1.33333ZM11.3333 8C11.3333 7.63133 11.0353 7.33333 10.6667 7.33333H8.66667V4C8.66667 3.63133 8.368 3.33333 8 3.33333C7.632 3.33333 7.33333 3.63133 7.33333 4V8C7.33333 8.36867 7.632 8.66667 8 8.66667H10.6667C11.0353 8.66667 11.3333 8.36867 11.3333 8Z" fill="#3F3E3E"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_26_346">
                                <rect width="16" height="16" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <p className="font-normal text-gray-700 dark:text-gray-400" style={{ fontSize: '12px', marginLeft: '8px' }}>
                                {card.time}
                            </p>
                        </div>
                    </div>
                    </div>
                    <div>
                    </div>
                     </a>
            ))}
            </div>




    </>
  );
}

{/* <a
                                href={"/appointments/" + index}
                                className="px-3 py-2 text-center text-sm font-medium rounded-lg hover:bg-blue-800 hover:text-white-700"
                                style={{ color:'#5185FE', border: '2px solid #5185FE', textAlign: 'center' }}
                                >
                                View Appointment
                            </a> */}