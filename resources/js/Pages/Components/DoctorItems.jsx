import React from 'react';
import ratingIcon from '/resources/assets/Rating.svg'
import jobIcon from '/resources/assets/Job.svg'

export default function DoctorItems(props) {

  let doctors = props.doctors;

  return (
    <>
      <div className="grid grid-cols-2 gap-2" key="">
        {doctors.map((card, index) => (
          <div
            key={index} // Use a unique key for each item in the map
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
          >
              <img
                className="rounded-t-lg"
                src={ card.image_url }
                alt=""
                style={{ width: '100%', height: '95px', objectFit: 'cover' }}
              />
            <div className="p-5">
            <div className="flex items-center mb-2">
              <h5 className="text-1xl font-bold tracking-tight text-gray-900 flex-grow" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '16px' }}>
                {card.name}
              </h5>
              <div className="text-yellow-400 ml-2">
                {/* Star button */}
                <button className="text-yellow-400">
                  {/* Fully Filled Star SVG icon */}
                  <img src={ratingIcon} alt="Your Image" width="12.5" height="12.5" />
                </button>
              </div>
              <span className="text-gray-600 dark:text-gray-400 ml-1" style={{ fontSize: '12px' }}>
                {/* Default rating label */}
                {card.rating} 2.5
              </span>
              <span className="text-gray-600 dark:text-gray-400 ml-1" style={{ fontSize: '12px' }}>
                {/* Default rating label */}
                (12)
              </span>
            </div>
            <div className="flex items-center">
              <img src={jobIcon} alt="Your Image" width="12.5" height="12.5" />
              <p className="font-normal text-gray-700 dark:text-gray-400" style={{ fontSize: '12px', marginLeft: '8px' }}>
                {/* {card.position} */} Doctor
              </p>
            </div>
            <div className="flex items-center">
  <div className="flex flex-col mr-3">
    <span className="text-gray-600 dark:text-gray-400" style={{ fontSize: '12px' }}>
      {/* Default name label */}
      Experience
    </span>
    <span className="text-gray-800 dark:text-gray-300 font-medium" style={{ fontSize: '12px', fontWeight: '700' }}>
      {card.experience} Years
    </span>
  </div>
  <div className="flex flex-col">
    <span className="text-gray-600 dark:text-gray-400" style={{ fontSize: '12px' }}>
      {/* Default label */}
      Fees
    </span>
    <span style={{ whiteSpace: 'nowrap' }} className="text-gray-800 dark:text-gray-300 font-medium text-xs md:text-sm md:font-medium">
      <b>{card.fee} MMK</b>
    </span>
  </div>
</div>

            <div className="pt-5">
            <a
                href={"/doctors/" + card.id}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                style={{ width: '120px', height: '35px', backgroundColor: '#5185FE', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                Book
              </a>
            </div>
          </div>
          </div>
        ))}
      </div>
    </>
  );
}
