import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SliceIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M45.155 11.4 33.947 2.551a2 2 0 0 0-2.809.33L25.516 9.9a1.98 1.98 0 0 0 .2 2.652l-.906 1.144a9.968 9.968 0 0 1-1.369 1.417L19.7 18.289a9.969 9.969 0 0 0-1.745 1.924L.084 45.981l30.628-13.636 4.676-8.027a10.11 10.11 0 0 1 .8-1.171l1.2-1.51a1.976 1.976 0 0 0 2.529-.473l5.576-6.958a2 2 0 0 0-.338-2.806ZM32.6 21.556l-4.553 7.817-17.1 7.613 10.59-15.274 5.405-4.59 1.742-2.2 5.665 4.424Z" />
            </svg>
        );
    },
);
