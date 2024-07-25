import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GameIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M44.289 40.511A3.976 3.976 0 0 0 48 36.382a4.659 4.659 0 0 0-.2-1.334l-3.445-11.513c-2.35-7.856-8.954-14.7-16.391-14.7h-7.928C12.6 8.831 6 15.679 3.645 23.535L.2 35.048a4.659 4.659 0 0 0-.2 1.334 3.976 3.976 0 0 0 3.711 4.129 3.408 3.408 0 0 0 1.323-.273l2.2-1.762A26.7 26.7 0 0 1 24 32.443a26.7 26.7 0 0 1 16.771 6.033l2.2 1.762a3.408 3.408 0 0 0 1.318.273ZM20.608 24.845a7.2 7.2 0 1 1-5.974-8.245 7.2 7.2 0 0 1 5.974 8.245ZM32.2 24a4.2 4.2 0 1 1 4.2-4.2 4.2 4.2 0 0 1-4.2 4.2Zm6 8.4a4.2 4.2 0 1 1 4.2-4.2 4.2 4.2 0 0 1-4.2 4.2Z" />
                <circle cx="13.5" cy="23.711" r="4" />
            </svg>
        );
    },
);
