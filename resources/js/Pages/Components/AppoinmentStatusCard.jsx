import React from "react";

// const AppoinmentStatusCard = () => {
//     <>
// <div>
// <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//     <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" />
//     <div class="flex flex-col justify-between p-4 leading-normal">
//         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//     </div>
// </a>
// </div>
//     </>
// };

// export default AppoinmentStatusCard;

export default function AppoinmentStatusCard(props) {

    const cards = [
      {
        name: 'Dr. Soe Thura',
        position: 'Therapist',
        numberOfExperience: '12 Years'
      }
      // Add more card data as needed
    ];

    return (
      <>
              <div className="grid grid-row-1 gap-2" key="">
              {cards.map((card, index) => (
                    <div key={index} className="bg-white h-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                      <div className="flex flex-row items-center">
                      <img src="https://i.pravatar.cc/200" alt="Your Image" className="pl-2 w-1/2 h-15" style={{borderRadius: 14, height: 100, width: 100}} />
                      <div className="justify-between p-4 leading-normal">
                  <div className="justify-between leading-normal flex items-center">
                      {/* Card Title */}
                      <h5 className="text-md font-bold tracking-tight text-gray-900">{card.name}</h5>
                      {/* Rounded Chip View */}
                      <div className="bg-yellow-200 px-2 py-1 rounded-full ml-2 text-xs text-yellow-800">
                          Upcoming
                      </div>
                  </div>
                          <div className="pt-3 my-1 flex items-center">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_223_1155)">
                                <path d="M9.5 2H8.95C8.83395 1.43571 8.52691 0.928673 8.08063 0.564359C7.63434 0.200045 7.0761 0.000727262 6.5 0L5.5 0C4.9239 0.000727262 4.36566 0.200045 3.91937 0.564359C3.47309 0.928673 3.16605 1.43571 3.05 2H2.5C1.8372 2.00079 1.20178 2.26444 0.73311 2.73311C0.264441 3.20178 0.000793929 3.8372 0 4.5L0 9.5C0.000793929 10.1628 0.264441 10.7982 0.73311 11.2669C1.20178 11.7356 1.8372 11.9992 2.5 12H9.5C10.1628 11.9992 10.7982 11.7356 11.2669 11.2669C11.7356 10.7982 11.9992 10.1628 12 9.5V4.5C11.9992 3.8372 11.7356 3.20178 11.2669 2.73311C10.7982 2.26444 10.1628 2.00079 9.5 2ZM5.5 1H6.5C6.80913 1.00128 7.11031 1.09804 7.36235 1.27704C7.61438 1.45605 7.80496 1.70855 7.908 2H4.092C4.19504 1.70855 4.38562 1.45605 4.63765 1.27704C4.88969 1.09804 5.19087 1.00128 5.5 1ZM2.5 3H9.5C9.89782 3 10.2794 3.15804 10.5607 3.43934C10.842 3.72064 11 4.10218 11 4.5V6H1V4.5C1 4.10218 1.15804 3.72064 1.43934 3.43934C1.72064 3.15804 2.10218 3 2.5 3ZM9.5 11H2.5C2.10218 11 1.72064 10.842 1.43934 10.5607C1.15804 10.2794 1 9.89782 1 9.5V7H5.5V7.5C5.5 7.63261 5.55268 7.75979 5.64645 7.85355C5.74021 7.94732 5.86739 8 6 8C6.13261 8 6.25979 7.94732 6.35355 7.85355C6.44732 7.75979 6.5 7.63261 6.5 7.5V7H11V9.5C11 9.89782 10.842 10.2794 10.5607 10.5607C10.2794 10.842 9.89782 11 9.5 11Z" fill="#3F3E3E"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_223_1155">
                                <rect width="12" height="12" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                              <p className="font-normal text-gray-700 dark:text-gray-400" style={{ fontSize: '12px', marginLeft: '8px' }}>
                                  {card.position}

                              </p>
                          </div>
                          <div className="pt-3  my-1 flex items-center">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.0199 8.8242C5.8333 8.7216 5.6077 8.7234 5.4259 8.832L3.1771 10.152L4.0579 6.726C4.5829 7.026 5.1895 7.2 5.8363 7.2C6.4831 7.2 7.0897 7.026 7.6153 6.726L8.5087 10.2012L6.0199 8.8242ZM5.8363 1.2C7.1599 1.2 8.2363 2.2764 8.2363 3.6C8.2363 4.9236 7.1599 6 5.8363 6C4.5127 6 3.4363 4.9236 3.4363 3.6C3.4363 2.2764 4.5127 1.2 5.8363 1.2ZM10.0177 11.2506L8.6323 5.8632C9.1339 5.244 9.4363 4.4574 9.4363 3.6C9.4363 1.6146 7.8217 0 5.8363 0C3.8515 0 2.2363 1.6146 2.2363 3.6C2.2363 4.4574 2.5387 5.244 3.0403 5.8632L1.6555 11.2506C1.5949 11.4858 1.6819 11.7336 1.8757 11.8794C2.0689 12.0252 2.3317 12.0384 2.5399 11.9172L5.7379 10.0398L9.1459 11.925C9.2365 11.9754 9.3367 12 9.4363 12C9.5665 12 9.6961 11.958 9.8041 11.8746C9.9931 11.7282 10.0777 11.4828 10.0177 11.2506Z" fill="#3F3E3E"/>
                            </svg>
                              <p className="font-normal text-gray-700 dark:text-gray-400" style={{ fontSize: '12px', marginLeft: '8px' }}>
                                  {card.numberOfExperience}
                              </p>
                          </div>
                      </div>
                      </div>
                      <div>
                      </div>
                      </div>
              ))}
              </div>




      </>
    );
  }

