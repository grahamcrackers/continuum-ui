import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CropLightningIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32 20.506a16.063 16.063 0 0 1 6-.381V12a2 2 0 0 0-2-2H20v6h12ZM20 36a15.99 15.99 0 0 1 .506-4H16V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6v20a2 2 0 0 0 2 2h8.125A16.113 16.113 0 0 1 20 36ZM36 24a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm5.119 12.938-7.434 8.5a.769.769 0 0 1-1.288-.8l2.508-5.955-3.548-1.523a1.328 1.328 0 0 1-.475-2.094l7.434-8.5a.769.769 0 0 1 1.288.8L37.1 33.322l3.548 1.523a1.328 1.328 0 0 1 .471 2.093Z" />
            </svg>
        );
    },
);
