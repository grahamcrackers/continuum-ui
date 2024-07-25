import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SyncIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m45.664 30.253-12-12a.979.979 0 0 0-.658-.253A1 1 0 0 0 32 19v7H22a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10v7a1 1 0 0 0 1.006 1 .979.979 0 0 0 .658-.255l12-12a1 1 0 0 0 0-1.494Z" />
                <path d="M26 22a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H16V5a1 1 0 0 0-1.006-1 .979.979 0 0 0-.658.255l-12 12a1 1 0 0 0 0 1.494l12 12a.979.979 0 0 0 .658.255A1 1 0 0 0 16 29v-7Z" />
            </svg>
        );
    },
);
