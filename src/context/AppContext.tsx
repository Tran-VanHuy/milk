import React, { createContext, useState } from "react";

export const AppContext: any = createContext({});

export const AppProvider = ({ children }) => {

    const [showBottomTab, setShowBottomTab] = useState<boolean>(false);
    return (
        <AppContext.Provider value={{
            showBottomTab,
            setShowBottomTab
        }}>
            {children}
        </AppContext.Provider>
    )
}