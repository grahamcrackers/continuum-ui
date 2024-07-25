import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FolderAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M36 20a15.916 15.916 0 0 1 10 3.53V12a2 2 0 0 0-2-2H27.266l-4.844-4.832A4 4 0 0 0 19.6 4H6a4 4 0 0 0-4 4v32a2 2 0 0 0 2 2h17.178A15.979 15.979 0 0 1 36 20ZM6 8h13.6l6.015 6H6Z" />
                <path d="M36 24a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm8 13a1 1 0 0 1-1 1h-5v5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-5h-5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h5v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h5a1 1 0 0 1 1 1Z" />
            </svg>
        );
    },
);
