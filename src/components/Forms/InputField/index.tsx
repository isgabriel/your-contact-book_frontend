import { iFormProps } from "../type";
import "./style.css";

/* eslint-disable @typescript-eslint/no-explicit-any */

const InputField = ({
    type,
    placeholder,
    // errors,
    onChange,
    register,
    value,
    maxLength,
    required,
}: iFormProps) => {
    return (
        <>
            <input
                value={value}
                maxLength={maxLength}
                // className={errors ? "unvalid" : ""}
                {...register}
                onChange={onChange}
                required={required}
                id={placeholder}
                type={type}
                placeholder={placeholder}
            />
        </>
        // <section className="divInputField">
        //     <div className="mb-1">
        /* <label htmlFor={placeholder}>{placeholder}</label> */
        // <input
        //     value={value}
        //     maxLength={maxLength}
        //     className={errors ? "unvalid" : ""}
        //     {...register}
        //     onChange={onChange}
        //     required={required}
        //     id={placeholder}
        //     type={type}
        //     placeholder={placeholder}
        // />
        //     </div>
        //     {errors && <span>{errors}</span>}
        // </section>
    );
};

export { InputField };
