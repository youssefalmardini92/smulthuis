/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Menus } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MenusUpdateFormInputValues = {
    title?: string;
};
export declare type MenusUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MenusUpdateFormOverridesProps = {
    MenusUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MenusUpdateFormProps = React.PropsWithChildren<{
    overrides?: MenusUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    menus?: Menus;
    onSubmit?: (fields: MenusUpdateFormInputValues) => MenusUpdateFormInputValues;
    onSuccess?: (fields: MenusUpdateFormInputValues) => void;
    onError?: (fields: MenusUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MenusUpdateFormInputValues) => MenusUpdateFormInputValues;
    onValidate?: MenusUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MenusUpdateForm(props: MenusUpdateFormProps): React.ReactElement;
