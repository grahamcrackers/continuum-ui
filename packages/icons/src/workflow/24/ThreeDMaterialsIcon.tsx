import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ThreeDMaterialsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M15.773 36.675a.272.272 0 0 0-.357-.339c-.927.362-2.337.774-2.946.165-1.923-1.923 1.876-9.793 8.189-16.107s14.258-9.861 16.1-8.02a1.372 1.372 0 0 1 .318 1.276.277.277 0 0 0 .355.314 11.389 11.389 0 0 1 1.887-.412.529.529 0 0 0 .462-.478 2.834 2.834 0 0 0-.636-2.391l-.022-.02.007-.008a20.127 20.127 0 1 0-28.83 28.06 1.008 1.008 0 0 0 .157.131l.013.014a2.63 2.63 0 0 0 1.933.668 8.188 8.188 0 0 0 2.541-.5.573.573 0 0 0 .378-.456 14.205 14.205 0 0 1 .451-1.897Z" />
                <path d="M43.545 19.976c-.37-2.233-1.186-3.733-3.166-3.733-3.394 0-8.841 3.431-13.875 8.741-5.976 6.3-9.421 13.123-8.375 16.583a3.459 3.459 0 0 0 3.1 2.381 18.183 18.183 0 0 0 2.8.217 18.854 18.854 0 0 0 13.879-5.986 20.136 20.136 0 0 0 5.637-18.203Z" />
            </svg>
        );
    },
);
