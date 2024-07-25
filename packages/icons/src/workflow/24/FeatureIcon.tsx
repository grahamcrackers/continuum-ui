import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FeatureIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 2.933A21.067 21.067 0 1 0 45.067 24 21.067 21.067 0 0 0 24 2.933ZM40.271 19.7 31.3 26.888l3.032 11.078a.473.473 0 0 1-.724.525L24 32.192 14.392 38.5a.473.473 0 0 1-.724-.525L16.7 26.888 7.731 19.7a.474.474 0 0 1 .277-.852l11.48-.544 4.067-10.753a.474.474 0 0 1 .895 0L28.516 18.3 40 18.847a.474.474 0 0 1 .275.852Z" />
            </svg>
        );
    },
);
