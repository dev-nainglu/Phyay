import profileSVG from '/resources/assets/Personal_info.svg'
import faqSVG from '/resources/assets/FAQ.svg'
import termSVG from '/resources/assets/Terms.svg'
import languageSVG from '/resources/assets/Language.svg'

export default function SettingItem(props){

    const cards = [

        {
            settingName: 'Personal Information',
            settingImage: profileSVG
        },

        {
            settingName: 'Language Settings',
            settingImage: languageSVG
        },

        {
            settingName: 'FAQ',
            settingImage: faqSVG
        },

        {
            settingName: 'Terms & Conditions',
            settingImage: termSVG
        }
    ]

    return (
        <>
            <div className="flex flex-col ...">
            {cards.map((card, index) => (
                <ul key={index} role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                    <div className="rounded-full w-10 h-10" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: 10, backgroundColor: '#EBF1FF', borderRadius: 10}}>
                        <img
                        src={card.settingImage}
                        alt="Category Image"
                        className="rounded-full  object-cover"
                        />
                    </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium dark:text-900 truncate">
                               {card.settingName}
                            </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <button type="button" className="text-white font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1962 8.23334L9.37121 4.40834C9.21507 4.25313 9.00386 4.16602 8.78371 4.16602C8.56355 4.16602 8.35234 4.25313 8.19621 4.40834C8.1181 4.48581 8.0561 4.57798 8.0138 4.67953C7.97149 4.78108 7.94971 4.89 7.94971 5.00001C7.94971 5.11002 7.97149 5.21894 8.0138 5.32049C8.0561 5.42204 8.1181 5.51421 8.19621 5.59168L12.0295 9.40834C12.1076 9.48581 12.1696 9.57798 12.2119 9.67953C12.2543 9.78108 12.276 9.89 12.276 10C12.276 10.11 12.2543 10.2189 12.2119 10.3205C12.1696 10.422 12.1076 10.5142 12.0295 10.5917L8.19621 14.4083C8.03929 14.5642 7.95069 14.7759 7.94991 14.9971C7.94913 15.2182 8.03622 15.4306 8.19204 15.5875C8.34785 15.7444 8.55962 15.833 8.78076 15.8338C9.0019 15.8346 9.21429 15.7475 9.37121 15.5917L13.1962 11.7667C13.6644 11.2979 13.9273 10.6625 13.9273 10C13.9273 9.33751 13.6644 8.70209 13.1962 8.23334Z" fill="#5185FE"/>
                        </svg>
                            <span className="sr-only">Icon description</span>
                    </button>
                        </div>
                    </div>
                    <hr className="mt-1 my-0.5 border-t border-gray-300" style={index === cards.length - 1 ? { display: 'none' } : {}} />
                </li>
                </ul>
            ))}
            </div>
        </>
    )
}
