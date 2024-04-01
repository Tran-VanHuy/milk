import React, { useContext, useEffect, useState } from "react";
import { BottomNavigation, Icon } from "zmp-ui";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { UserDto } from "../api/user/type";
import { requestGet } from "../api/apiRequest";
import { USER } from "../api/api";

interface AppcontentType {
    // showBottomTab: React.Dispatch<React.SetStateAction<boolean>>;
    showBottomTab: boolean
    user: UserDto
    getUser: () => void
}
const BottomNavigationPage = () => {

    const { showBottomTab, user, getUser }: AppcontentType = useContext(AppContext);
    const nav = useNavigate()
    const [activeTab, setActiveTab] = useState("home");
    const onTab = async (url: string) => {
        
        nav(url)
        getUser()

        if(url === "/notification"){

            await requestGet(`${USER.CHANGE_NOTI}`)
        }
    }
    return (
        <>
            {showBottomTab === true && <div>
                <BottomNavigation
                    fixed
                    activeKey={activeTab}
                    onChange={(key) => setActiveTab(key)}
                >
                    <BottomNavigation.Item
                        key="home"
                        label="Trang chủ"
                        icon={<Icon icon="zi-home" />}
                        activeIcon={<Icon icon="zi-home" />}
                        onClick={() => onTab("/")}
                    />
                    <BottomNavigation.Item
                        label="Yêu thích"
                        key="favourite"
                        icon={<Icon icon="zi-heart" />}
                        activeIcon={<Icon icon="zi-heart" />}
                        onClick={() => onTab("/favourite")}

                    />
                    <BottomNavigation.Item
                        label="Khám phá"
                        key="discovery"
                        icon={<Icon icon="zi-more-grid" />}
                        activeIcon={<Icon icon="zi-more-grid" />}
                        onClick={() => onTab("/news")}
                    />
                    <BottomNavigation.Item
                        key="notification"
                        label="Thông báo"
                        icon={<Icon icon="zi-notif" className={`${user?.notification === true ? 'text-red-500' : ''}`} />}
                        activeIcon={<Icon icon="zi-notif" />}
                        onClick={() => onTab("/notification")}
                        style={{color: user?.notification === true ? 'red' : '' }}
                    />
                    <BottomNavigation.Item
                        key="me"
                        label="Cá nhân"
                        icon={<Icon icon="zi-user" />}
                        activeIcon={<Icon icon="zi-user" />}
                        onClick={() => onTab("/profile")}

                    />
                </BottomNavigation>
            </div>}
        </>

    );
};

export default BottomNavigationPage;
