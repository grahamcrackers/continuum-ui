import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BoxImportIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M46.971 36.572 30 46V28l18-10v16.823a2 2 0 0 1-1.029 1.749ZM36.3 6.155l-7.348-3.978a2 2 0 0 0-1.905 0L8.739 12.094a1.031 1.031 0 0 0 0 1.813l6.912 3.744ZM47.26 12.094l-6.8-3.682-20.644 11.5L28 24.339l19.26-10.433a1.031 1.031 0 0 0 0-1.812ZM8 18v4.793a1.97 1.97 0 0 1 1.434.563l13.793 13.795a1 1 0 0 1 0 1.414l-3.789 3.79L26 46V28Z" />
                <path d="M8 34v-5.341a.5.5 0 0 1 .864-.343L18 38l-9.137 9.684A.5.5 0 0 1 8 47.341V42H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z" />
            </svg>
        );
    },
);
