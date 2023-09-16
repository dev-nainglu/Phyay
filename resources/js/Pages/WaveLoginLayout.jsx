
import { useState } from "react";
import { router } from '@inertiajs/react';
import consultIcon from '/resources/assets/MicrosoftTeams-image (19).png'

export default function WaveLoginLayout(props){

    const WaveSDK = WaveJsSDK;
    const [userInfo, setUserInfo] = useState({})

    WaveSDK.userModule.getUserInformation().then((success) => {
        const data = success.response.data
        setUserInfo(data)
        router.post('/wavelogin', data)
    }).catch((err)=>{
        router.post('/wavelogin', {
            "dob": "1999-04-28",
            "name": "Naing Lu",
            "nrc": "12/AhSaNa(N)194052",
            "msisdn": "9796279069",
            "gender": "Male", 
            "kyc_status": "LEVEL_2",
        })
    });

    return(
        <>
        <div id="sticky-banner" tabIndex="-1" className="fixed top-0 left-0 z-50 justify-between w-full p-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center mx-auto">
                <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                    <span>Welcome, <a href="#" className="inline font-medium text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline">{userInfo.name}!</a></span>
                </p>
            </div>
        </div>
        <hr className="h-px my-2 bg-gray-300 border-0"></hr>
            <main className="mx-3">
                <div className="mt-[80px]">
                    <div className="pt-1"></div>
                    <div className="mt-3 flex flex-row items-center bg-white h-30 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
                        <div className="flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900">
                                Login with Wave Account
                            </h5>
                            <p className="mb-3 text-sm font-normal text-gray-700">Consult with top doctors over video calls and recover your mental health.</p>
                            <div className="mt-10"></div>
                        </div>
                        <img className="object-cover w-full rounded-t-lg h-20 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={consultIcon} alt="" />
                    </div>
                </div>
            </main>
        </>
    )
}
