import React, { createContext, useEffect, useState } from "react";
import { getPhoneNumber, getUserInfo } from "zmp-sdk";
import { createApiUser, findOneUser } from "../api/user/user";
import { UserDto } from "../api/user/type";

export const AppContext: any = createContext({});

export const AppProvider = ({ children }) => {

    const [showBottomTab, setShowBottomTab] = useState<boolean>(false);
    const [user, setUser] = useState<UserDto>();
    

    const getUser = async () => {
        try {
            const { userInfo } = await getUserInfo({});
            let {number} = await getPhoneNumber({});
            
            const body : UserDto = {
                userId: userInfo.id,
                avatar: userInfo.avatar,
                name: userInfo.name,
                phone: number || "Chưa có"
            }
            await createApiUser(body)
            const user = await findOneUser(body.userId)

            if (user){

                setUser(user.data.data)
            }
            
        } catch (error) {
            // xử lý khi gọi api thất bại
            console.log(error);
        }
    };

    useEffect(() => {
        getUser()
    }, [])
    return (
        <AppContext.Provider value={{
            showBottomTab,
            setShowBottomTab,
            user,
            getUser
        }}>
            {children}
        </AppContext.Provider>
    )
}