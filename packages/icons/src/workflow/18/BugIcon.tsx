import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BugIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M26.194 7.242A9.8 9.8 0 0 0 18 3a9.8 9.8 0 0 0-8.194 4.242A11.943 11.943 0 0 0 18 10.5a11.943 11.943 0 0 0 8.194-3.258ZM5.216 6.392 2.548 7.726a18.1 18.1 0 0 0 4.581 5.114A27.459 27.459 0 0 0 6.118 18H0v3h6.045a13.6 13.6 0 0 0 2.5 6.363 15.078 15.078 0 0 0-4.5 6.16l2.7 1.35a12.052 12.052 0 0 1 3.774-5.2 11.571 11.571 0 0 0 5.981 3.185V13.5A14.982 14.982 0 0 1 5.216 6.392ZM36 21v-3h-6.118a27.459 27.459 0 0 0-1.011-5.16 18.1 18.1 0 0 0 4.581-5.114l-2.668-1.334A14.982 14.982 0 0 1 19.5 13.5v19.358a11.571 11.571 0 0 0 5.979-3.185 12.052 12.052 0 0 1 3.774 5.2l2.7-1.35a15.078 15.078 0 0 0-4.5-6.16A13.6 13.6 0 0 0 29.955 21Z" />
            </svg>
        );
    },
);
