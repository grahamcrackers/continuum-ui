import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const NoEditIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect
                    height="43.854"
                    rx=".818"
                    ry=".818"
                    transform="rotate(-45 18 18)"
                    width="2.455"
                    x="16.773"
                    y="-3.927"
                />
                <path d="m11.181 17.275-6.1 6.1a1 1 0 0 0-.251.421L2.056 33.1c-.114.376.459.85.783.85a.3.3 0 0 0 .061-.006c.276-.064 7.867-2.344 9.312-2.779a.974.974 0 0 0 .414-.249l6.1-6.1ZM4.668 31.338l2.009-6.731 4.72 4.708c-2.161.65-4.862 1.466-6.729 2.023ZM33.567 8.2 27.8 2.432a1.215 1.215 0 0 0-.867-.353H26.9a1.371 1.371 0 0 0-.927.406l-8.8 8.624 7.543 7.542 8.8-8.623a1.375 1.375 0 0 0 .4-.883 1.223 1.223 0 0 0-.349-.945Z" />
            </svg>
        );
    },
);
