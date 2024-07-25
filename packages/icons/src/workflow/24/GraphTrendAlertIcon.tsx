import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphTrendAlertIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m42.842 41.685-8.411-16.823a1.6 1.6 0 0 0-2.861 0l-8.412 16.823A1.6 1.6 0 0 0 24.589 44h16.822a1.6 1.6 0 0 0 1.431-2.315ZM31.8 29.45c0-.249.268-.45.6-.45h1.2c.332 0 .6.2.6.45v8.1c0 .249-.268.45-.6.45h-1.2c-.332 0-.6-.2-.6-.45ZM34.5 42a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5Z" />
                <path d="m20.543 37.971 2.936-5.871 4.776-14.465 1.535 3.391a5.521 5.521 0 0 1 8.148 1.948l5.882-8.4A1 1 0 0 0 44 14V9.657a1 1 0 0 0-1.819-.574l-7.749 11.07L28.6 8.5a1 1 0 0 0-1.835.105l-7.222 22.329-6.714-6.346a1 1 0 0 0-1.347-.061l-7.123 5.936a1 1 0 0 0-.359.768v2.575a1 1 0 0 0 1.641.769l6.176-5.146 8.283 8.283a1 1 0 0 0 .443.259Z" />
            </svg>
        );
    },
);
