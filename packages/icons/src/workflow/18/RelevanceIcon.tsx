import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RelevanceIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4.225 15.585a13.987 13.987 0 0 1 11.36-11.36A.494.494 0 0 0 16 3.74V2.721a.5.5 0 0 0-.578-.5 15.992 15.992 0 0 0-13.2 13.2.5.5 0 0 0 .5.578H3.74a.494.494 0 0 0 .485-.414ZM20.415 4.225a13.987 13.987 0 0 1 11.36 11.36.494.494 0 0 0 .485.415h1.019a.5.5 0 0 0 .5-.578 15.992 15.992 0 0 0-13.2-13.2.5.5 0 0 0-.578.5V3.74a.494.494 0 0 0 .414.485ZM15.585 31.775a13.987 13.987 0 0 1-11.36-11.36A.494.494 0 0 0 3.74 20H2.721a.5.5 0 0 0-.5.578 15.992 15.992 0 0 0 13.2 13.2.5.5 0 0 0 .578-.5V32.26a.494.494 0 0 0-.414-.485ZM31.775 20.415a13.987 13.987 0 0 1-11.36 11.36.494.494 0 0 0-.415.485v1.019a.5.5 0 0 0 .578.5 15.992 15.992 0 0 0 13.2-13.2.5.5 0 0 0-.5-.578H32.26a.494.494 0 0 0-.485.414Z" />
                <circle cx="18" cy="18" r="6" />
            </svg>
        );
    },
);
