interface iMenuContextProps {
    menu: boolean;
    setMenu: React.Dispatch<React.SetStateAction<boolean>>;
    handleMenu: () => void;
}

export type { iMenuContextProps };
