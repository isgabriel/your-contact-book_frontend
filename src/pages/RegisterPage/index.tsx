/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormRegister } from "../../components/Forms/FormRegister";

const RegisterPage = () => {
    return (
        <>
            <header>
                <h1 className="title mt-2">Your Contact Book</h1>
            </header>

            <FormRegister />
        </>
    );
};

export { RegisterPage };
