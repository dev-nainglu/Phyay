import React from 'react';

export default function DoctorItems(props) {

  const cards = [
    {
      name: 'Soe Thura',
      numberOfPatients: '(320)',
      rating: '4.5', 
      position: 'Doctor',
      numberOfExperience: '12 Years',
      fees: '3,000 MMK'   // Default rating label
    },
    {
        name: 'Naing Lu',
        numberOfPatients: '(320)',
        rating: '4.5', 
        position: 'Therapist',
        numberOfExperience: '20 Years',
        fees: '3,000 MMK'        // Default rating label
    },
    // Add more card data as needed
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-2" key="">
        {cards.map((card, index) => (
          <div
            key={index} // Use a unique key for each item in the map
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
              <img
                className="rounded-t-lg"
                src="https://i.pravatar.cc/200"
                alt=""
                style={{ width: '100%'}}
              />
            <div className="p-5">
              <div className="flex items-center mb-2">
                <h5 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '16px' }}>
                        {card.name}
                </h5>
                <div className="ml-2 text-yellow-400">
                  {/* Star button */}
                  <button className="text-yellow-400">
                    {/* Fully Filled Star SVG icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a.75.75 0 01.678.418l1.427 2.895 3.218.47a.75.75 0 01.416 1.285l-2.324 2.262.547 3.186a.75.75 0 01-.776.828.75.75 0 01-.392-.107L10 13.347l-2.549 1.342a.75.75 0 01-.393.107.75.75 0 01-.377-.107.75.75 0 01-.393-.927l.547-3.186-2.324-2.262a.75.75 0 01-.36-.819l.547-3.187L2.679 6.783a.75.75 0 01-.098-.834.75.75 0 01.692-.437l3.218-.469 1.427-2.895a.75.75 0 01.678-.418z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                </div>
                <span className="ml-1 text-gray-600 dark:text-gray-400" style={{ fontSize: '12px' }}>
                  {/* Default rating label */}
                  {card.rating}
                </span>
                <span className="ml-1 text-gray-600 dark:text-gray-400" style={{ fontSize: '12px' }}>
                  {/* Default rating label */}
                  {card.numberOfPatients}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'stretch' }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 mr-1 text-gray-600 dark:text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                        />
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 8a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" style={{ fontSize: '12px' }}>
                        {card.position}
                    </p>
                    </div>
              <div className="flex items-center">
              <div className="flex">
  <div className="flex flex-col mr-3">
            <span className="text-gray-600 dark:text-gray-400" style={{ fontSize: '12px' }}>
            {/* Default name label */}
            Experience
            </span>
            <span className="text-gray-800 dark:text-gray-300 font-medium" style={{ fontSize: '12px', fontWeight: '700' }}>
            {card.numberOfExperience}
            </span>
        </div>

        <div className="flex flex-col">
            <span className="text-gray-600 dark:text-gray-400" style={{ fontSize: '12px'}}>
            {/* Default label */}
            Fees
            </span>
            <span className="text-gray-800 dark:text-gray-300 font-medium" style={{ fontSize: '12px', fontWeight: '700' }}>
            {card.fees}
            </span>
        </div>
            </div>
              </div>
              <div className="mt-3">
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Make Appointment
                  </a>
                </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
