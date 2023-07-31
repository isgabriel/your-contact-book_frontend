import { RedirectDiv } from "./style";

interface childrenProps {
    children: React.ReactNode;
}

const RedirectToOtherPage = ({ children }: childrenProps) => {
    return <RedirectDiv className="redirect-div">{children}</RedirectDiv>;
};

export { RedirectToOtherPage };
