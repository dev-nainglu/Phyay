import waveIcon from '/resources/assets/MicrosoftTeams-image (20).png'
import arrowIcon from '/resources/assets/Edit_profile.svg'

export default function UserProfileMainItem(props){

    return (
        <>
        <ul className="mt-[50px]">
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src={waveIcon} alt="Neil image" />
                        </div>
                            <div class="flex-1 min-w-0">
                     <p class="text-sm font-medium dark:text-900 truncate" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '16px' }}>
                                   Naing Lu
                        </p>
                        <p class="text-sm text-gray-500 truncate">
                                    +959 787 562 456
                             </p>
                         </div>
                         <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <button type="button" class="w-70 h-10 text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 ">
                <span class="ml-2 mt">Edit</span>  
                <span class="ml-2 mt"><img src= {arrowIcon} alt="Edit" /></span>  
                </button>
            </div>
             </div>
        </li>
        </ul>
        </>
    );
}