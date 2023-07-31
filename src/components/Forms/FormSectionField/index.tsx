import { ReactNode } from "react";
import { StyledFormSectionField } from "./style.ts";
import "./style.ts";

interface iFormSectionField {
    children: ReactNode;
}
const FormSectionField = ({ children }: iFormSectionField) => {
    return <StyledFormSectionField>{children}</StyledFormSectionField>;
};

export { FormSectionField };
