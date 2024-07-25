import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GlobeExitIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M7.146 13.769C6.1 9.982 8.8 8.352 8.534 5.116A16.073 16.073 0 0 0 2 18c0 9.112 7.943 14.542 13.554 15.732a6.9 6.9 0 0 0 1.046.168c2-5.1-1.773-10.789-4.263-14.494-2.075-3.088-3.959-1.18-5.191-5.637ZM28.874 21.3a.5.5 0 0 0-.874.332v4.045h-7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h7V35.5a.5.5 0 0 0 .874.332L36 28.681Z" />
                <path d="M32.781 19.031c-1.611-.613-2.992 1.475-3.114-4.164a5.766 5.766 0 0 1 1.666-4 3.1 3.1 0 0 1 .73-.349c-.192-.349-.4-.684-.62-1.018-.037.019-.07.044-.109.062-1.25.583-1.423.755-2 0a1.576 1.576 0 0 1 .347-2.326 15.984 15.984 0 0 0-11.655-5.221c2.027.028 4.446 1.53 3.213 3.929.186-.381-4.027-1.29-4.6-1.29-.772 0 1.575-2.889 1.36-2.639a16.085 16.085 0 0 0-6.615 1.423c1.094.706 2.311.46 3.544.764a3.014 3.014 0 0 1 1.1.452 3.711 3.711 0 0 0-1.1-.452c-1.818-.211.88 4.777.777 4.114.5-2.292 3.612-3.176 4.565-.147a3.742 3.742 0 0 1-.837 2.265c-1.411 1.854-1.7 5.154-2.4 4.31-6.591-2.7-5.865.871-3.7 3.258 3.464 3.82 1.706.392 6.242 2.392C22 21.462 24.74 21.989 26 22.578v-.942a2.5 2.5 0 0 1 4.367-1.662l2.819 2.917a15.528 15.528 0 0 0 .748-3.508 2.393 2.393 0 0 1-1.153-.352Z" />
            </svg>
        );
    },
);
