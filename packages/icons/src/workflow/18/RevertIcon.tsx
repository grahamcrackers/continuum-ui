import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RevertIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="32" x="2" y="26" />
                <path d="M2.5 20h10.75a.8.8 0 0 0 .75-.8.784.784 0 0 0-.235-.56L9.81 14.681l.692-.693a11.447 11.447 0 0 1 19.116 5.074A1.215 1.215 0 0 0 30.78 20h1.894a1 1 0 0 0 .991-1.17A15.43 15.43 0 0 0 14.621 7.165 16.181 16.181 0 0 0 7.337 11.5l-.356.357-3.617-3.621A.781.781 0 0 0 2.8 8a.8.8 0 0 0-.8.754V19.5a.5.5 0 0 0 .5.5Z" />
            </svg>
        );
    },
);
