/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MenusCreateFormInputValues = {
    title?: string;
};
export declare type MenusCreateFormValidationValues = {
    title?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MenusCreateFormOverridesProps = {
    MenusCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MenusCreateFormProps = React.PropsWithChildren<{
    overrides?: MenusCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MenusCreateFormInputValues) => MenusCreateFormInputValues;
    onSuccess?: (fields: MenusCreateFormInputValues) => void;
    onError?: (fields: MenusCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MenusCreateFormInputValues) => MenusCreateFormInputValues;
    onValidate?: MenusCreateFormValidationValues;
} & React.CSSProperties>;
export default function MenusCreateForm(props: MenusCreateFormProps): React.ReactElement;
