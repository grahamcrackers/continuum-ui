import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BreadcrumbNavigationIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m35.999 18-8.022 9.469a1.5 1.5 0 0 1-1.144.53h-4.226a.5.5 0 0 1-.382-.823L30 18l-7.774-9.177A.5.5 0 0 1 22.607 8h4.226a1.5 1.5 0 0 1 1.144.53Zm-10 0-8.021 9.469a1.5 1.5 0 0 1-1.145.53H1.001a1 1 0 0 1-1-1L0 9a1 1 0 0 1 1-1h15.833a1.5 1.5 0 0 1 1.145.53ZM7.501 18A2.5 2.5 0 1 0 5 20.5 2.5 2.5 0 0 0 7.5 18Zm6.5 0a2.5 2.5 0 1 0-2.5 2.5A2.5 2.5 0 0 0 14 18Zm6.5 0a2.5 2.5 0 1 0-2.5 2.5 2.5 2.5 0 0 0 2.5-2.5Z" />
            </svg>
        );
    },
);
