import React from 'react';
import { CountCard } from '../display/Card';
import profile from '../../assets/images/profile.png';
import pullover from '../../assets/images/pullover.png';
import pants from '../../assets/images/pants.png';
import glass from '../../assets/images/glasses.png';
import shoes from '../../assets/images/shoes.png';
import '../../assets/css/Dashboard.css';
import { Tab } from '../display/Tabs';

const items = [
    {
        title: 'Users',
        count: 0,
        image: profile
    },
    {
        title: 'Clothes',
        count: 0,
        image: pullover
    },
    {
        title: 'Pants',
        count: 0,
        image: pants
    },
    {
        title: 'Glasses',
        count: 0,
        image: glass
    },
    {
        title: 'Shoes',
        count: 0,
        image: shoes
    }
]

const Dashboard = () => {

    return (
        <>
            <div className='dashboard__container'>
                <div className='count__content'>
                    {
                        items.map(item => {
                            return (
                                <CountCard title={item.title} count={item.count} image={item.image} />
                            )
                        })
                    }
                </div>
                <div className="tabs__content">
                    <Tab />
                </div>
            </div>
        </>
    )
}

export default Dashboard;