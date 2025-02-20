import { PackageSum } from "../components/packageSum";
import { TicketTable } from "../components/TicketTable";
import { TicketCalc } from "../components/TicketCalc";

export function DashBoard() {
    return(
        <>
        <div>
       <TicketCalc/>
       <PackageSum/>
        <TicketTable/>
        </div>
        </>
    )
}