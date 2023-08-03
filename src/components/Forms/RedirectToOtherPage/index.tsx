interface childrenProps {
    children: React.ReactNode;
}

const RedirectToOtherPage = ({ children }: childrenProps) => {
    return <div className="redirect-div">{children}</div>;
};

export { RedirectToOtherPage };
