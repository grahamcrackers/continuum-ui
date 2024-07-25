import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CloudDisconnectedIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M4.946 38H27.61a11.995 11.995 0 0 1 9.98-17.99s-.01-.947-.01-1.476A10.31 10.31 0 0 0 27.124 8c-5.392 0-9.008 4.182-10.274 8.499a10.404 10.404 0 0 0-2.839-.396 8.492 8.492 0 0 0-8.657 8.282 6.627 6.627 0 0 0 .18 2.15C2.426 26.535 0 29.987 0 32.347 0 35.748 1.774 38 4.946 38Z" />
                <path d="M38 22a10 10 0 1 0 10 10 10.01 10.01 0 0 0-10-10Zm5.246 13.416a1.295 1.295 0 0 1-.915 2.211 1.302 1.302 0 0 1-.916-.381L38 33.83l-3.415 3.416a1.293 1.293 0 0 1-2.21-.915 1.286 1.286 0 0 1 .379-.915L36.17 32l-3.37-3.404a1.151 1.151 0 0 1-.43-.828 1.417 1.417 0 0 1 1.346-1.383 1.302 1.302 0 0 1 .916.38L38 30.17l3.368-3.404a1.302 1.302 0 0 1 .916-.381 1.417 1.417 0 0 1 1.346 1.383 1.151 1.151 0 0 1-.43.828L39.83 32Z" />
            </svg>
        );
    },
);
