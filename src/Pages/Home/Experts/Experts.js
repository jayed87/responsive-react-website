import React from 'react';
import mechanic1 from '../../../Images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../../Images/mechanic/mechanic-2.jpg';
import mechanic3 from '../../../Images/mechanic/mechanic-3.jpg';
import mechanic4 from '../../../Images/mechanic/mechanic-4.jpg';
import mechanic5 from '../../../Images/mechanic/mechanic-5.jpg';
import Expert from '../Expert/Expert';

const experts = [
    {
        img: mechanic1,
        name: "Jayed",
        expertize: "Engin Expert"
    },
    {
        img: mechanic2,
        name: "Akbar",
        expertize: "Polish Expert"
    },
    {
        img: mechanic3,
        name: "Sumon",
        expertize: "Test Driver"
    },
    {
        img: mechanic4,
        name: "Masud",
        expertize: "Technical Tester"
    },
    {
        img: mechanic5,
        name: "Zawad",
        expertize: "Akaimma"
    }
]
const Experts = () => {
    return (
        <div className="container">
            <h2 className="mt-5">Our Experts</h2>
            <div className="row">
                {experts.map(expert => <Expert
                    key={expert.name}
                    expert={expert}
                ></Expert>)}
            </div>
        </div>
    );
};

export default Experts;