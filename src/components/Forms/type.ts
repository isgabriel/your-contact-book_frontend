/* eslint-disable @typescript-eslint/no-explicit-any */
interface iFormProps {
    type?: string;
    placeholder?: string;
    errors?: any;
    register?: object;
    value?: string;
    maxLength?: number;
    required?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export type { iFormProps };
