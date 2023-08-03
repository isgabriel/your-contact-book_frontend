interface iPopupMenuProps {
    children?: React.ReactNode;
    display: boolean;
    userId?: number;
}

export const PopupMenu = ({ children, display }: iPopupMenuProps) => {
    if (!display) {
        return <></>;
    }
    return <div>{children}</div>;
};
