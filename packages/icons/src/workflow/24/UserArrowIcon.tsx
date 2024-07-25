import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UserArrowIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M31.681 26.365a1.949 1.949 0 0 1-1.657-1.886v-2.694a1.957 1.957 0 0 1 .438-1.2 16.806 16.806 0 0 0 2.979-9.465c0-6.72-3.282-9.89-8.242-9.89s-8.336 3.317-8.336 9.89a16.927 16.927 0 0 0 3.126 9.469 1.949 1.949 0 0 1 .434 1.2v2.683a1.81 1.81 0 0 1-.159.714L31.9 36.033 27.55 40H44v-2.4c0-2.782-1.59-10.024-12.319-11.235Z" />
                <path d="M14.874 25.622a.5.5 0 0 0-.874.332V32H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h9v5.818a.5.5 0 0 0 .874.332L26 36Z" />
            </svg>
        );
    },
);
