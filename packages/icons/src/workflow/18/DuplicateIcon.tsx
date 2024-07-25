import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DuplicateIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <g>
                    <path d="M9 8h17V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h5V9a1 1 0 0 1 1-1Z" />
                    <path d="M33 10H11a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1Zm-4 13.5h-5.5V29h-3v-5.5H15v-3h5.5V15h3v5.5H29Z" />
                </g>
            </svg>
        );
    },
);
