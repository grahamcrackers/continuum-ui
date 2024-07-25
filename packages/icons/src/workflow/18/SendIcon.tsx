import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SendIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36"
                viewBox="0 0 36 36"
                width="36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M33.191 5.113 1.8 14.478a.5.5 0 0 0-.081.927l7.921 3.953ZM13.089 21.032l11.937 6a1 1 0 0 0 1.343-.446l9.267-20.222ZM10.08 23.25v7.639a.713.713 0 0 0 1.174.544l5.36-4.516Z" />
            </svg>
        );
    },
);
