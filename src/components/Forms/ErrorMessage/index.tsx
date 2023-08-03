import { ReactNode } from "react";

interface iErrorMessageProps {
    className: string;
    message: ReactNode;
}

const ErrorMessage = ({ className, message }: iErrorMessageProps) => {
    return <p className={className}>{message}</p>;
};

export { ErrorMessage };
