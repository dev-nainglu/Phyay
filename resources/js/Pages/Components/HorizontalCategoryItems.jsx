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
        },
        {
            categoryTitle: 'Youth Support'
        },
        {
            categoryTitle: 'Sex Edu'
        },

    ]

    return (
        <>
            <div className="flex flex-row" key="">
                {cards.map((card, index) => (
                    <button type="button" class="w-md text-blue-700 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-sm rounded-lg text-sm px-5 mr-2 mb-2">
                        {card.categoryTitle}
                    </button>
            ))}
        </div>
        </>
    );
}

