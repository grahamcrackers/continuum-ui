import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UngroupIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <g>
                    <path d="M16.486 8H40v23.514l4 4V5a1 1 0 0 0-1-1H12.485ZM31.517 40H8V16.484l-4-4V43a1 1 0 0 0 1 1h30.517Z" />
                    <path d="M22 14.929V11a1 1 0 0 0-1-1h-3.929ZM10 17.07V21a1 1 0 0 0 1 1h3.93Z" />
                    <rect
                        x="21.876"
                        y="-4.233"
                        width="4"
                        height="56.215"
                        rx="1"
                        transform="rotate(-45 23.875 23.875)"
                    />
                    <path d="M35.072 28H37a1 1 0 0 0 1-1V17a1 1 0 0 0-1-1H27a1 1 0 0 0-1 1v1.928ZM18.93 26H13a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5.93Z" />
                </g>
            </svg>
        );
    },
);
