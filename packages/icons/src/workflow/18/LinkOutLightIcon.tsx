import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LinkOutLightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32 17.5V30H4V4h14.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H3a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V17.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Z" />
                <path d="m23.54 2.853 3.389 3.39-9.546 9.546a.5.5 0 0 0 0 .707l2.117 2.121a.5.5 0 0 0 .707 0l9.546-9.546 3.389 3.389a.5.5 0 0 0 .858-.353V2H23.893a.5.5 0 0 0-.353.853Z" />
            </svg>
        );
    },
);
