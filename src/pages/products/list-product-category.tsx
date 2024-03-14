import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header, Page } from "zmp-ui";
import { ProductSuggestions } from "../../components/product-suggestions";
import { AppContext } from "../../context/AppContext";
interface AppContextType {

    setShowBottomTab: React.Dispatch<React.SetStateAction<boolean>>
}
export const ListProductCategory = () => {

    const { setShowBottomTab }: AppContextType = useContext(AppContext)
    const { title, id } = useParams();

    useEffect(() => {
        setShowBottomTab(false)
    }, [])

    return (

        <Page>
            <Header title={title} />
            <div className="pt-[50px]">
                <ProductSuggestions category={id} />
            </div>
        </Page>
    )
}