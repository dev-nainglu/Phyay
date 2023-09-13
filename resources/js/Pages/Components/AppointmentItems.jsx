import React from 'react';

export default function AppointmentItems(props) {

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
            <div className="mt-10 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="grid grid-cols-3 -mb-px">
                    <li className="mr-2">
                        <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Upcoming</a>
                    </li>
                    <li className="mr-2">
                        <a href="#" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Completed</a>
                    </li>
                    <li className="mr-2">
                        <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Cancelled</a>
                    </li>
                </ul>
            </div>
            <div className="grid grid-row-1 gap-2" key="">
            {cards.map((card, index) => (
                <div key={index} className="mt-3 flex flex-row items-center bg-white h-30 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
                <img className="object-cover w-full rounded-t-lg h-20 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                <div className="flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900">Consult With Top Specialists</h5>
                    <p className="mb-3 text-sm font-normal text-gray-700">Consult with top doctors over video calls and recover your mental health.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Consult Now
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
            ))}
            </div>




    </>
  );
}
