import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LayersSendToBackIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M11.2 38H8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v33H.8a.8.8 0 0 0-.8.806.785.785 0 0 0 .236.56l5.451 5.524a.5.5 0 0 0 .626 0l5.451-5.524a.785.785 0 0 0 .236-.56.8.8 0 0 0-.8-.806ZM13.365 12.672l15.983 10.135a1.2 1.2 0 0 0 1.3 0l15.987-10.135a.8.8 0 0 0 0-1.344L30.652 1.555a1.2 1.2 0 0 0-1.3 0l-15.987 9.773a.8.8 0 0 0 0 1.344ZM30 5.85 40 12l-10 6.49L20 12ZM46.635 35.268 41.291 32l-10.639 6.747a1.2 1.2 0 0 1-1.3 0L18.709 32l-5.344 3.268a.8.8 0 0 0 0 1.343l15.983 10.136a1.2 1.2 0 0 0 1.3 0l15.987-10.136a.8.8 0 0 0 0-1.343Z" />
                <path d="M46.635 23.268 41.291 20 37.5 22.4l2.5 1.539-10 6.49-10-6.49 2.5-1.539-3.791-2.4-5.344 3.268a.8.8 0 0 0 0 1.343l15.983 10.136a1.2 1.2 0 0 0 1.3 0l15.987-10.136a.8.8 0 0 0 0-1.343Z" />
            </svg>
        );
    },
);
