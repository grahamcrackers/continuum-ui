import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RetweetIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M12 24V14h2a.5.5 0 0 0 .4-.8L9 6l-5.4 7.2a.5.5 0 0 0 .4.8h2v10a6 6 0 0 0 6 6h12l-4.759-6ZM32 22h-2V12a6 6 0 0 0-6-6H12l4.735 6H24v10h-2a.5.5 0 0 0-.4.8L27 30l5.4-7.2a.5.5 0 0 0-.4-.8Z" />
            </svg>
        );
    },
);
