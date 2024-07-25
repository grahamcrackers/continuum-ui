import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ExportOriginalIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 29V19a2 2 0 0 1 2-2h14V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2v-9H22a2 2 0 0 1-2-2Z" />
                <path d="M40 16.564a.5.5 0 0 1 .858-.349l6.988 7.431a.5.5 0 0 1 0 .708l-6.988 7.457a.5.5 0 0 1-.858-.349V27H25a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h15Z" />
            </svg>
        );
    },
);
