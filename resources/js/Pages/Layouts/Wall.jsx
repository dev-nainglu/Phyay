import DoctorItems from '../Components/DoctorItems';
import CategoryItems from '../Components/CategoryItems';
import HorizontalCategoryItems from '../Components/HorizontalCategoryItems';
import consultIcon from '/resources/assets/MicrosoftTeams-image (19).png'

export default function Wall(props) {
  return (
    <>

        <form className='mt-[60px]'>
            <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="How are you feeling today?" required />
            </div>
        </form>
        <div className="pt-1"></div>
        <div className="mt-3 flex flex-row items-center bg-white h-30 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
            <div className="flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900">Consult With Top Specialists</h5>
                <p className="mb-3 text-sm font-normal text-gray-700">Consult with top doctors over video calls and recover your mental health.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                style={{backgroundColor: '#5185FE'}}
                >
                    Consult Now
                </a>
            </div>
            <img className="object-cover w-full rounded-t-lg h-20 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={consultIcon} alt="" />
        </div>

        <div className="pt-6" style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }}>
          <h2>Doctor Specialities</h2>
          <div className="pt-3"></div>
          <CategoryItems />
        </div>

        <div className="pt-3 flex justify-between">
          <h2 style={{fontSize: '18px', fontWeight: '600' }}>Top Doctors</h2>
          <a className="text-blue-800 text-underline text-sm" href="#">View All</a>
        </div>
        <div className="pt-3 overflow-x-scroll no-scrollbar">
            <HorizontalCategoryItems />
        </div>
        <div className="pt-3">
          <DoctorItems doctors={props.doctors.slice(0, 2)} />
        </div>
        <div className="pt-6 flex justify-between">
          <h2 style={{fontSize: '18px', fontWeight: '600' }}>Available Doctors</h2>
          <a className="text-blue-800 text-sm" href="#">View All </a>
        </div>
        <div className="pt-3">
          <DoctorItems doctors={props.doctors.slice(0, 4)} />
        </div>
        <div className="h-20"></div>
    </>
  );
}

