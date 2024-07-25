import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AssetsLinkedPublishedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M17 32H6V8h36v14l4-.875V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h13ZM31.237 38.8l9.084 5.063a.819.819 0 0 0 1.1-.366l6.485-16.146ZM28.083 39.763V47.2a.5.5 0 0 0 .824.381l5.32-4.525Z" />
                <path d="m46.79 25.535-25.713 7.909a.409.409 0 0 0-.066.759l7.114 3.479ZM19.112 24H16a4 4 0 0 1 0-8h6a4 4 0 0 1 4 4v2h2v-2a6.007 6.007 0 0 0-6-6h-6a6 6 0 0 0 0 12h4.764a7.993 7.993 0 0 1-1.652-2Z" />
                <path d="M32 14h-4.765a7.993 7.993 0 0 1 1.652 2H32a4 4 0 1 1 0 8h-6a4 4 0 0 1-4-4v-2h-2v2a6.007 6.007 0 0 0 6 6h6a6 6 0 1 0 0-12Z" />
            </svg>
        );
    },
);
