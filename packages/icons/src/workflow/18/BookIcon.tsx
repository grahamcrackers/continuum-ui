import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BookIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M19.782 28H9.995a4 4 0 0 1 0-8h10.523a1 1 0 0 0 .8-.4l11.1-14.8a.5.5 0 0 0-.4-.8H16.025a1 1 0 0 0-.8.4L3.522 19.328A7.981 7.981 0 0 0 9.969 32h10.549a1 1 0 0 0 .8-.4l11.1-14.8a.5.5 0 0 0-.4-.8h-3.236Z" />
            </svg>
        );
    },
);
