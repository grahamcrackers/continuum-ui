import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const VolumeMuteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32.1 24.1A11.9 11.9 0 1 0 44 36a11.9 11.9 0 0 0-11.9-11.9ZM41.025 36a8.865 8.865 0 0 1-1.663 5.159l-12.42-12.421A8.9 8.9 0 0 1 41.025 36Zm-17.85 0a8.862 8.862 0 0 1 1.663-5.158l12.42 12.42A8.9 8.9 0 0 1 23.175 36ZM16.2 36.1A15.774 15.774 0 0 1 22 23.746V7.155a.931.931 0 0 0-1.542-.761l-9.8 9.154a2.018 2.018 0 0 1-1.284.46L2 16.013A1.994 1.994 0 0 0 0 18v12.013A1.994 1.994 0 0 0 2 32h7.375a2 2 0 0 1 1.28.455l5.634 5.313A15.865 15.865 0 0 1 16.2 36.1Z" />
            </svg>
        );
    },
);
