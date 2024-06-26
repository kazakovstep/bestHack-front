import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface InputProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    name?: string;
    state?: "default" | "success" | "error" | string;
    value?: string | number;
    type?: string;
    placeholder?: string;
}