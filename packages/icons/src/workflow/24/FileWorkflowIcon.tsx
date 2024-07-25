import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileWorkflowIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M28 4v12h12L28 4z" />
                <path d="M20 43.5v-9a4.506 4.506 0 0 1 4.5-4.5h12.26A4.489 4.489 0 0 1 40 28.063V20H26a2 2 0 0 1-2-2V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h10.051a4.446 4.446 0 0 1-.051-.5Z" />
                <path d="M46 37.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V36h-4v6h4v-1.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V44h-5.5a.5.5 0 0 1-.5-.5V40h-4v3.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V38h4v-3.5a.5.5 0 0 1 .5-.5H40v-1.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
