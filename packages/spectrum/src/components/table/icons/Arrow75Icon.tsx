import * as React from "react";
import { IconProps } from "./types";

export const Arrow75Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 10"
                className="spectrum-Icon spectrum-UIIcon-Arrow75"
                {...props}
                ref={forwardedRef}
            >
                <path d="M9.26 4.406L6.528 1.672A.84.84 0 005.34 2.859l1.3 1.301H1.396a.84.84 0 000 1.68H6.64l-1.301 1.3a.84.84 0 001.188 1.188l2.734-2.734a.84.84 0 000-1.188z" />
            </svg>
        );
    },
);

export default Arrow75Icon;
