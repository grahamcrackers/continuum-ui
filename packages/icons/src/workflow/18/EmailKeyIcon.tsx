import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EmailKeyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M11.165 17.938 0 9.511v16.684l11.165-8.257zM35.445 35.533v-2.887h-3.763v-1.084h3.763v-2.237a.467.467 0 0 0-.467-.467h-3.3v-5.927a5.546 5.546 0 0 0 2.283-1.359 5.607 5.607 0 1 0-7.93 0 5.542 5.542 0 0 0 2.313 1.367v12.126a.935.935 0 0 0 .935.935h5.695a.467.467 0 0 0 .471-.467Zm-4.123-17.462a1.869 1.869 0 1 1 0-2.643 1.869 1.869 0 0 1 0 2.643Z" />
                <path d="m22.178 19.921-2.888 2.173a2.171 2.171 0 0 1-2.58 0l-3.628-2.719L0 29.068v1.765A1.147 1.147 0 0 0 1.125 32h24.822v-7.3a8.153 8.153 0 0 1-3.769-4.779Z" />
                <path d="M30 9.423a8.135 8.135 0 0 1 1.974.267L36 6.665v-1.5A1.147 1.147 0 0 0 34.875 4H1.125A1.147 1.147 0 0 0 0 5.167v1.468l18 13.553 3.839-2.888A8.176 8.176 0 0 1 30 9.423Z" />
            </svg>
        );
    },
);
