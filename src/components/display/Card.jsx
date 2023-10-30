import React from 'react';
import { Card } from 'antd';
import '../../assets/css/Card.css';

export const CountCard = ({ title, count, image }) => {
    return (
        <Card
            bordered={false}
            style={{
                width: 250,
                margin: 10
            }}
        >
            <div className='content'>
                <div className='column'>
                    <img src={image} alt='Clothes' width={15} height={15} />
                    <p className='title'>{title}</p>
                </div>
                <div className='column'>
                    <span className='count'>{count}</span>
                </div>
            </div>
        </Card>
    );
};