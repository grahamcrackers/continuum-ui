import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FolderOpenOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42.561 14v-2a2 2 0 0 0-2-2h-15.3l-4.839-4.832A4 4 0 0 0 17.6 4H6a4 4 0 0 0-4 4v32a2 2 0 0 0 2 2h35.937a2 2 0 0 0 1.941-1.515l6-24A2 2 0 0 0 45.937 14Zm-4 24H6l4-20h33.561Z" />
            </svg>
        );
    },
);
