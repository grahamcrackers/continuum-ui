import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PawnIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx=".894" ry=".894" width="24" x="6" y="32" />
                <path d="M25.184 12H21.31a6 6 0 1 0-6.619 0h-3.875a.816.816 0 0 0-.816.816v2.367a.816.816 0 0 0 .816.816H15L12 30h12l-3-14h4.184a.816.816 0 0 0 .816-.816v-2.368a.816.816 0 0 0-.816-.816Z" />
            </svg>
        );
    },
);
