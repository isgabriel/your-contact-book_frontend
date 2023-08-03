import { FormLogin } from "../../components/Forms/FormLogin";

import "../../sass/style.scss";

const LoginPage = () => {
    return (
        <>
            <header>
                <h1 className="title mt-2">Your Contact Book</h1>
            </header>
            <FormLogin />
        </>
    );
};

export { LoginPage };
