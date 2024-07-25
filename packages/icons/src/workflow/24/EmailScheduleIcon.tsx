import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EmailScheduleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M45.818 4H2.182A2.1 2.1 0 0 0 0 6v1.387l23.685 17.368a.54.54 0 0 0 .633 0L48 7.387V6a2.1 2.1 0 0 0-2.182-2ZM0 12.161v16.928l13.172-7.27L0 12.161zM21.145 27.667 16.56 24.3 0 33.437V36a2.1 2.1 0 0 0 2.182 2h17.956A16.091 16.091 0 0 1 20 36a15.909 15.909 0 0 1 2.079-7.869 4.4 4.4 0 0 1-.934-.464ZM48 25.441v-13.28l-10.773 7.9A15.941 15.941 0 0 1 48 25.441ZM36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm0 20.825A8.926 8.926 0 0 1 34 27.3v8.926a.9.9 0 0 0 .262.633l4.671 4.671a.9.9 0 0 0 1.265 0l1.195-1.2a.894.894 0 0 0 0-1.265l-3.553-3.548a.9.9 0 0 1-.262-.633v-7.67A8.926 8.926 0 0 1 36 44.925Z" />
            </svg>
        );
    },
);
