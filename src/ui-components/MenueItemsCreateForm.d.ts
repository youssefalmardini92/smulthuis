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
export declare type MenueItemsCreateFormInputValues = {
    name?: string;
    description?: string;
};
export declare type MenueItemsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MenueItemsCreateFormOverridesProps = {
    MenueItemsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MenueItemsCreateFormProps = React.PropsWithChildren<{
    overrides?: MenueItemsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MenueItemsCreateFormInputValues) => MenueItemsCreateFormInputValues;
    onSuccess?: (fields: MenueItemsCreateFormInputValues) => void;
    onError?: (fields: MenueItemsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MenueItemsCreateFormInputValues) => MenueItemsCreateFormInputValues;
    onValidate?: MenueItemsCreateFormValidationValues;
} & React.CSSProperties>;
export default function MenueItemsCreateForm(props: MenueItemsCreateFormProps): React.ReactElement;
