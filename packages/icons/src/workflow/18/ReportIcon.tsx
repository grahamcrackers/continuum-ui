import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ReportIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27 4H9a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-11 6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Zm-6 4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Zm12 15a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5Zm4-6a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5Zm0-6a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
