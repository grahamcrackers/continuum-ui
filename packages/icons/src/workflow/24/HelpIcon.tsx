import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const HelpIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 4.1A19.9 19.9 0 1 0 43.9 24 19.9 19.9 0 0 0 24 4.1Zm-.063 33.887a2.844 2.844 0 1 1 0-5.688 2.718 2.718 0 0 1 2.863 2.824 2.665 2.665 0 0 1-2.863 2.864Zm1.515-11.457a4.3 4.3 0 0 0 .735 2.168.212.212 0 0 1-.2.327h-3.6a.532.532 0 0 1-.492-.2 4.413 4.413 0 0 1-1.063-2.782c0-3.274 5.359-5.279 5.359-8.552 0-1.6-1.309-2.987-3.8-2.987a11.818 11.818 0 0 0-4.951 1.023c-.164.081-.287 0-.287-.164v-3.236c0-.164 0-.327.163-.41a14 14 0 0 1 6.1-1.268c4.787 0 7.856 2.742 7.856 6.67-.01 4.5-5.82 7.081-5.82 9.411Z" />
            </svg>
        );
    },
);
