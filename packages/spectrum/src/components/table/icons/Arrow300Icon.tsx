import * as React from "react";
import { IconProps } from "./types";

export const Arrow300Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                className="spectrum-Icon spectrum-UIIcon-Arrow300"
                {...props}
                ref={forwardedRef}
            >
                <path d="M12.893 6.33L8.826 2.261a.95.95 0 10-1.344 1.341L9.93 6.051H1.621a.95.95 0 100 1.898H9.93l-2.447 2.447a.95.95 0 001.344 1.342l4.067-4.067a.95.95 0 000-1.342z" />
            </svg>
        );
    },
);

export default Arrow300Icon;
