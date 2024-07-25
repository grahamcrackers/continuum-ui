import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileZipIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M28 4v12h12L28 4z" />
                <circle cx="17.814" cy="32.472" r="3.211" />
                <path d="M26 20a2 2 0 0 1-2-2V4h-4v18a2 2 0 0 1-4 0V4h-6a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h6v-2a2 2 0 0 1 4 0v2h18a2 2 0 0 0 2-2V20Zm-2 16a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V23a1 1 0 0 1 1-1h1v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2h1a1 1 0 0 1 1 1Z" />
            </svg>
        );
    },
);
