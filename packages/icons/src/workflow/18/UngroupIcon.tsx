import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UngroupIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M9.123 4H31.36v22.237l2 2V3a1 1 0 0 0-1-1H7.123Z" />
                    <rect
                        x="16.132"
                        y="-3.927"
                        width="2.455"
                        height="43.854"
                        rx=".818"
                        transform="rotate(-45 17.36 18)"
                    />
                    <path d="M6.36 16h4.5l-5.5-5.5V15a1 1 0 0 0 1 1ZM14.36 6.034H9.991L15.36 11.4V7.034a1 1 0 0 0-1-1ZM8.36 30h8a1 1 0 0 0 1-1v-6.5l-2.5-2.5h-6.5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1ZM29.36 21v-8a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v2.356L26 22h2.36a1 1 0 0 0 1-1Z" />
                    <path d="M25.731 32H3.36V9.628l-2-2V33a1 1 0 0 0 1 1h25.371Z" />
                </g>
            </svg>
        );
    },
);
