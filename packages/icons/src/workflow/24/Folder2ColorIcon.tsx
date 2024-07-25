import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const Folder2ColorIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M44 10H27.266l-4.844-4.832A4 4 0 0 0 19.6 4H6a4 4 0 0 0-4 4v32a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2Zm-2 28H6V14h36Z" />
                <path opacity=".5" d="M6 14h36v24H6z" />
            </svg>
        );
    },
);
