import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const Gauge4Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m39.692 25.05 2.822-3.42c.1-.127.178-.27.271-.4a19.74 19.74 0 0 1-.623 15.135.994.994 0 0 1-1.6.257l-1.53-1.53a.991.991 0 0 1-.207-1.079 15.682 15.682 0 0 0 .867-8.963Zm-7.461-10.665a15.46 15.46 0 0 0-6.038-2.194A15.963 15.963 0 0 0 9.176 34.01a.986.986 0 0 1-.207 1.077l-1.529 1.53a.994.994 0 0 1-1.6-.257A19.8 19.8 0 0 1 4.263 24.8a20 20 0 0 1 31.111-13.2ZM39.622 14.883a1.684 1.684 0 0 1 .177 2.282L26.671 34.489a3.7 3.7 0 0 1-5.419.419 3.7 3.7 0 0 1 0-5.436l16.081-14.588a1.685 1.685 0 0 1 2.289-.001Z" />
            </svg>
        );
    },
);
