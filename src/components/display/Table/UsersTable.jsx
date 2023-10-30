import { Button, Table } from 'antd';
import React from 'react';

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
    {
        title: 'Phone Number',
        dataIndex: 'phoneNumber',
    },
    {
        title: 'Active',
        dataIndex: 'isEnabled',
        render: (isEnabled) => (
            isEnabled ? (
                <Button style={{ backgroundColor: 'green', color: '#ffffff', border: 'none', width: '80px' }}>Enabled</Button>
            ) : (
                <Button style={{ backgroundColor: 'lightcoral', color: '#ffffff', border: 'none', width: '80px' }}>Disabled</Button>
            )
        )
    }
];

const dataSource = [
    {
        id: '1',
        name: 'John Brown',
        email: 'abc@gmail.com',
        address: 'New York No. 1 Lake Park',
        phoneNumber: '1234567890',
        isEnabled: false
    },
    {
        id: '2',
        name: 'Jim Green',
        email: 'abc@gmail.com',
        address: 'London No. 1 Lake Park',
        phoneNumber: '1234567890',
        isEnabled: false
    },
    {
        id: '3',
        name: 'Joe Black',
        email: 'abc@gmail.com',
        address: 'Sydney No. 1 Lake Park',
        phoneNumber: '1234567890',
        isEnabled: true
    }
];

const UsersTable = () => {
    return (
        <>
            <div className='table__container'>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        </>
    );
}

export default UsersTable;