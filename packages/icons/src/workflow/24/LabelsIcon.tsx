import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LabelsIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 48 48"
                width="48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m41.293 19.293-17-17A1 1 0 0 0 23.586 2H9a1 1 0 0 0-1 1v14.586a1 1 0 0 0 .293.707l17 17a1 1 0 0 0 1.414 0l14.586-14.586a1 1 0 0 0 0-1.414ZM14 10.6A2.6 2.6 0 1 1 16.6 8a2.6 2.6 0 0 1-2.6 2.6Z" />
                <path d="M39 29 26.707 41.293a1 1 0 0 1-1.414 0l-17-17A1 1 0 0 1 8 23.585v6a1 1 0 0 0 .293.707l17 17a1 1 0 0 0 1.414 0l14.586-14.585a1 1 0 0 0 0-1.414Z" />
            </svg>
        );
    },
);
