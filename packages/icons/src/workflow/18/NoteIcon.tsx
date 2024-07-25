import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const NoteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33 2H3a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h11l3.536 6.839a.5.5 0 0 0 .928 0L22 28h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM8.5 8h17a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm17 14h-17a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5Zm4-6h-21a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h21a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5Z" />
            </svg>
        );
    },
);
