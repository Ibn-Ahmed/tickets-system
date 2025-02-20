export const TicketCalc = ()=>{
    return (<>
     <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Ticket Dashboard</h1>
            <div className="flex flex-col md:flex-row gap-4 w-full">
                <div className="flex flex-col items-center justify-center bg-white p-4 shadow-md rounded-md w-full">
                    <p className="text-lg font-semibold">Total Tickets</p>
                    <p className="text-2xl">100</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-white p-4 shadow-md rounded-md w-full">
                    <p className="text-lg font-semibold">Total Revenue</p>
                    <p className="text-2xl">$11,300</p>
                </div>
            </div>
        </div>
    </>)
}