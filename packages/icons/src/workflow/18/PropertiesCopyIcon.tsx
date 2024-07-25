import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PropertiesCopyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27 18a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm4.9 10.5h-3.4v3.4a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-3.4h-3.4a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h3.4v-3.4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3.4h3.4a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5ZM2 17.5v-1a.5.5 0 0 1 .5-.5h15.6a5 5 0 0 1 9.8 0s-.559-.007-.9 0a11.217 11.217 0 0 0-1.165.061 2.99 2.99 0 1 0-5.535 2.222 11.105 11.105 0 0 0-1.506 1.4A4.965 4.965 0 0 1 18.1 18H2.5a.5.5 0 0 1-.5-.5Zm0-10v-1a.5.5 0 0 1 .5-.5h3.6a5 5 0 0 1 9.8 0h17.6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H15.9a5 5 0 0 1-9.8 0H2.5a.5.5 0 0 1-.5-.5ZM8 7a3 3 0 1 0 3-3 3 3 0 0 0-3 3Zm7.842 20.961a3 3 0 1 1 0-1.922 11.1 11.1 0 0 1 .565-2.676A4.98 4.98 0 0 0 8.1 26H2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5.6a4.98 4.98 0 0 0 8.306 2.637 11.109 11.109 0 0 1-.564-2.676Z" />
            </svg>
        );
    },
);
