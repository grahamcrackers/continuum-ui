import { VariantProps } from "class-variance-authority";
import * as React from "react";
import { iconVariants } from "./icon-variants";

export interface IconProps extends React.SVGAttributes<SVGElement>, VariantProps<typeof iconVariants> {
    children?: never;
    hidden?: boolean;
    color?: string;
}
