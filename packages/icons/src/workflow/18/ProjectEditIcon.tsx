import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ProjectEditIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M19.521 24H4V4h28v10.441a2.722 2.722 0 0 1 .739.511L34 16.213V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h14.521Z" />
                <path d="m35.645 20.685-4.324-4.323a1.083 1.083 0 0 0-.678-.265 1.13 1.13 0 0 0-.7.3L18.711 27.639a.736.736 0 0 0-.188.315l-2.444 7.34c-.085.282.345.638.588.638a.231.231 0 0 0 .046-.005c.207-.048 6.26-2.118 7.344-2.444a.733.733 0 0 0 .31-.187L35.6 22.059a1.03 1.03 0 0 0 .3-.662.916.916 0 0 0-.255-.712ZM18.039 33.973l1.978-5.519 3.54 3.531c-1.621.487-4.118 1.57-5.518 1.988Z" />
            </svg>
        );
    },
);
