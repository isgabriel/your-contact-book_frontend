import { ReactNode } from "react";
import "./style.css";
// import { InputField } from "../InputField";
// import { LabelField } from "../LabelField";

interface iFormSectionField {
    children: ReactNode;
}
const FormSectionField = ({ children }: iFormSectionField) => {
    return (
        <div className="divFormSectionField">
            {/* <LabelField />

            <InputField /> */}

            {children}
        </div>
    );
};

export { FormSectionField };
