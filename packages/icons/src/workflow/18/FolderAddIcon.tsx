import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FolderAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27 16a10.95 10.95 0 0 1 7 2.522V9a1 1 0 0 0-1-1l-14.332.008-3.3-3.4A2 2 0 0 0 13.929 4H4a2 2 0 0 0-2 2v23a1 1 0 0 0 1 1h13.427A10.969 10.969 0 0 1 27 16ZM4 6h9.929l3.887 4H4Z" />
                <path d="M27 18a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm5.4 10a.5.5 0 0 1-.5.5h-3.4v3.4a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-3.4h-3.4a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h3.4v-3.4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3.4h3.4a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
