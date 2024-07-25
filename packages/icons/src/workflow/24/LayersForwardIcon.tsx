import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LayersForwardIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6.313 21.11a.5.5 0 0 0-.626 0L.236 26.634a.785.785 0 0 0-.236.56.8.8 0 0 0 .8.806H4v15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V28h3.2a.8.8 0 0 0 .8-.806.785.785 0 0 0-.236-.56ZM13.365 12.672l15.983 10.135a1.2 1.2 0 0 0 1.3 0l15.987-10.135a.8.8 0 0 0 0-1.344L30.652 1.555a1.2 1.2 0 0 0-1.3 0l-15.987 9.773a.8.8 0 0 0 0 1.344ZM30 5.85 40 12l-10 6.49L20 12Z" />
                <path d="m46.635 23.328-5.344-3.267-10.639 6.746a1.2 1.2 0 0 1-1.3 0l-10.643-6.746-5.344 3.267a.8.8 0 0 0 0 1.344l15.983 10.135a1.2 1.2 0 0 0 1.3 0l15.987-10.135a.8.8 0 0 0 0-1.344Z" />
                <path d="m46.635 35.328-5.344-3.267-3.789 2.4L40 36l-10 6.49L20 36l2.5-1.537-3.789-2.4-5.344 3.267a.8.8 0 0 0 0 1.344l15.981 10.133a1.2 1.2 0 0 0 1.3 0l15.987-10.135a.8.8 0 0 0 0-1.344Z" />
            </svg>
        );
    },
);
