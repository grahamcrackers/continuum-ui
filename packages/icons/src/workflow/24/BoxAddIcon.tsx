import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BoxAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m15.818 19.907 20.645-11.5 6.8 3.682a1.03 1.03 0 0 1 0 1.813L24 24.339ZM44 22.3V18l-4.585 2.547A15.8 15.8 0 0 1 44 22.3ZM20.2 36.1a15.827 15.827 0 0 1 1.8-7.353V28L4 18v16.823a2 2 0 0 0 1.029 1.748L22 46v-2.547a15.828 15.828 0 0 1-1.8-7.353ZM4.74 13.906l6.911 3.744L32.3 6.154l-7.347-3.977a2.005 2.005 0 0 0-1.906 0L4.74 12.094a1.03 1.03 0 0 0 0 1.812ZM47.9 36A11.9 11.9 0 1 1 36 24.1 11.9 11.9 0 0 1 47.9 36ZM44 34.5a.5.5 0 0 0-.5-.5H38v-5.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V34h-5.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H34v5.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V38h5.5a.5.5 0 0 0 .5-.5Z" />
            </svg>
        );
    },
);
