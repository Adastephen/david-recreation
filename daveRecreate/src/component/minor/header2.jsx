import { React } from "react";

function Header2() {
    return (
        <>
        {/* The whole container of header two */}
        <div className=" w-full bg-white">
            {/* the child container that contain the contents */}
            <div className="flex justify-center items-center ">
                {/* the now hiring content */}
                <div >
                    <p className="text-blue-400">Now Hiring:</p>
                    <span className="text-blue-700">IT Support Engineer</span>
                </div>
                {/* the logo contents */}
                <div>
                    <img src="../assets/logo.png" alt="logoimgage"/>
                </div>
                {/* the toggle menu */}
                <div>
                    #
                </div>
            </div>
        </div>
        </>
    )
}
export default Header2;