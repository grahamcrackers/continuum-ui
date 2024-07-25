import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LayersBringToFrontIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6.313 3.11a.5.5 0 0 0-.626 0L.236 8.634a.785.785 0 0 0-.236.56.8.8 0 0 0 .8.806H4v33a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V10h3.2a.8.8 0 0 0 .8-.806.785.785 0 0 0-.236-.56ZM13.365 12.672l15.983 10.135a1.2 1.2 0 0 0 1.3 0l15.987-10.135a.8.8 0 0 0 0-1.344L30.652 1.555a1.2 1.2 0 0 0-1.3 0l-15.987 9.773a.8.8 0 0 0 0 1.344ZM46.635 35.328l-5.344-3.267-3.789 2.4L40 36l-10 6.49L20 36l2.5-1.537-3.789-2.4-5.344 3.267a.8.8 0 0 0 0 1.344l15.981 10.133a1.2 1.2 0 0 0 1.3 0l15.987-10.135a.8.8 0 0 0 0-1.344Z" />
                <path d="M46.635 23.268 41.291 20 37.5 22.4l2.5 1.539-10 6.49-10-6.49 2.5-1.539-3.791-2.4-5.344 3.268a.8.8 0 0 0 0 1.343l15.983 10.136a1.2 1.2 0 0 0 1.3 0l15.987-10.136a.8.8 0 0 0 0-1.343Z" />
            </svg>
        );
    },
);
