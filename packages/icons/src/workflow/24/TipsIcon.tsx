import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TipsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M38.4 14.151C38.4 6.554 31.942.4 23.981.4a15.068 15.068 0 0 0-2.891.28A14.713 14.713 0 0 0 9.6 14.253c0 7.278 6.56 11.14 6.56 17.747v2h15.68v-2c0-6.672 6.56-10.731 6.56-17.849ZM16 38v2.489a2 2 0 0 0 .478 1.3l4.7 5.511a2 2 0 0 0 1.522.7h2.6a2 2 0 0 0 1.522-.7l4.7-5.511a2 2 0 0 0 .478-1.3V38Z" />
            </svg>
        );
    },
);
