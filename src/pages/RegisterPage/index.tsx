/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormRegister } from "../../components/Forms/FormRegister";
import { StyledForm } from "../../styles/Form";

const RegisterPage = () => {
    return (
        <StyledForm>
            <div>
                <header>
                    <h1>Your Contack Book</h1>

                    <h3>Cadastro</h3>
                </header>

                <FormRegister />
            </div>
        </StyledForm>
    );
};

export { RegisterPage };
