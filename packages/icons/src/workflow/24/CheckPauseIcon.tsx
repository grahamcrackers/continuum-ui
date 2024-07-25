import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CheckPauseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m31.94 20.643 7.318-9.406a1 1 0 0 0-.175-1.4L36.111 7.52a1 1 0 0 0-1.4.175l-17.697 22.73L8.4 21.811a1 1 0 0 0-1.414 0l-2.693 2.695a1 1 0 0 0 0 1.414l12.431 12.447a1 1 0 0 0 1.5-.093l1.886-2.424a15.888 15.888 0 0 1 11.83-15.207Z" />
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1ZM34 42h-4V30h4Zm8 0h-4V30h4Z" />
            </svg>
        );
    },
);
