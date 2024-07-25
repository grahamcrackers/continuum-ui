import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CheckmarkCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 4.1A19.9 19.9 0 1 0 43.9 24 19.9 19.9 0 0 0 24 4.1Zm12.562 12.587L22.018 35.341a1.206 1.206 0 0 1-.875.461h-.073a1.2 1.2 0 0 1-.849-.351l-7.785-7.8a1.2 1.2 0 0 1 0-1.7l1.326-1.325a1.2 1.2 0 0 1 1.7 0l5.338 5.356 12.408-15.9a1.2 1.2 0 0 1 1.692-.212L36.352 15a1.2 1.2 0 0 1 .21 1.687Z" />
            </svg>
        );
    },
);
