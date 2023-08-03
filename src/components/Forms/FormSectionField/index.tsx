import { ReactNode } from "react";
import "./style.scss";

interface iFormSectionField {
    children: ReactNode;
}
const FormSectionField = ({ children }: iFormSectionField) => {
    return <div className="">{children}</div>;
};

export { FormSectionField };
