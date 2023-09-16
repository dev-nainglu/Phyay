import sexEducation from '/resources/assets/MicrosoftTeams-image (7).png'
import lgbtqIcon from '/resources/assets/MicrosoftTeams-image (8).png'
import youthSupportIcon from '/resources/assets/MicrosoftTeams-image (9).png'
import disorderIcon from '/resources/assets/MicrosoftTeams-image (10).png'
import depressIcon from '/resources/assets/MicrosoftTeams-image (12).png'
import workStressIcon from '/resources/assets/MicrosoftTeams-image (13).png'
import ancietyIcon from '/resources/assets/MicrosoftTeams-image (16).png'
import abuseIcon from '/resources/assets/MicrosoftTeams-image (17).png'

export default function CategoryItems(props){
    console.log(props.categories)

    const cards = [
        {
            id: 4,
            imgSrc: workStressIcon,
            categoryTitle: 'Sex Edu'
        },

        {
            id: 5,
            imgSrc: abuseIcon,
            categoryTitle: 'LGBTQ+'
        },

        {
            id: 6,
            imgSrc: ancietyIcon,
            categoryTitle: 'Youth Support'
        },

        {
            id: 8,
            imgSrc: disorderIcon,
            categoryTitle: 'Disorder'
        },

        {
            id: 7,
            imgSrc: depressIcon,
            categoryTitle: 'Depression'
        },

        {
            id: 3,
            imgSrc: youthSupportIcon,
            categoryTitle: 'Workplace'
        },

        {
            id: 2,
            imgSrc: sexEducation,
            categoryTitle: 'Anxiety'
        },

        {
            id: 1,
            imgSrc: lgbtqIcon,
            categoryTitle: 'Abuse'
        }
    ]

    return (
        <>
            <div className="grid grid-cols-4 gap-4 mt-2" key="">
                {cards.map((card, index) => (
                    <a key={index} href={"/category-doctors/" + card.id}>
                    <div  className="text-center">
                    <div className="rounded-full text-1xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: 20, backgroundColor: '#EBF1FF' }}>
                        <img
                        src={card.imgSrc}
                        alt="Category Image"
                        className="rounded-full w-full h-full object-cover"
                        />
                    </div>
                    <div className = "mb -3" style={{ marginTop: '10px' }}>
                    <h5 className="mb-3 text-sm font-normal text-gray-700" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '12px', lineHeight: '1.2' }}>{card.categoryTitle}</h5> {/* Add category title */}
                    </div>
                    </div>
                    </a>

            ))}
        </div>
        </>
    );
}
