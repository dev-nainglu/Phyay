export default function ContainerLayout({children}){
    return(
        <>
        <div id="sticky-banner" tabIndex="-1" className="fixed top-0 left-0 z-50 flex justify-between w-full p-3 bg:light">
            <a href="#" class="inline-flex items-center p-1 rounded-full text-black-500 hover:bg-indigo-50 border-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
                        </path>
                    </svg>
                </a>
        </div>
        <main>
            {children}
        </main>
        </>
    )
}
