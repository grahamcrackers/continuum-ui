import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AirplaneIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m44.24 2.028-.809.158a11.812 11.812 0 0 0-6.09 3.24l-7.919 7.92-8.46-2.307.727-.728a1.854 1.854 0 1 0-2.621-2.622l-2.226 2.226L5.847 6.917a2.466 2.466 0 0 0-2.393.635L2 9.006 22.418 20.35 18.768 24a10.458 10.458 0 0 0-1.077 1.264l-4.124 5.696-10.334-.462L2 31.73l7.852 4.362-3.495 4.447a.79.79 0 0 0 1.103 1.103l4.447-3.495L16.269 46l1.233-1.233-.462-10.334 5.696-4.124A10.458 10.458 0 0 0 24 29.232l3.651-3.65L38.994 46l1.454-1.454a2.466 2.466 0 0 0 .635-2.393l-3.265-11.971 1.871-1.871a1.854 1.854 0 0 0-2.621-2.622l-.373.373-2.041-7.484 7.919-7.919a11.817 11.817 0 0 0 3.241-6.091l.158-.807a1.477 1.477 0 0 0-1.733-1.733Z" />
            </svg>
        );
    },
);
