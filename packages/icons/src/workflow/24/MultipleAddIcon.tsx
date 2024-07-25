import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MultipleAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M26 20v3.719a15.858 15.858 0 0 1 6-3.085V14.5a2.5 2.5 0 0 0-2.5-2.5h-15a2.5 2.5 0 0 0-2.5 2.5V18h12a2 2 0 0 1 2 2Z" />
                <path d="M36 10v10.1h.1a15.869 15.869 0 0 1 5.375.932A2.487 2.487 0 0 0 42 19.5v-15A2.5 2.5 0 0 0 39.5 2h-15A2.5 2.5 0 0 0 22 4.5V8h12a2 2 0 0 1 2 2ZM20.2 36a15.828 15.828 0 0 1 1.8-7.353V24.5a2.5 2.5 0 0 0-2.5-2.5h-15A2.5 2.5 0 0 0 2 24.5v15A2.5 2.5 0 0 0 4.5 42h15a2.486 2.486 0 0 0 1.637-.612A15.882 15.882 0 0 1 20.2 36ZM24.2 36.1a11.9 11.9 0 1 0 11.9-11.9 11.9 11.9 0 0 0-11.9 11.9Zm13.4-8a.5.5 0 0 1 .5.5v5.5h5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5.5v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-5.5h-5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h5.5v-5.5a.5.5 0 0 1 .5-.5Z" />
            </svg>
        );
    },
);
