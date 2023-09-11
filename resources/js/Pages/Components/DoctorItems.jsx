export default function DoctorItems(props){

    const cards = ['a', 'b', 'c', 'd']

    return (
        <>
            <div className="grid grid-row-4 gap-2" key="">
                {
                    cards.map(card => (
                        <ul className="block max-w p-3 bg-white border border-gray-100 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <li>
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/400" alt="Neil image" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Neil Sims
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        email@flowbite.com
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        $320
                                    </div>
                                </div>
                            </li>
                        </ul>
                    ))
                }
            </div>
        </>
    );
}
