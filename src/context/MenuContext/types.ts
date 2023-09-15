import React from "react";

interface iMenuContextProps {
    menu: boolean;
    setMenu: React.Dispatch<React.SetStateAction<boolean>>;
    displayPopupMenu: boolean;
    setDisplayPopupMenu: React.Dispatch<React.SetStateAction<boolean>>;
    deleteCounter: number;
    setDeleteCounter: React.Dispatch<React.SetStateAction<number>>;
    handleMenu: () => void;
}

export type { iMenuContextProps };
