import { AppstoreOutlined, DashboardOutlined, SettingOutlined } from '@ant-design/icons';
import { Image, Menu } from 'antd';
import React from 'react';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import pullover from '../../assets/images/pullover.png';
import pant from '../../assets/images/pants.png';
import shoes from '../../assets/images/shoes.png';
import glass from '../../assets/images/glasses.png';
import profile from '../../assets/images/profile.png';
import logout from '../../assets/images/logout.png';
// import billing from '../../assets/images/billing.png';
import '../../assets/css/Sidebar.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearUserData } from '../redux-store/slices/userSlice';
import { removeToken } from '../cookie/Cookie';

function getItem(label, key, icon, to, children) {
    return {
        key,
        icon,
        to,
        children,
        label,
    };
}

const items = [
    getItem('Dashboard', 'dashboard', <DashboardOutlined />, '/dressify/dashboard'),
    getItem('Home', 'home', <AppstoreOutlined />, '/dressify/home'),
    getItem('Products', 'products', <CategoryOutlinedIcon />, '/dressify/products', [
        getItem('Clothes', '1', <Image src={pullover} preview={false} className='icon__images' />, '/dressify/products/clothes'),
        getItem('Pants', '2', <Image src={pant} preview={false} className='icon__images' />, '/dressify/products/pants'),
        getItem('Glasses', '3', <Image src={glass} preview={false} className='icon__images' />, '/dressify/products/glasses'),
        getItem('Shoes', '4', <Image src={shoes} preview={false} className='icon__images' />, '/dressify/products/shoes'),
    ]),
    getItem('Settings', 'settings', <SettingOutlined />, '/dressify/settings', [
        getItem('Profile', '5', <Image src={profile} preview={false} className='icon__images' />, '/dressify/settings/profile'),
        // getItem('Billing', '6', <Image src={billing} preview={false} className='icon__images' />, '/dressify/settings/billing'),
        getItem('Logout', '7', <Image src={logout} preview={false} className='icon__images' />, '/dressify/auth/login'),
    ],
    )];

const Sidebar = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const user = useSelector((state) => state.user.userData);

    const isAdmin = user && user.role === 'ADMIN';

    const handleEvent = (to, key) => {
        if (key === '7') {
            dispatch(clearUserData());
            removeToken();
        }
        navigate(to);
    }

    return (
        <Menu
            style={{
                width: 256,
                height: '100vh',
                userSelect: 'none'
            }}
            defaultSelectedKeys={['dashboard']}
            defaultOpenKeys={['dashboard']}
            mode="inline"
        >
            {items.map(item => {
                if (item.key === 'dashboard' && !isAdmin) {
                    return null;
                }
                if (item.children) {
                    return (
                        <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                            {item.children.map(child => (
                                <Menu.Item key={child.key} icon={child.icon} onClick={() => handleEvent(child.to, child.key)}>
                                    {child.label}
                                </Menu.Item>
                            ))}
                        </Menu.SubMenu>
                    );
                } else {
                    return (
                        <Menu.Item key={item.key} icon={item.icon} onClick={() => handleEvent(item.to, item.key)}>
                            {item.label}
                        </Menu.Item>
                    );
                }
            })}
        </Menu>
    );

};

export default Sidebar;