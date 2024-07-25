import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PolygonSelectIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m30.455 1.829-10.174 6.62L2.665 5.513a1 1 0 0 0-1.073 1.405l6.683 14.507a5.406 5.406 0 0 0-.475 1.944c0 2.737 2.731 4.956 6.1 4.956a7.238 7.238 0 0 0 .915-.075A6.578 6.578 0 0 1 16.1 30.1a2.427 2.427 0 0 1-.237 2.115 5.312 5.312 0 0 1-3.224 1.666.5.5 0 0 0-.413.541l.1 1a.5.5 0 0 0 .579.445c1.055-.186 3.409-.782 4.6-2.505a4.367 4.367 0 0 0 .527-3.779 5.812 5.812 0 0 0-1.117-1.928c.85-.372 3.021-2.093 3.021-3.7l11.319-2.987A1 1 0 0 0 32 20V2.667a1 1 0 0 0-1.545-.838ZM9.8 23.369a2.953 2.953 0 0 1 1.972-2.5 6.41 6.41 0 0 0-.142 3.063 6.544 6.544 0 0 0 1.444 2.331c-1.842-.286-3.274-1.495-3.274-2.894Zm5.751 2.691-.007-.008a10.672 10.672 0 0 1-1.975-2.608 5.8 5.8 0 0 1 .449-3.024c2.17.048 3.984 1.374 3.984 2.949a3.146 3.146 0 0 1-2.451 2.691ZM30 19.229l-10.259 2.708a6.079 6.079 0 0 0-5.84-3.525 6.8 6.8 0 0 0-4.178 1.377L4.2 7.8l16.137 2.69a1 1 0 0 0 .71-.149L30 4.511Z" />
            </svg>
        );
    },
);
