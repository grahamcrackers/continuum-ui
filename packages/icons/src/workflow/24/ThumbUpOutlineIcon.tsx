import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ThumbUpOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M46.635 18.535a5.147 5.147 0 0 0-3.987-2.527L34.485 16a49.267 49.267 0 0 0 1.1-9.361A5.033 5.033 0 0 0 30.5 1.8a5.956 5.956 0 0 0-5.54 4.387c-1.851 7.987-6.119 10.708-8.978 11.631A1.994 1.994 0 0 0 14 16H6a2 2 0 0 0-2 2v25a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2h19.251a7.676 7.676 0 0 0 7.265-5.194l4.405-12.882a4.837 4.837 0 0 0-.286-4.389Zm-3.4 2.834-4.5 13.143A3.677 3.677 0 0 1 35.251 37H16V21.961l.055-.013c2.974-.694 10.176-3.531 12.8-14.858A1.988 1.988 0 0 1 30.5 5.8a1.1 1.1 0 0 1 1.085.839 41.865 41.865 0 0 1-1.62 10.738L29.105 20h13.256a1.139 1.139 0 0 1 .819.551.863.863 0 0 1 .055.818Z" />
            </svg>
        );
    },
);
