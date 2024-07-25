import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CurateIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M46 4H2a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h44a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-2 36H4v-8h10.328a4.164 4.164 0 0 0 7.344 0h2.656a4.164 4.164 0 0 0 7.344 0H44Zm0-12H31.672a4.164 4.164 0 0 0-7.344 0h-2.656a4.164 4.164 0 0 0-7.344 0H4v-8h4.328a4.164 4.164 0 0 0 7.344 0h2.656a4.164 4.164 0 0 0 7.344 0h6.656a4.164 4.164 0 0 0 7.344 0H44Zm0-12h-4.328a4.164 4.164 0 0 0-7.344 0h-6.656a4.164 4.164 0 0 0-7.344 0h-2.656a4.164 4.164 0 0 0-7.344 0H4V8h40Z" />
            </svg>
        );
    },
);
