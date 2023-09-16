import Title from './Components/Title'
import DoctorList from './Layouts/DoctorList'

export default function ContainerLayout({children}){

    const queryParameters = new URLSearchParams(window.location.search)
    const type = queryParameters.get("type")
    const value = queryParameters.get("value")
    const title = type =='category' ? value +"'s Doctors" : type

    function redirectBack(){
        window.history.back();
    }

    return(
        <>
        <div id="sticky-banner" tabIndex="-1" className="fixed top-0 left-0 z-50 flex w-full p-3 bg:light">
            <a onClick={() => redirectBack()} className="inline-flex items-center p-1 rounded-full text-black-500 bg-white-500 hover:bg-indigo-50 border-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
                        </path>
                    </svg>
                </a>
                <Title title={title} />

        </div>
        <main className='mx-4'>
            {type == 'category' && <DoctorList show="noshow" />}
            {children}
        </main>
        </>
    )
}
