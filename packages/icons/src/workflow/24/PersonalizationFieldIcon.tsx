import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PersonalizationFieldIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42 2H6a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM16 39a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Zm24 0a1 1 0 0 1-1 1H21a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1Zm0-9h-3.455c-1.238-1.822-3.517-3.556-7.631-3.974a1.334 1.334 0 0 1-1.154-1.34v-1.933a1.341 1.341 0 0 1 .34-.863 10.208 10.208 0 0 0 2.322-6.372C30.422 10.695 27.865 8 24 8s-6.5 2.8-6.5 7.517a10.324 10.324 0 0 0 2.434 6.372 1.336 1.336 0 0 1 .341.863v1.925a1.328 1.328 0 0 1-1.158 1.34C14.876 26.388 12.6 28.143 11.4 30H8V6h32Z" />
            </svg>
        );
    },
);
