import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PagesExcludeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M2 6h26V3a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h1Z" />
                <path d="M15.721 32H6V14h24v1.184a12.273 12.273 0 0 1 2 .685V9a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h11.818a12.266 12.266 0 0 1-1.097-2Z" />
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9ZM20 27a6.934 6.934 0 0 1 1.475-4.252l9.777 9.777A6.966 6.966 0 0 1 20 27Zm12.525 4.252-9.777-9.777a6.966 6.966 0 0 1 9.777 9.777Z" />
            </svg>
        );
    },
);
