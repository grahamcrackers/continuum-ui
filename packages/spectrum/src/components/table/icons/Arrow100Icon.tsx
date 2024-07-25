import * as React from "react";
import { IconProps } from "./types";

export const Arrow100Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 10"
                className="spectrum-Icon spectrum-UIIcon-Arrow100"
                {...props}
                ref={forwardedRef}
            >
                <path d="M9.7 4.387L6.623 1.262a.875.875 0 10-1.247 1.226l1.61 1.637H.925a.875.875 0 000 1.75h6.062l-1.61 1.637a.875.875 0 101.247 1.226l3.075-3.125a.874.874 0 000-1.226z" />
            </svg>
        );
    },
);

export default Arrow100Icon;
