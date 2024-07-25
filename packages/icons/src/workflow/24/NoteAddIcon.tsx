import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const NoteAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm8 13.4a.5.5 0 0 1-.5.5H38v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V38h-5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H34v-5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V34h5.5a.5.5 0 0 1 .5.5Z" />
                <path d="M20.1 36.1a15.95 15.95 0 0 1 .551-4.1H11a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h11.319a16.063 16.063 0 0 1 3.333-4H11a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h28a1 1 0 0 1 .9.572A15.89 15.89 0 0 1 44 22.2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h10l6 10 1.354-2.257A15.908 15.908 0 0 1 20.1 36.1ZM10 13a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1Z" />
            </svg>
        );
    },
);
