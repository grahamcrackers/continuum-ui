import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CollectionAddToIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 36h-6V24h6v-4h-6V8h10v8h4V8h10v8h4V6a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h22Zm-10 0H4V24h10Zm0-16H4V8h10Z" />
                <path d="m47.688 33.688-6.826-6.826 5.972-6.011a.5.5 0 0 0-.357-.85H28v18.641a.5.5 0 0 0 .854.358l6.008-6.139 6.826 6.826a1 1 0 0 0 1.414 0l4.586-4.587a1 1 0 0 0 0-1.412Z" />
            </svg>
        );
    },
);
