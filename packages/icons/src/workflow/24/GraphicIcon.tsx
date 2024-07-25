import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphicIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M45 18H32V1.151a1 1 0 0 0-1.707-.707L.4 30.293A1 1 0 0 0 1.111 32H14.18a11.981 11.981 0 0 0 20.746 10H45a1 1 0 0 0 1-1V19a1 1 0 0 0-1-1ZM15.5 28.2h-8L28.2 7.536V18H23a1 1 0 0 0-1 1v3.7a12.027 12.027 0 0 0-6.5 5.5Zm10.5 14a8.2 8.2 0 1 1 8.2-8.2 8.21 8.21 0 0 1-8.2 8.2Z" />
            </svg>
        );
    },
);
