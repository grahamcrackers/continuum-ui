import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const WorkflowIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="11.2" rx="1" ry="1" width="8" x="2" y="12" />
                <rect height="6" rx="1" ry="1" width="6" x="28" y="4" />
                <rect height="6" rx="1" ry="1" width="6" x="28" y="14" />
                <rect height="6" rx="1" ry="1" width="6" x="28" y="24" />
                <path d="M26 7.5v-1a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V16h-5.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H18v9.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H20v-8h5.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H20V8h5.5a.5.5 0 0 0 .5-.5Z" />
            </svg>
        );
    },
);
