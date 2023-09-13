import DoctorItems from '../Components/DoctorItems';
import CategoryItems from '../Components/CategoryItems';
import HorizontalCategoryItems from '../Components/HorizontalCategoryItems';

export default function Wall(props) {
  return (
    <>

        <form>
            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="How are you feeling today?" required />
            </div>
        </form>

        <a href="#" class="mt-3 flex flex-row items-center bg-white h-30 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
            <div class="flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">Consult With Top Specialists</h5>
                <p class="mb-3 text-sm font-normal text-gray-700">Consult with top doctors over video calls and recover your mental health.</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Consult Now
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
            <img class="object-cover w-full rounded-t-lg h-20 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" />
        </a>

        <div className="mt-5 " style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }}>
          <h2>Doctor Specialities</h2>
          <CategoryItems />
        </div>

        <div className="mt-6 flex justify-between">
          <h2 style={{fontSize: '18px', fontWeight: '600' }}>Top Doctors</h2>
          <a className="text-blue-800 text-underline text-sm" href="#">View All</a>
        </div>
        <div class="overflow-x-scroll ...">
            <HorizontalCategoryItems />
        </div>
        <DoctorItems />

        <div className="mt-6 flex justify-between">
          <h2 style={{fontSize: '18px', fontWeight: '600' }}>Available Doctors</h2>
          <a className="text-blue-800 text-sm" href="#">View All</a>
        </div>
        <DoctorItems />
        <div className="h-20"></div>
    </>
  );
}

