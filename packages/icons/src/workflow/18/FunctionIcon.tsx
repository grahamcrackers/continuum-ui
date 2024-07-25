import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FunctionIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6.424 33.412a7.348 7.348 0 0 1-3.283-.712c-.118-.057-.18-.087-.137-.412l.457-3.96a8.417 8.417 0 0 0 3.006.628c2.441 0 3.111-1.769 3.689-5.729l.038-.281a14.007 14.007 0 0 0 .189-1.662c.02-.383.163-2.374.163-2.374H4.892l.949-2.915a.481.481 0 0 1 .459-.334h4.508s.263-2.887.423-3.979l.161-1.138C12.325 3.789 15.126.508 19.955.508A5.609 5.609 0 0 1 22.46.95a.294.294 0 0 1 .23.333l-.546 3.723c-.031.192-.1.192-.123.192a6.326 6.326 0 0 0-2.2-.408c-3.058 0-3.768 3.149-4.325 6.953l-.129.929c-.1.7-.281 2.987-.281 2.987h5.962l-.948 2.916a.484.484 0 0 1-.459.333h-4.8s-.13 2.092-.141 2.426a17.241 17.241 0 0 1-.258 2.231c-.727 5.114-2.201 9.847-8.018 9.847Zm23.734.442a318.25 318.25 0 0 1-3.751-5.657c.946-1.351 2.644-4.062 3.476-5.388l.046-.075a.374.374 0 0 0 .023-.39.385.385 0 0 0-.36-.18h-2.53a.419.419 0 0 0-.431.246l-2.192 3.834-2.071-3.773a.486.486 0 0 0-.511-.307h-2.864a.393.393 0 0 0-.372.207.388.388 0 0 0 .046.4l3.488 5.56c-.561.83-1.285 1.953-1.986 3.041-.586.91-1.155 1.795-1.594 2.451a.383.383 0 0 0-.035.4.4.4 0 0 0 .356.213h2.557a.475.475 0 0 0 .478-.268l2.253-3.85 2.186 3.8a.592.592 0 0 0 .526.313h2.935a.39.39 0 0 0 .394-.223.328.328 0 0 0-.067-.354Z" />
            </svg>
        );
    },
);
