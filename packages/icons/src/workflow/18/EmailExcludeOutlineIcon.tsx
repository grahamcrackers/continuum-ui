import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EmailExcludeOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M34.875 2H1.125A1.147 1.147 0 0 0 0 3.167v25.666A1.147 1.147 0 0 0 1.125 30h14.784a11.411 11.411 0 0 1-.359-2H2v-2.392l11.165-8.358 3.635 2.725a1.967 1.967 0 0 0 .852.344 11.485 11.485 0 0 1 7.222-4.619L34 8.835v9.055a11.561 11.561 0 0 1 2 1.963V3.167A1.147 1.147 0 0 0 34.875 2ZM2 23.107V8.881L11.5 16Zm16-4.732L2 6.38V4h32v2.334Z" />
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9ZM27 34a6.966 6.966 0 0 1-5.525-11.252l9.777 9.777A6.935 6.935 0 0 1 27 34Zm5.525-2.748-9.777-9.777a6.966 6.966 0 0 1 9.777 9.777Z" />
            </svg>
        );
    },
);
