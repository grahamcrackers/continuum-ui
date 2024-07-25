import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ReportAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.728 40H15a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h5.2a15.893 15.893 0 0 1 .527-4H15a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h7.375A15.943 15.943 0 0 1 30 21.317V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v11.254a14.491 14.491 0 0 1 4-.031V6a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h10.375a15.8 15.8 0 0 1-1.647-4ZM22 15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1Zm-8 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1Z" />
                <path d="M24.2 36.1a11.9 11.9 0 1 0 11.9-11.9 11.9 11.9 0 0 0-11.9 11.9Zm13.4-8a.5.5 0 0 1 .5.5v5.5h5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5.5v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-5.5h-5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h5.5v-5.5a.5.5 0 0 1 .5-.5Z" />
            </svg>
        );
    },
);
