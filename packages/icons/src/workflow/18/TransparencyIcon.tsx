import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TransparencyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <g>
                    <path
                        opacity=".5"
                        d="M12 12h6v6h-6zM6 6h6v6H6zM6 18h6v6H6zM18 18h6v6h-6zM24 12h6v6h-6zM18 6h6v6h-6zM12 24h6v6h-6zM24 24h6v6h-6z"
                    />
                    <path
                        d="M31 4H5a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-1 26H6V6h24Z"
                        fillRule="evenodd"
                    />
                </g>
            </svg>
        );
    },
);
