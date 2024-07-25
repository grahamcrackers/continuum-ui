import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ReuseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M43.441 11.6a.785.785 0 0 0-.519-.316L33.91 9.778a.5.5 0 0 0-.573.413l-1.4 8.995a.78.78 0 0 0 .135.593.8.8 0 0 0 1.121.186l3.4-2.448A13.923 13.923 0 0 1 34.646 31.6a1.012 1.012 0 0 0 .081 1.383l1.467 1.357a1 1 0 0 0 1.443-.079 17.9 17.9 0 0 0 2.272-19.127l3.352-2.412a.8.8 0 0 0 .18-1.122ZM22.552 31.956a.786.786 0 0 0-.577-.19.8.8 0 0 0-.739.863l.324 4.057a13.794 13.794 0 0 1-10.955-8.877 1 1 0 0 0-1.214-.633l-1.92.563a1 1 0 0 0-.671 1.287 17.838 17.838 0 0 0 15.093 11.74l.337 4.221a.8.8 0 0 0 .868.734.783.783 0 0 0 .539-.28l5.954-6.932a.5.5 0 0 0-.057-.7ZM26.815 5.156A17.963 17.963 0 0 0 9.377 12.1l-3.853-2.021a.8.8 0 0 0-1.084.342.781.781 0 0 0-.05.606l2.693 8.732a.5.5 0 0 0 .627.328l8.665-2.787a.779.779 0 0 0 .469-.387.8.8 0 0 0-.336-1.085l-3.56-1.863A13.99 13.99 0 0 1 25.97 9.069a1 1 0 0 0 1.157-.736l.473-1.942a1.011 1.011 0 0 0-.785-1.235Z" />
            </svg>
        );
    },
);
