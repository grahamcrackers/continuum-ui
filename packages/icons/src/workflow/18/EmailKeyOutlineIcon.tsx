import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EmailKeyOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M25.947 30H2v-2.392l11.165-8.358 3.635 2.725a2 2 0 0 0 2.4 0l3.088-2.325a7.977 7.977 0 0 1-.3-2.043c0-.087.022-.169.025-.255L18 20.375 2 8.38V6h32v2.334L31.959 9.87a7.94 7.94 0 0 1 3.7 2.075c.127.127.221.277.338.411V5.167A1.147 1.147 0 0 0 34.875 4H1.125A1.147 1.147 0 0 0 0 5.167v25.666A1.147 1.147 0 0 0 1.125 32h24.822ZM2 10.881 11.5 18 2 25.107Z" />
                <path d="M35.445 35.533v-2.887h-3.763v-1.084h3.763v-2.237a.467.467 0 0 0-.467-.467h-3.3v-5.927a5.546 5.546 0 0 0 2.283-1.359 5.607 5.607 0 1 0-7.93 0 5.542 5.542 0 0 0 2.313 1.367v12.126a.935.935 0 0 0 .935.935h5.695a.467.467 0 0 0 .471-.467Zm-4.123-17.462a1.869 1.869 0 1 1 0-2.643 1.869 1.869 0 0 1 0 2.643Z" />
            </svg>
        );
    },
);
