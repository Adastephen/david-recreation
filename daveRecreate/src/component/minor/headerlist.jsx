import React from "react";
import { Headlist } from "../Major/header/headlist.jsx";

function HeaderList() {
const lists = [
    {
        title: "Career",
        icon: '../icons/career.svg'
    },
    {
        title: "FAQ",
        icon: "../icons/faq.svg"
    },
    {
        title: 'Pricing',
        icon: '../icons/priceing.svg'
    },
    {
        title: 'IT Blog',
        icon: '../icons/itblog.svg'
    },
    {
        title: 'Contact Us',
        icon: '../icons/contact.svg'
    }
];

return (
    <>
        <div className="flex justify-between my-2">
            {lists.map((list, index) => (
                <Headlist key={index} {...list}/>
            ))}
        </div>
    </>
)
}

export default HeaderList;
