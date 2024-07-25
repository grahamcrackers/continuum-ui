import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AnchorIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33.932 25.271 30 19.829l-4.1 5.442a.386.386 0 0 0 .252.629h2.5a11.062 11.062 0 0 1-8.7 3.9V17.212l2.08-.071a.718.718 0 0 0 .67-.759v-1.517a.718.718 0 0 0-.67-.759l-2.08.07-.024-2.119A5.925 5.925 0 0 0 23 7.16a5.165 5.165 0 0 0-4.989-5.2A5.289 5.289 0 0 0 13 7.275a5.663 5.663 0 0 0 3 4.782v2.049h-2.007a.718.718 0 0 0-.67.759v1.517a.718.718 0 0 0 .67.759H16v12.587A10.846 10.846 0 0 1 7.35 25.9H9.7a.387.387 0 0 0 .252-.629L6 19.829l-3.932 5.442a.386.386 0 0 0 .252.629h1.941c1.932 5.3 7.629 7.939 13.75 7.939S29.807 31.2 31.739 25.9h1.941a.386.386 0 0 0 .252-.629ZM15.344 7.123a2.783 2.783 0 0 1 2.667-2.656 2.66 2.66 0 0 1 2.645 2.541 2.873 2.873 0 0 1-2.645 2.771 2.783 2.783 0 0 1-2.667-2.656Z" />
            </svg>
        );
    },
);
