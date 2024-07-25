import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const Branch1Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M38 24a7.984 7.984 0 0 0-6.154 2.889L17.81 19.737a8 8 0 1 0-1.816 3.563l14.145 7.208A8 8 0 1 0 38 24Zm0 12.2a4.2 4.2 0 1 1 4.2-4.2 4.2 4.2 0 0 1-4.2 4.2Z" />
            </svg>
        );
    },
);
