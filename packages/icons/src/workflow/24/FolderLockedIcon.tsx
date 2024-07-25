import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FolderLockedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.1 4.8a2 2 0 0 0-1.6-.8H6a2 2 0 0 0-2 2v4h18ZM20 33a5 5 0 0 1 2.037-4.025A13.973 13.973 0 0 1 44 18.535V16a2 2 0 0 0-2-2H4v26a2 2 0 0 0 2 2h14Z" />
                <path d="M46 32v-1.609c0-5.186-4.205-10.061-9.382-10.372A10 10 0 0 0 26 30v2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V34a2 2 0 0 0-2-2Zm-16-2a6 6 0 0 1 12 0v2H30Zm8 10.222V43a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2.778a3 3 0 1 1 4 0Z" />
            </svg>
        );
    },
);
