import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShareCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M21.722 6.331 16 0l-5.708 6.331A1 1 0 0 0 11.035 8H14v11.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V8h2.979a1 1 0 0 0 .743-1.669ZM36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm-2.229 19.8-6.133-6.133a.5.5 0 0 1 0-.707L29.4 35.3a.5.5 0 0 1 .707 0L34 39.188l8.939-8.94a.5.5 0 0 1 .707 0l1.887 1.887a.5.5 0 0 1 0 .707L34.479 43.9a.5.5 0 0 1-.708 0ZM28 22.275a15.8 15.8 0 0 1 4-1.648V9a1 1 0 0 0-1-1h-7v4h4Z" />
                <path d="M22.275 28H4V12h4V8H1a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h19.627a15.788 15.788 0 0 1 1.648-4Z" />
            </svg>
        );
    },
);
