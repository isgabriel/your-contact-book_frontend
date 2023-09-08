import { useState } from "react";

import { createContext } from "react";
import { iMenuContextProps } from "./interfaces";
import { iChildrenProp } from "../../interfaces/children.interfaces";

const MenuContext = createContext({} as iMenuContextProps);

const MenuProvider = ({ children }: iChildrenProp) => {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    };

    return (
        <MenuContext.Provider value={{ menu, setMenu, handleMenu }}>
            {children}
        </MenuContext.Provider>
    );
};
export { MenuContext, MenuProvider };
