import { useState } from "react";

import { createContext } from "react";
import { iMenuContextProps } from "./types";
import { iChildrenProp } from "../../interfaces/children.interfaces";

const MenuContext = createContext({} as iMenuContextProps);

const MenuProvider = ({ children }: iChildrenProp) => {
    const [menu, setMenu] = useState(false);
    const [displayPopupMenu, setDisplayPopupMenu] = useState<boolean>(false);
    const [deleteCounter, setDeleteCounter] = useState<number>(1);

    const handleMenu = () => {
        setMenu(!menu);
    };

    return (
        <MenuContext.Provider
            value={{
                menu,
                setMenu,
                displayPopupMenu,
                setDisplayPopupMenu,
                deleteCounter,
                setDeleteCounter,
                handleMenu,
            }}
        >
            {children}
        </MenuContext.Provider>
    );
};
export { MenuContext, MenuProvider };
