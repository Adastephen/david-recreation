import React from "react";
import { useState} from "react";
import {Serv } from 

function Servicelist() {
    const services= [
        {
            title: "Poor IT Performance & Service Delivery",
            body: "Poor performing IT Partners and IT service reduce productivity and risk the integrity of you business"
        },
        {
            title: "Controlling IT Costs",
            body: "IT service are one of the largest sunken or ongoing cost in any business therefore important to manage",
        }
        {
            title: "Distraction From Business Priorities",
            body: "Our typical customer doesnt want to be distrated by IT Service that doesnt ass direct value to their business",
        }
    ];
    const count = () => {
        [count, setCount] = useState(1);

        function clickHandler() {
            setCount(prevCount => prevCount + 1);
            return 
            <div>{count}</div>
        }
    }
    return (
        <>
        <div>
            <div>
                <div >
                    {clickHandler()}
                </div>
                {/* the word aspects */}
                <span>
                    <div>
                    {service.map((service, index) => (
                        <Serv key={index} {...service} />
                    ))}
                    </div>
                </span>
            </div>
        </div>
        </>
    )
}