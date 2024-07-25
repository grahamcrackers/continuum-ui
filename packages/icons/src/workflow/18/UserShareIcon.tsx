import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UserShareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m18.807 17.242.2-.227v-.766a1.441 1.441 0 0 1 .367-.93 11 11 0 0 0 2.5-6.866c0-5.2-2.756-8.1-6.919-8.1s-7 3.018-7 8.1a11.121 11.121 0 0 0 2.622 6.866 1.443 1.443 0 0 1 .367.93v2.074A1.431 1.431 0 0 1 9.7 19.767C1.338 20.5.031 26.217.031 28.474c0 .251.048 1.484.048 1.484H14V22a2 2 0 0 1 2-2h1.97s-.118-1.93.837-2.758ZM31.722 18.331 26 12l-5.708 6.331A1 1 0 0 0 21.035 20H24v7.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V20h2.979a1 1 0 0 0 .743-1.669Z" />
                <path d="M32 22v10H20V22h-3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V23a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
