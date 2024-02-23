import React, { useContext, useEffect, useState } from "react";
import { BottomNavigation, Icon } from "zmp-ui";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

interface AppcontentType {
    // showBottomTab: React.Dispatch<React.SetStateAction<boolean>>;
    showBottomTab: boolean

}
const BottomNavigationPage = () => {

    const { showBottomTab }: AppcontentType = useContext(AppContext);
    const nav = useNavigate()
    const [activeTab, setActiveTab] = useState("home");
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
                        onClick={() => nav("/")}
                    />
                    <BottomNavigation.Item
                        label="Yêu thích"
                        key="favourite"
                        icon={<Icon icon="zi-heart" />}
                        activeIcon={<Icon icon="zi-heart" />}
                        onClick={() => nav("/favourite")}

                    />
                    <BottomNavigation.Item
                        label="Khám phá"
                        key="discovery"
                        icon={<Icon icon="zi-more-grid" />}
                        activeIcon={<Icon icon="zi-more-grid" />}
                        onClick={() => nav("/news")}
                    />
                    <BottomNavigation.Item
                        key="notification"
                        label="Thông báo"
                        icon={<Icon icon="zi-notif" />}
                        activeIcon={<Icon icon="zi-notif" />}
                        onClick={() => nav("/notification")}
                    />
                    <BottomNavigation.Item
                        key="me"
                        label="Cá nhân"
                        icon={<Icon icon="zi-user" />}
                        activeIcon={<Icon icon="zi-user" />}
                        onClick={() => nav("/profile")}

                    />
                </BottomNavigation>
            </div>}
        </>

    );
};

export default BottomNavigationPage;
