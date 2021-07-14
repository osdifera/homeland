import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import {
    SearchIcon,
    HomeRoundedIcon,
    SubscriptionsRoundedIcon,
    SupervisedUserCircleRoundedIcon,
    AddRoundedIcon,
    NotificationsRoundedIcon,
    StorefrontRoundedIcon,
    ExitToAppRoundedIcon,
} from '../../utils/icons';
import './Header.scss';

interface HeaderProps {
    username: string | null;
}

function Header({ username }: HeaderProps) {
    return (
        <div className='header'>
            <div className='headerCenter'>
                <div className='activeOption'>
                    <HomeRoundedIcon fontSize='large' className='icon' />
                </div>
                <div className='option'>
                    <SubscriptionsRoundedIcon
                        fontSize='large'
                        className='icon'
                    />
                </div>
                <div className='option'>
                    <StorefrontRoundedIcon fontSize='large' className='icon' />
                </div>
                <div className='option'>
                    <SupervisedUserCircleRoundedIcon
                        fontSize='large'
                        className='icon'
                    />
                </div>
            </div>

            <div className='headerRight'>
                <div className='info'>
                    <h4>{username}</h4>
                </div>
                <IconButton>
                    <AddRoundedIcon />
                </IconButton>
                <IconButton>
                    <NotificationsRoundedIcon />
                </IconButton>
                <IconButton>
                    <ExitToAppRoundedIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default Header;
