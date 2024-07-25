import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DateInputIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42 24.849h3.286a.721.721 0 0 0 .714-.727v-1.455a.721.721 0 0 0-.714-.727h-3.531a2.833 2.833 0 0 0-2.021.852L38 25.212l-1.734-2.42a2.833 2.833 0 0 0-2.021-.852h-3.531a.721.721 0 0 0-.714.727v1.455a.721.721 0 0 0 .714.728H34L36 28v6.849h-3.286a.721.721 0 0 0-.714.727v1.455a.721.721 0 0 0 .714.727H36v2.122l-2 3.151h-3.286a.721.721 0 0 0-.714.728v1.455a.721.721 0 0 0 .714.727h3.531a2.833 2.833 0 0 0 2.021-.852L38 42.667l1.734 2.42a2.833 2.833 0 0 0 2.021.852h3.531a.721.721 0 0 0 .714-.726v-1.455a.721.721 0 0 0-.714-.728H42l-2-3.15v-2.122h3.286a.721.721 0 0 0 .714-.727v-1.455a.721.721 0 0 0-.714-.727H40V28Z" />
                <path d="M28 38H6V12h4v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h20v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h4v5.939h3.285a4.211 4.211 0 0 1 .637.061H46V9a1 1 0 0 0-1-1h-7V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3H14V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v32a1 1 0 0 0 1 1h25Z" />
            </svg>
        );
    },
);
