
import ContainerLayout from './ContainerLayout';
import { useState } from "react";
import { useForm } from '@inertiajs/inertia-react';

export default function WaveLoginLayout(props){

    const [activeTab, setValue] = useState('home')
    const WaveSDK = WaveJsSDK;
    const [userInfo, setUserInfo] = useState({})

    // print csrf token
    // console.log('sssss',props)

    WaveSDK.userModule.getUserInformation().then((success) => {
        const data = success.response.data
        setUserInfo(data)

        axios.post('/wavelogin', data).then((res)=>{
            console.log(res)
            return <Redirect to="/" />
        }).catch((err)=>{
            console.log(err.response.error)
        });



    }).catch((err)=>{
        console.log(err.response.error)
        const form = useForm(userInfo)
        form.post('/wavelogin')
    });

    return(
        <>
        <ContainerLayout>
            <div className="pt-10"></div>
            <div className="flex flex-col items-center justify-center">
                <div className="w-full max-w-md">
                    <div className="flex flex-col break-words bg-white border-2 rounded shadow-md">
                        <div className="font-semibold bg-gray-200 text-gray-700 py-3 px-6 mb-0">
                            Login with Wave
                        </div>
                        <div className="w-full p-6">
                            Logging in with Wave is the easiest way to use our services.
                            <form action="/wavelogin" method='POST' id="waveLoginForm">

                                <input type="text" name="name" value={userInfo.name} hidden/>
                                <input type="text" name="email" value={userInfo.email} hidden/>
                                <input type="text" name="nrc" value={userInfo.nrc} hidden/>
                                <input type="text" name="msisdn" value={userInfo.msisdn} hidden/>
                                <input type="text" name="gender" value={userInfo.gender} hidden/>
                                <input type="text" name="kyc_status" value={userInfo.kyc_status} hidden/>
                                <input type="text" name="dob" value={userInfo.dob} hidden/>
                                <input type="text" name="address" value={userInfo.address} hidden/>
                                <input type="text" name="csrf-token" value={window.csrf_token} hidden/>
                                <input type="text" name="_token" value={window.csrf_token} hidden/>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-10">
                        <div className="text-gray-500 text-xs">
                            &copy;2021 Onenex. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </ContainerLayout>
        </>
    )
}
