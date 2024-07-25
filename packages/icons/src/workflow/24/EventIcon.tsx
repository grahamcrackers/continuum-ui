import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EventIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24.532 14.054a.5.5 0 0 0-.5.5v32.781a.5.5 0 0 0 .5.5.49.49 0 0 0 .35-.147L34.552 38h12.9a.5.5 0 0 0 .354-.854L24.882 14.2a.489.489 0 0 0-.35-.146Z" />
                <path d="M20.028 38h-12V8h30v12l4 4V4h-38v38h16v-4z" />
            </svg>
        );
    },
);
