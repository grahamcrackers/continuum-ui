import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MoveToIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m38.057 19.843-8.813 8.915a2 2 0 0 1-2.833.011l-7.137-7.108a2 2 0 0 1 0-2.831l8.885-8.886L26.213 8H4a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h34a2 2 0 0 0 2-2V21.786Z" />
                <path d="M30.241 4a1.008 1.008 0 0 0-.655 1.716l4.228 4.228-9.842 9.842a.5.5 0 0 0 0 .707l3.535 3.535a.5.5 0 0 0 .707 0l9.842-9.842 4.218 4.214a1 1 0 0 0 1.706-.655V4Z" />
            </svg>
        );
    },
);
