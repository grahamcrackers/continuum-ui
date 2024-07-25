import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const NoteAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm5 9.4a.5.5 0 0 1-.5.5H28v3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V28h-3.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H26v-3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V26h3.5a.5.5 0 0 1 .5.5Z" />
                <path d="M14.8 27a12.13 12.13 0 0 1 1.08-5H8.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h8.519a12.233 12.233 0 0 1 4.732-4H8.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h21a.5.5 0 0 1 .5.5v.687a12.142 12.142 0 0 1 4 1.83V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h9l3.536 6.839a.5.5 0 0 0 .928 0l.483-.934A12.139 12.139 0 0 1 14.8 27ZM8 8.5a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-17a.5.5 0 0 1-.5-.5Z" />
            </svg>
        );
    },
);
