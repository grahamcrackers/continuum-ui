import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RelevanceIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6.552 19.622a18.008 18.008 0 0 1 13.07-13.07.5.5 0 0 0 .378-.478V2.986a.506.506 0 0 0-.606-.5 22.016 22.016 0 0 0-16.9 16.9.506.506 0 0 0 .5.606h3.08a.5.5 0 0 0 .478-.37ZM28.378 6.552a18.008 18.008 0 0 1 13.07 13.07.5.5 0 0 0 .478.378h3.088a.506.506 0 0 0 .5-.606 22.016 22.016 0 0 0-16.9-16.9.506.506 0 0 0-.606.5v3.08a.5.5 0 0 0 .37.478ZM19.622 41.448a18.008 18.008 0 0 1-13.07-13.07.5.5 0 0 0-.478-.378H2.986a.506.506 0 0 0-.5.606 22.016 22.016 0 0 0 16.9 16.9.506.506 0 0 0 .606-.5v-3.08a.5.5 0 0 0-.37-.478ZM41.448 28.378a18.008 18.008 0 0 1-13.07 13.07.5.5 0 0 0-.378.478v3.088a.506.506 0 0 0 .606.5 22.016 22.016 0 0 0 16.9-16.9.506.506 0 0 0-.5-.606h-3.08a.5.5 0 0 0-.478.37Z" />
                <circle cx="24" cy="24" r="8" />
            </svg>
        );
    },
);
