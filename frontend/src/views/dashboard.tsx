import DashBoardCard from "../components/dashboard_card";

export default function DashBoard() {
    return (<>
        <div className="h-full flex flex-col">
            <div className="bg-gray-600 h-24 p-4 flex items-center justify-between rounded-b-xl">
                <div className=" h-20 p-4 gap-x-4 flex items-center ">
                    <div className="bg-slate-400 block rounded-full p-4 ">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>

                    </div>
                    <div className=" font-semibold">
                        <p>username</p>
                        <p>goes here</p>
                    </div>
                </div>
                <div className=" h-20 p-4 gap-x-4 flex items-center ">

                    <div className="bg-slate-400 block rounded-full p-4 ">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>


                    </div>
                </div>
            </div>
            <div className="flex-1  p-4 grid grid-rows-3 ">
                <div className=" p-8  ">
                    <h2 className="text-2xl font-semibold "> Billing and Reviews </h2>
                    <div className="grid grid-cols-2 gap-4 h-full items-center justify-around">

                        <span>
                            <DashBoardCard
                                image="billing.png"
                                overlayText="Billing"
                                topRight={<></>}
                                bottomLeft={
                                    <div className="inline-flex gap-x-1 items-center">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span className="text-sm"> €1994,40  </span>
                                    </div>}
                                bottomRight={
                                    <div className="inline-flex gap-x-1 items-center">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span className="text-sm"> 21 Jan 2024  </span>
                                    </div>} />

                        </span>
                        <span>
                            <DashBoardCard
                                image="billing.png"
                                overlayText="Billing"
                                topRight={<></>}
                                bottomLeft={
                                    <div className="inline-flex gap-x-1 items-center">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span className="text-sm"> €1994,40  </span>
                                    </div>}
                                bottomRight={
                                    <div className="inline-flex gap-x-1 items-center">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span className="text-sm"> 21 Jan 2024  </span>
                                    </div>} />
                        </span>
                    </div>
                </div>
                <div className=" p-8">
                    <h2 className="text-2xl font-semibold">Truck Selection and Procedures </h2>
                    <div className="grid grid-cols-2 gap-4 h-full items-center justify-around">
                        <span>
                            <DashBoardCard
                                image="billing.png"
                                overlayText="Billing"
                                topRight={<></>}
                                bottomLeft={
                                    <div className="inline-flex gap-x-1 items-center">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span className="text-sm"> €1994,40  </span>
                                    </div>}
                                bottomRight={
                                    <div className="inline-flex gap-x-1 items-center">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span className="text-sm"> 21 Jan 2024  </span>
                                    </div>} />
                        </span>
                        <span>
                            <DashBoardCard
                                image="billing.png"
                                overlayText="Billing"
                                topRight={<></>}
                                bottomLeft={
                                    <div className="inline-flex gap-x-1 items-center">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span className="text-sm"> €1994,40  </span>
                                    </div>}
                                bottomRight={
                                    <div className="inline-flex gap-x-1 items-center">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                                                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <span className="text-sm"> 21 Jan 2024  </span>
                                    </div>} />

                        </span>
                    </div>
                </div>
                <div className="p-8">
                    <h2 className="text-2xl font-semibold"> Data and Reporting </h2>
                    <div className="flex  h-full gap-16 items-center justify-center">
                        <span className="p-6 px-10 bg-gray-700 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16  mx-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>
                            <p className="text-center font-bold mt-2">
                                Inventory
                            </p>
                        </span>
                        <span className="p-6 px-10 bg-gray-700 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 mx-auto">
                                <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clipRule="evenodd" />
                                <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                            </svg>
                            <p className="text-center font-bold mt-2">
                                Reports
                            </p>


                        </span>
                        <span className="p-6 px-10 bg-gray-700 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 mx-auto">
                                <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z" clipRule="evenodd" />
                            </svg>
                            <p className="text-center font-bold mt-2">
                                Analytics
                            </p>
                        </span>


                    </div>

                </div>
            </div>
        </div>
    </>)
}