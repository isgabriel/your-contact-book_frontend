/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useContext } from "react";
// import { InputField } from "../../components/Forms/InputField";
// import { UserContext } from "../../contexts/UserContext";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { userLoginSchema } from "../../schemas/users.schemas";
import { useNavigate } from "react-router-dom";
import { FormLogin } from "../../components/Forms/FormLogin";

const LoginPage = () => {
    const navigate = useNavigate();
    const goToRegister = () => {
        navigate("/register");
    };
    return (
        <>
            <section>
                <h1>Login</h1>
                <FormLogin />
                <div>
                    <h4>Não possui uma conta?</h4>
                    <button onClick={goToRegister}>Registre-se</button>
                </div>
            </section>
        </>
    );
};

export { LoginPage };
