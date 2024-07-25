import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CutIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M40.256 30.045c-.065 0-.142-.005-.162-.006a12.549 12.549 0 0 1-9.765-5.68 4.406 4.406 0 0 0-.3-.359 4.406 4.406 0 0 0 .3-.359 12.549 12.549 0 0 1 9.765-5.68c.02 0 .1 0 .162-.006a7.978 7.978 0 1 0-6.133-2.555l-9.1 5.157L9.8 11.94a5.336 5.336 0 0 0-5.066-.1L.865 13.756 18.943 24 .865 34.243l3.869 1.92a5.333 5.333 0 0 0 5.066-.1l15.222-8.615 9.1 5.157a8.01 8.01 0 1 0 6.133-2.556ZM40.3 5.811A4.2 4.2 0 1 1 35.811 9.7 4.2 4.2 0 0 1 40.3 5.811Zm0 36.378a4.2 4.2 0 1 1 3.888-4.49 4.2 4.2 0 0 1-3.888 4.49Z" />
            </svg>
        );
    },
);
