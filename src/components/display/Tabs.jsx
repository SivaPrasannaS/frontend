import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import React from 'react';
import UsersTable from './Table/UsersTable';
import ProductsTable from './Table/ProductsTable';

export const Tab = () => {

    return (
        <>
            <Tabs style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} defaultActiveKey="1">
                <TabPane tab="Users" key="1">
                    <UsersTable />
                </TabPane>
                <TabPane tab="Products" key="2">
                    <ProductsTable />
                </TabPane>
            </Tabs>
        </>
    )
}