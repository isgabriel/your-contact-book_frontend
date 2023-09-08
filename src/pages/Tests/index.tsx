import { Button } from "../../components/Button";
import ButtonStyles from "../../components/Button/styles.module.scss";
import { FormSectionField } from "../../components/Forms/FormSectionField";
import { InputField } from "../../components/Forms/InputField";
import { LabelField } from "../../components/Forms/LabelField";
import { Header } from "../../components/Header";

import menuHamburguer from "../../assets/menu-hamburguer.svg";

import styles from "./styles.module.scss";
const Tests = () => {
    return (
        <div className={styles.divMainTest}>
            <Header>
                <button>
                    <img src={menuHamburguer} alt="" />
                </button>
                <div>
                    <p>icon</p>

                    <nav>
                        <p>Opçao</p>
                        <p>Opçao</p>
                        <p>Opçao</p>
                    </nav>
                </div>
            </Header>
            <div>
                <p>Buttons</p>
                <Button
                    className={ButtonStyles.primaryButton}
                    text="Botão principal"
                    onClick={() => console.log("clicou")}
                    type="button"
                />
                <Button
                    className={ButtonStyles.secondaryButton}
                    text="Botão secundário"
                    onClick={() => console.log("clicou")}
                    type="button"
                />
            </div>
            <div>
                <p>Input</p>
                <FormSectionField>
                    <LabelField placeholder="Nome" />
                    <InputField
                        required={true}
                        // errors={errors.name?.message}
                        // register={register("name")}
                        placeholder="Digite seu nome..."
                    />
                    {/* {errors.name && (
                    <ErrorMessage
                        className="error-msg"
                        message={errors.name.message}
                    />
                )} */}
                </FormSectionField>
            </div>
        </div>
    );
};

export { Tests };
