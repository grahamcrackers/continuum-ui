import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ExportIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42.854 23.646 33.707 14.3A1 1 0 0 0 32 15v5h-9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h9v5a1 1 0 0 0 1.707.707l9.147-9.353a.5.5 0 0 0 0-.708Z" />
                <path d="M40 42v-5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3H8V8h28v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2Z" />
            </svg>
        );
    },
);
