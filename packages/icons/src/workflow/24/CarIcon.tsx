import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CarIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m46.829 22.828-2.705-2.706-5.08-11.713A4 4 0 0 0 35.374 6H12.626a4 4 0 0 0-3.67 2.409l-5.08 11.716-2.703 2.703A4 4 0 0 0 0 25.657v11.255A1.088 1.088 0 0 0 1.088 38H2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6h28v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6h.912A1.088 1.088 0 0 0 48 36.912V25.656a4 4 0 0 0-1.171-2.828ZM11.21 9.761a1.85 1.85 0 0 1 1.702-1.136h22.176a1.849 1.849 0 0 1 1.702 1.136L41 20H7ZM8 32a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm32 0a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z" />
            </svg>
        );
    },
);
