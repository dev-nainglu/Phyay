export default function HorizontalCategoryItems(props){

    const cards = [

        {
            id: 5,
            categoryTitle: 'LGBTQ+'
        },


        {
            id: 8,
            categoryTitle: 'Disorder'
        },

        {
            id: 7,
            categoryTitle: 'Depression'
        },

        {
            id: 3,
            categoryTitle: 'Workplace'
        },

        {
            id: 2,
            categoryTitle: 'Anxiety'
        },

        {
            id: 1,
            categoryTitle: 'Abuse'
        }

    ]

    return (
        <>
            <div className="flex flex-row" key="">
                {cards.map((card, index) => (

                    <a key={index} href={"/category-doctors/" + card.id} type="button" className="w-md text-blue-700 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-sm rounded-lg py-2 text-sm px-5 mr-2 mb-2"
                    style={{ backgroundColor: '#EBF1FF', color: 'black', borderColor: '#8EB0FF'}}
                    >
                        {card.categoryTitle}
                    </a>
            ))}
        </div>
        </>
    );
}

