import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FlashAutoIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M11.387 2h16.078a1 1 0 0 1 .835 1.555L18.667 18h11.14a1 1 0 0 1 .755 1.656L6.189 47.734a.5.5 0 0 1-.846-.5L13.333 26H4.054a1 1 0 0 1-.949-1.316l7.334-22A1 1 0 0 1 11.387 2ZM38.076 24.224c-.035-.18-.072-.216-.252-.216h-5.006c-.142 0-.215.108-.215.252a5.487 5.487 0 0 1-.324 1.945l-7.418 21.1c-.037.252.035.36.252.36h3.6a.354.354 0 0 0 .394-.288L30.9 42h8.991l1.892 5.451a.364.364 0 0 0 .361.216h4.036c.214 0 .252-.108.214-.324Zm-2.736 3.385h.035c.721 2.521 2.564 8.07 3.319 10.447h-6.666c1.082-3.277 2.736-8.035 3.312-10.447Z" />
            </svg>
        );
    },
);
