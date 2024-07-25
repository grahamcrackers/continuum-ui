import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const WorkflowAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42 18h-8a2 2 0 0 0-2 2v.628a15.678 15.678 0 0 1 12 1.647V20a2 2 0 0 0-2-2Zm0-14h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM29 8h-6a1 1 0 0 0-1 1v13h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3v2.461A15.968 15.968 0 0 1 28.461 22H26V12h3a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-15 6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2ZM24.2 36.1a11.9 11.9 0 1 0 11.9-11.9 11.9 11.9 0 0 0-11.9 11.9Zm13.4-8a.5.5 0 0 1 .5.5v5.5h5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5.5v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-5.5h-5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h5.5v-5.5a.5.5 0 0 1 .5-.5Z" />
            </svg>
        );
    },
);
