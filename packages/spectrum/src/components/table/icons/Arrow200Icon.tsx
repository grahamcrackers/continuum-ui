import * as React from "react";
import { IconProps } from "./types";

export const Arrow200Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 12"
                className="spectrum-Icon spectrum-UIIcon-Arrow200"
                {...props}
                ref={forwardedRef}
            >
                <path d="M11.284 5.356L7.718 1.788a.911.911 0 10-1.29 1.29l2.012 2.01H1.286a.911.911 0 100 1.823H8.44L6.429 8.923a.911.911 0 001.289 1.289l3.566-3.567a.912.912 0 000-1.29z" />
            </svg>
        );
    },
);

export default Arrow200Icon;
