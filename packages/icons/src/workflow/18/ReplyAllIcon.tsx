import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ReplyAllIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M22.105 6H22V3a.733.733 0 0 0-.739-.735.718.718 0 0 0-.513.216l-6.843 6.885a.735.735 0 0 0 0 .984l6.843 7.434a.718.718 0 0 0 .513.216.733.733 0 0 0 .739-.735V14a12.429 12.429 0 0 1 12.179 4.785.455.455 0 0 0 .821-.272C35 16.5 32.779 6 22.105 6ZM12.27 18.5H12v-3.765a.733.733 0 0 0-.739-.735.718.718 0 0 0-.513.216l-8.559 8.292a.735.735 0 0 0 0 .984l8.559 8.292a.718.718 0 0 0 .513.216.733.733 0 0 0 .739-.735v-3.548c6.4-1.033 12.118 2.748 15 6.379a.555.555 0 0 0 1-.332C28 31.313 25.29 18.5 12.27 18.5Z" />
            </svg>
        );
    },
);
