import { Link } from "react-router-dom";
const buttonClasses = 'px-[1rem] hover:text-gray-500'

export const buttons = (
    <>
    <Link className={buttonClasses} to="/">Home</Link>
    <Link className={buttonClasses} to="/create event">Create Event</Link>
    <Link className={buttonClasses} to="/dashboard">DashBoard</Link>
    </>
)