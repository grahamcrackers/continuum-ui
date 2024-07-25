import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BoxExportIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 46 1.028 36.572A2 2 0 0 1 0 34.823V18l18 10ZM28.3 6.155l-7.348-3.978a2 2 0 0 0-1.905 0L.739 12.094a1.031 1.031 0 0 0 0 1.813l6.912 3.743ZM39.26 12.094l-6.8-3.682-20.644 11.5L20 24.339l19.26-10.433a1.031 1.031 0 0 0 0-1.812ZM35 24h5v-6L22 28v18l4-2.222V32a2 2 0 0 1 2-2h6v-5a1 1 0 0 1 1-1Z" />
                <path d="M38 34v-5.341a.5.5 0 0 1 .864-.343L48 38l-9.136 9.684a.5.5 0 0 1-.864-.343V42h-7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z" />
            </svg>
        );
    },
);
