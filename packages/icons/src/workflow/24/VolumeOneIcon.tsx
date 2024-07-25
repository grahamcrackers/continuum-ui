import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const VolumeOneIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M9.275 16.1H2a1.994 1.994 0 0 0-2 1.987v11.921A1.994 1.994 0 0 0 2 32h7.275a2 2 0 0 1 1.279.46l9.8 9.244A1 1 0 0 0 22 40.938V7.155a1 1 0 0 0-1.642-.762l-9.8 9.245a2.011 2.011 0 0 1-1.283.462ZM28.05 24a5.938 5.938 0 0 1-1.142 3.5 1.959 1.959 0 0 0-.383 1.142 1.687 1.687 0 0 0 .407 1.109l.186.217a1.842 1.842 0 0 0 1.24.635 1.678 1.678 0 0 0 1.493-.634 9.727 9.727 0 0 0 0-11.944 1.662 1.662 0 0 0-1.35-.641 1.845 1.845 0 0 0-1.383.642l-.186.217a1.675 1.675 0 0 0-.4 1.038 1.942 1.942 0 0 0 .381 1.213A5.94 5.94 0 0 1 28.05 24Z" />
            </svg>
        );
    },
);
