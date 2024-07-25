import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RenameIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="44" rx=".5" ry=".5" width="2" x="38" y="2" />
                <path d="M12.823 31.3 9.117 41.69a.36.36 0 0 1-.411.31h-3.5c-.255 0-.36-.155-.31-.41l11.219-31.224a5.529 5.529 0 0 0 .361-2.111.241.241 0 0 1 .255-.255h5.043c.2 0 .255.05.3.255L34.167 41.64c.1.2.054.36-.206.36h-3.907a.462.462 0 0 1-.411-.255L25.886 31.3Zm11.882-3.958C23.57 24 20.333 14.994 19.353 11.5H19.3c-.876 3.292-3.343 10.186-5.3 15.844Z" />
            </svg>
        );
    },
);
