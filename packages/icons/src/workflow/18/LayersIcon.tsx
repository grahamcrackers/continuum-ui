import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LayersIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m28.288 19.938-9.839 6.827a.788.788 0 0 1-.898 0l-9.839-6.827L1.858 24a.25.25 0 0 0 0 .41l15.85 10.999a.512.512 0 0 0 .584 0l15.85-10.998a.25.25 0 0 0 0-.41Z" />
                <path d="M17.699 22.988 1.858 11.996a.25.25 0 0 1 0-.41L17.698.594a.529.529 0 0 1 .603 0l15.841 10.992a.25.25 0 0 1 0 .41l-15.84 10.992a.529.529 0 0 1-.603 0Z" />
            </svg>
        );
    },
);
