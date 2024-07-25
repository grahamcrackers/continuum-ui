import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileCodeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M26 20a2 2 0 0 1-2-2V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V20Zm-6.256 17.219a1 1 0 0 1-.814 1.58h-2.012a1 1 0 0 1-.8-.4L12.068 33l4.049-5.4a1 1 0 0 1 .8-.4h2.013a1 1 0 0 1 .814 1.58L16.738 33Zm9-12.742-4.847 16.8a1 1 0 0 1-.961.723h-1.6a1 1 0 0 1-.961-1.277l4.847-16.8a1 1 0 0 1 .961-.723h1.6a1 1 0 0 1 .958 1.277ZM33.2 38.4a1 1 0 0 1-.8.4h-2.012a1 1 0 0 1-.814-1.58L32.58 33l-3.007-4.219a1 1 0 0 1 .814-1.58H32.4a1 1 0 0 1 .8.4L37.25 33Z" />
            </svg>
        );
    },
);
