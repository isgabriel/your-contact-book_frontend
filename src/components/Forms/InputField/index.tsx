/* eslint-disable @typescript-eslint/no-explicit-any */

interface iInputFieldProps {
    type?: string;
    placeholder?: string;
    errors?: any;
    register?: object;
    value?: string;
    maxLength?: number;
    required?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputField = ({
    type,
    placeholder,

    onChange,
    register,
    value,
    maxLength,
    required,
}: iInputFieldProps) => {
    return (
        <>
            <input
                value={value}
                maxLength={maxLength}
                {...register}
                onChange={onChange}
                required={required}
                id={placeholder}
                type={type}
                placeholder={placeholder}
            />
        </>
    );
};
