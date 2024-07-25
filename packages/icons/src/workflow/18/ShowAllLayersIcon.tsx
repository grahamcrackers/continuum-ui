import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShowAllLayersIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36"
                viewBox="0 0 36 36"
                width="36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M17.575 17.83 2.887 10.351c-.241-.123-.241-.323 0-.446l14.688-7.48a.943.943 0 0 1 .85 0L33.113 9.9c.241.123.241.323 0 .446L18.425 17.83a.936.936 0 0 1-.85 0ZM33.114 25.905l-4.6-2.341L18 28.918 7.484 23.564l-4.6 2.341c-.241.123-.241.323 0 .446l14.691 7.479a.936.936 0 0 0 .85 0l14.689-7.479c.24-.123.24-.323 0-.446Z" />
                <path d="m33.114 17.905-4.6-2.341L18 20.918 7.484 15.564l-4.6 2.341c-.241.123-.241.323 0 .446l14.691 7.479a.936.936 0 0 0 .85 0l14.689-7.479c.24-.123.24-.323 0-.446Z" />
            </svg>
        );
    },
);
