import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ColorWheelIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 4.2A19.8 19.8 0 1 0 43.8 24 19.8 19.8 0 0 0 24 4.2ZM24 40a15.991 15.991 0 0 1-11.324-27.291L24 23.99V8a16 16 0 1 1 0 32Z" />
                <path d="M35.3 12.683 24 24h16a15.952 15.952 0 0 0-4.7-11.317Z" opacity=".2" />
                <path d="m24 24 11.287 11.331A16 16 0 0 0 40 24Z" opacity=".33" />
                <path d="M24 24v16a15.946 15.946 0 0 0 11.284-4.671Z" opacity=".47" />
                <path d="M24 40V24L12.685 35.3A15.947 15.947 0 0 0 24 40Z" opacity=".6" />
                <path d="M24 24H8a15.948 15.948 0 0 0 4.685 11.3Z" opacity=".7" />
                <path d="M12.674 12.711A15.95 15.95 0 0 0 8 24h16Z" opacity=".8" />
            </svg>
        );
    },
);
