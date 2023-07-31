import { FormLogin } from "../../components/Forms/FormLogin";
import { StyledForm } from "../../styles/Form";

const LoginPage = () => {
    return (
        <StyledForm>
            <div>
                <header>
                    <h1>Your Contack Book</h1>
                    <h3>Login</h3>
                </header>
                <FormLogin />
            </div>
        </StyledForm>
    );
};

export { LoginPage };
