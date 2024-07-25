import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DollyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M41.059 32h-9.121l-5-22h7.6a.5.5 0 0 0 .317-.887L23.938.2 13.025 9.113a.5.5 0 0 0 .316.887h7.6l-5 22H6.817a1 1 0 0 0-.62 1.785L23.938 47.8l17.741-14.015a1 1 0 0 0-.62-1.785Z" />
            </svg>
        );
    },
);
