import React, {useContext, useEffect} from 'react';
import {useNotifications} from '../hooks/useNotifications';
import usePhoneTime from '../../phone/hooks/usePhoneTime';
import BatteryIcon from "../../../styles/icons/system/Battery";
import CellSignal from "../../../styles/icons/system/CellSignal";
import {useRouteMatch} from "react-router-dom";
import {ThemeContext} from "../../../styles/themeProvider";


export const NotificationBar = () => {
    const {icons, notifications, setBarUncollapsed} = useNotifications();

    const home = useRouteMatch('/');
    const camera = useRouteMatch('/camera');
    const {theme} = useContext(ThemeContext);
    const time = usePhoneTime();

    useEffect(() => {
        if (notifications.length === 0) {
            setBarUncollapsed(false);
        }
    }, [notifications, setBarUncollapsed]);

    const color = () => {
        if (home && home.isExact) {
            return 'text-white'
        } else if (camera && camera.isExact) {
            return 'bg-black text-white'
        } else {
            return theme === 'dark' ? 'bg-black text-white' : 'bg-[#F2F2F6] text-black'
        }
    }

    return (
        <>
            <div className={`${color()} grid grid-cols-3 px-5 py-3 text-sm w-full z-50`}>
                <div className="text-center">
                    {time}
                    {icons.map((notifIcon) => (
                        <div >
                            {notifIcon.icon}
                        </div>
                    ))}
                </div>
                <div>&nbsp;</div>
                <div className="flex justify-end">
                    <span>ZT&T</span>
                    <CellSignal className="h-5 w-5 mx-2"/>
                    <BatteryIcon className="h-5 w-5"/>
                </div>
            </div>


            {/*<div onClick={() => {*/}
            {/*        setBarUncollapsed((curr) => !curr);*/}
            {/*    }}*/}
            {/*>*/}
            {/*</div>*/}
            {/*<div >*/}
            {/*    <div >*/}
            {/*        <div>*/}
            {/*            <List>*/}
            {/*                {notifications.map((notification, idx) => (*/}
            {/*                    <NotificationItem*/}
            {/*                        key={idx}*/}
            {/*                        {...notification}*/}
            {/*                        onClose={(e) => {*/}
            {/*                            e.stopPropagation();*/}
            {/*                            notification.onClose?.(notification);*/}
            {/*                            removeNotification(idx);*/}
            {/*                        }}*/}
            {/*                        onClickClose={() => {*/}
            {/*                            setBarUncollapsed(false);*/}
            {/*                            if (!notification.cantClose) {*/}
            {/*                                removeNotification(idx);*/}
            {/*                            }*/}
            {/*                        }}*/}
            {/*                    />*/}
            {/*                ))}*/}
            {/*            </List>*/}
            {/*        </div>*/}
            {/*        {!notifications.length && <NoNotificationText/>}*/}
            {/*        <div >*/}
            {/*            /!*<IconButton*!/*/}
            {/*            /!*    *!/*/}
            {/*            /!*    size="small"*!/*/}
            {/*            /!*    onClick={() => setBarUncollapsed(false)}*!/*/}
            {/*            /!*>*!/*/}
            {/*            /!*    <ArrowDropUpIcon/>*!/*/}
            {/*            /!*</IconButton>*!/*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
};
