/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useContext } from "react";
// import { InputField } from "../../components/Forms/InputField";
// import { UserContext } from "../../contexts/UserContext";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { userLoginSchema } from "../../schemas/users.schemas";
import { FormLogin } from "../../components/Forms/FormLogin";

const LoginPage = () => {
    // const { login } = useContext(UserContext);

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    //     reset,
    // } = useForm({ resolver: zodResolver(userLoginSchema), mode: "all" });

    // const onSubmit = (data: any) => {
    //     login(data);
    //     console.log(data);
    // };

    return (
        <>
            <section>
                <h1>Login</h1>
                <FormLogin />
                {/* <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <InputField
                            required={true}
                            errors={errors.email?.message}
                            register={register("email")}
                            placeholder="Email"
                        />
                        <InputField
                            required={true}
                            type="password"
                            errors={errors.password?.message}
                            register={register("password")}
                            placeholder="Senha"
                        />
                        <button type="submit" className="btn btn-outline-dark">
                            Entrar
                        </button>
                    </div>
                </form> */}
            </section>
        </>
    );
};

export { LoginPage };
