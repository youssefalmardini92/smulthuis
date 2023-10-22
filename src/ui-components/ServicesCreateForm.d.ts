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
export declare type ServicesCreateFormInputValues = {
    title?: string;
    subtitle?: string;
    content?: string;
    imageUrl?: string;
    weight?: number;
};
export declare type ServicesCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    subtitle?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
    weight?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServicesCreateFormOverridesProps = {
    ServicesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    subtitle?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    weight?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ServicesCreateFormProps = React.PropsWithChildren<{
    overrides?: ServicesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ServicesCreateFormInputValues) => ServicesCreateFormInputValues;
    onSuccess?: (fields: ServicesCreateFormInputValues) => void;
    onError?: (fields: ServicesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ServicesCreateFormInputValues) => ServicesCreateFormInputValues;
    onValidate?: ServicesCreateFormValidationValues;
} & React.CSSProperties>;
export default function ServicesCreateForm(props: ServicesCreateFormProps): React.ReactElement;
