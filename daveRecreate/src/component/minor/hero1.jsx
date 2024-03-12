import React from "react";
import { ServiceList } from "../../Major/hero/hero1list.jsx";

function Hero1() {
    return (
        // the whole of the div
        <div>
            {/* the child container that contain al the div  */}
            <div>
                {/* div that contains the contenrs */}
                <div>
                    {/* the first contents */}
                    <div>
                        <h3>DOMINION SYSTEMS RESOLVES 3 KEY PROBLEM FOR BUSINESSES</h3>
                    </div>
                    {/* THE second contents  */}
                    <div>
                        <p>We've always known that for business large and small, IT can be a real challenge to manage. staying on top of your technology includes controlling the cost associated with keeping in-house staff up-to-date with training ertification and current trends </p>
                    </div>
                    {/* the button clinck  */}
                    <div>
                        <button className="py-3 px-2 bg-orange-500 text-white font-bold rounded mt-5">DISCOVER OUR SERVICE</button>
                    </div>
                </div>
                {/* service functions repairs */}
                <div>
                    <ServiceList />
                </div>
            </div>
        </div>
    )
}