export default function HorizontalCategoryItems(props){

    const cards = [

        {
            categoryTitle: 'LGBTQ+'
        },


        {
            categoryTitle: 'Disorder'
        },

        {
            categoryTitle: 'Depression'
        },

        {
            categoryTitle: 'Workplace'
        },

        {
            categoryTitle: 'Anxiety'
        },

        {
            categoryTitle: 'Abuse'
        }

    ]

    return (
        <>
            <div className="flex flex-row" key="">
                {cards.map((card, index) => (

                    <a key={index} href={"/render?type=category&value=" + card.categoryTitle} type="button" className="w-md text-blue-700 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-sm rounded-lg py-2 text-sm px-5 mr-2 mb-2">
                        {card.categoryTitle}
                    </a>
            ))}
        </div>
        </>
    );
}
