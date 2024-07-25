import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CameraRefreshIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M15.8 26.862a12.346 12.346 0 0 1 .525-2.835 8.2 8.2 0 1 1 9.854-8.186c.271-.021.541-.042.816-.042a11.213 11.213 0 0 1 6.435 2.14l.57-.576V7a1 1 0 0 0-1-1h-6.05L23.6 2.326A1 1 0 0 0 22.859 2h-9.718a1 1 0 0 0-.739.326L9.05 6H3a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h12.733Z" />
                <path d="M23.975 16.247c0-.084.025-.163.025-.247a6 6 0 1 0-6.8 5.919 11.413 11.413 0 0 1 6.775-5.672ZM27 33.363a6.143 6.143 0 0 1-4.718-2.1l2.282-2.287H18.1v6.477l2.476-2.481A8.648 8.648 0 0 0 27 35.9a9.2 9.2 0 0 0 8.9-8.9h-2.255A6.812 6.812 0 0 1 27 33.363ZM33.485 21.026A9.112 9.112 0 0 0 27 18.1a9.2 9.2 0 0 0-8.9 8.9h2.255A6.812 6.812 0 0 1 27 20.636a6.214 6.214 0 0 1 4.817 2.093l-2.245 2.293H35.9V18.56Z" />
            </svg>
        );
    },
);
