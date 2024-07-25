import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EditInLightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m35.645 16.685-4.324-4.323a.912.912 0 0 0-.65-.265h-.028a1.035 1.035 0 0 0-.7.3L14.711 27.639a.736.736 0 0 0-.188.315l-2.444 7.34c-.085.282.345.638.588.638a.231.231 0 0 0 .046-.005c.207-.048 6.26-2.118 7.344-2.444a.733.733 0 0 0 .31-.187L35.6 18.059a1.03 1.03 0 0 0 .3-.662.916.916 0 0 0-.255-.712ZM14.039 33.973l1.978-5.519 3.54 3.531c-1.621.487-4.118 1.57-5.518 1.988ZM27 2H3a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h9.077l.225-.678a2.7 2.7 0 0 1 .672-1.1L13.2 26H4V4h22v9.166l2-2V3a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
