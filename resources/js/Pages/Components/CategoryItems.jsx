import sexEducation from '/resources/assets/MicrosoftTeams-image (7).png'
import lgbtqIcon from '/resources/assets/MicrosoftTeams-image (8).png'
import youthSupportIcon from '/resources/assets/MicrosoftTeams-image (9).png'
import disorderIcon from '/resources/assets/MicrosoftTeams-image (10).png'
import depressIcon from '/resources/assets/MicrosoftTeams-image (12).png'
import workStressIcon from '/resources/assets/MicrosoftTeams-image (13).png'
import ancietyIcon from '/resources/assets/MicrosoftTeams-image (16).png'
import abuseIcon from '/resources/assets/MicrosoftTeams-image (17).png'

export default function CategoryItems(props){

    const cards = [
        {
            imgSrc: sexEducation,
            categoryTitle: 'Sex Edu'
        },

        {
            imgSrc: lgbtqIcon,
            categoryTitle: 'LGBTQ+'
        },

        {
            imgSrc: youthSupportIcon,
            categoryTitle: 'Youth Support'
        },

        {
            imgSrc: disorderIcon,
            categoryTitle: 'Disorder'
        },

        {
            imgSrc: depressIcon,
            categoryTitle: 'Depression'
        },

        {
            imgSrc: workStressIcon,
            categoryTitle: 'Workplace'
        },

        {
            imgSrc: ancietyIcon,
            categoryTitle: 'Anxiety'
        },

        {
            imgSrc: abuseIcon,
            categoryTitle: 'Abuse'
        }
    ]

    return (
        <>
            <div className="grid grid-cols-4 gap-4 mt-2" key="">
                {cards.map((card, index) => (
                    <a key={index} href={"/render?type=category&value=" + card.categoryTitle}>
                    <div  className="text-center">
                    <div className="rounded-full text-1xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: 20, backgroundColor: '#EBF1FF' }}>
                        <img
                        src={card.imgSrc}
                        alt="Category Image"
                        className="rounded-full w-full h-full object-cover"
                        />
                    </div>
                    <div className = "mb -2">
                    <h5 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-black" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '12px', lineHeight: '1.2' }}>{card.categoryTitle}</h5> {/* Add category title */}
                    </div>
                    </div>
                    </a>

            ))}
        </div>
        </>
    );
}
