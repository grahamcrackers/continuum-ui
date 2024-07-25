import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphPieIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16 12.661V2.73a.515.515 0 0 0-.588-.507 15.952 15.952 0 0 0-8.384 4.163.511.511 0 0 0 .057.779l8.121 5.9a.5.5 0 0 0 .794-.404Zm4-9.932v30.542a.513.513 0 0 0 .587.506 15.986 15.986 0 0 0 0-31.555.513.513 0 0 0-.587.507ZM2 18a15.993 15.993 0 0 0 13.413 15.777.513.513 0 0 0 .587-.506V19.707a.5.5 0 0 0-.206-.4L4.31 10.959a.51.51 0 0 0-.756.184A15.872 15.872 0 0 0 2 18Z" />
            </svg>
        );
    },
);
