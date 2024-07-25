import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const IntersectOverlapIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42 16H32V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h10v10a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V18a2 2 0 0 0-2-2Zm-26 2v10H8V8h20v8H18a2 2 0 0 0-2 2Zm24 22H20v-8h10a2 2 0 0 0 2-2V20h8Z" />
            </svg>
        );
    },
);
