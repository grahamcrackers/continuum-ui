import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PreviewIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m41.321 43.926-6.785-6.784a10.1 10.1 0 1 0-3.394 3.394l6.784 6.785c.469.468 2.5.889 3.395 0a2.446 2.446 0 0 0 0-3.395ZM19.8 32a6.2 6.2 0 1 1 6.2 6.2 6.2 6.2 0 0 1-6.2-6.2ZM44 28.008Z" />
                <path d="M42 6H2a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h14.211a14.019 14.019 0 0 1-2.846-4H4V14h36v21.257l4 4V8a2 2 0 0 0-2-2Z" />
            </svg>
        );
    },
);
