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
    const [activeTab, setActiveTab] = useState("chat");
    return (
        <>
            {showBottomTab === true && <div>
                <BottomNavigation
                    fixed
                    activeKey={activeTab}
                    onChange={(key) => setActiveTab(key)}
                >
                    <BottomNavigation.Item
                        key="chat"
                        label="Trang chủ"
                        icon={<Icon icon="zi-home" />}
                        activeIcon={<Icon icon="zi-home" />}
                        onClick={() => nav("/")}
                    />
                    <BottomNavigation.Item
                        label="Danh bạ"
                        key="contact"
                        icon={<Icon icon="zi-call" />}
                        activeIcon={<Icon icon="zi-call" />}
                    />
                    <BottomNavigation.Item
                        label="Khám phá"
                        key="discovery"
                        icon={<Icon icon="zi-more-grid" />}
                        activeIcon={<Icon icon="zi-more-grid" />}
                    />
                    <BottomNavigation.Item
                        key="timeline"
                        label="Thông báo"
                        icon={<Icon icon="zi-notif" />}
                        activeIcon={<Icon icon="zi-notif" />}
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
