import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CameraFlipIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M44 12h-6.75a2 2 0 0 1-1.664-.891l-4.992-4.218A2 2 0 0 0 28.93 6h-9.86a2 2 0 0 0-1.664.891l-4.867 4.218a2 2 0 0 1-1.664.891H4a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2ZM24 38a11.924 11.924 0 0 1-9.265-4.431l-1.9 1.691a.5.5 0 0 1-.835-.373V28.5a.5.5 0 0 1 .5-.5h7.185a.5.5 0 0 1 .332.874l-2.289 2.034A7.941 7.941 0 0 0 31.717 28h4.1A11.994 11.994 0 0 1 24 38Zm12-14.5a.5.5 0 0 1-.5.5h-7.185a.5.5 0 0 1-.332-.874l2.289-2.034A7.941 7.941 0 0 0 16.283 24h-4.1a11.955 11.955 0 0 1 21.085-5.569l1.9-1.691a.5.5 0 0 1 .832.373Z" />
            </svg>
        );
    },
);
