import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FolderDeleteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.1 4.8a2 2 0 0 0-1.6-.8H6a2 2 0 0 0-2 2v4h18ZM20.1 36A15.879 15.879 0 0 1 44 22.275V16a2 2 0 0 0-2-2H4v26a2 2 0 0 0 2 2h15.28a15.844 15.844 0 0 1-1.18-6Z" />
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm8 13.4a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
