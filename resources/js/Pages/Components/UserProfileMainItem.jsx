import waveIcon from '/resources/assets/MicrosoftTeams-image (20).png'
import arrowIcon from '/resources/assets/Edit_profile.svg'

export default function UserProfileMainItem(props){

    return (
        <>
        <ul className="mt-3">
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={waveIcon} alt="Neil image" />
                        </div>
                            <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium dark:text-900 truncate" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '16px' }}>
                                   Naing Lu
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                                    +959 787 562 456
                             </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <button
                            type="button"
                            className="w-87 h-35 text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                        >
                            <span className="ml-2 mt">Edit</span>
                            <span className="ml-2 mt">
                                <img src={arrowIcon} alt="Edit" />
                            </span>
                    </button>
            </div>
             </div>
        </li>
        </ul>
        </>
    );
}
