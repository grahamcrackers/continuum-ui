import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PrintPreviewIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14 2v10H4L14 2z" />
                <path d="M14 32a13.989 13.989 0 0 1 18-13.413V4a2 2 0 0 0-2-2H18v12a2 2 0 0 1-2 2H4v20a2 2 0 0 0 2 2h9.365A13.921 13.921 0 0 1 14 32Z" />
                <path d="m43.26 43.865-6.723-6.723a10.1 10.1 0 1 0-3.395 3.395l6.723 6.723c.469.469 2.5.89 3.395 0a2.445 2.445 0 0 0 0-3.395ZM21.8 32a6.2 6.2 0 1 1 6.2 6.2 6.2 6.2 0 0 1-6.2-6.2Z" />
            </svg>
        );
    },
);
