import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CropRotateIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 30V11a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3v15a1 1 0 0 0 1 1h15v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM38 4.5h-1V.8a.8.8 0 0 0-.806-.8.781.781 0 0 0-.559.236L30.11 5.687a.5.5 0 0 0 0 .626l5.524 5.451a.785.785 0 0 0 .56.236.8.8 0 0 0 .806-.8V7.5h1a6 6 0 0 1 6 6v.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-.5a9 9 0 0 0-9-9ZM17.89 41.687l-5.524-5.451a.785.785 0 0 0-.56-.236.8.8 0 0 0-.806.8v3.7h-1a6 6 0 0 1-6-6V34a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v.5a9 9 0 0 0 9 9h1v3.7a.8.8 0 0 0 .806.8.781.781 0 0 0 .559-.236l5.525-5.451a.5.5 0 0 0 0-.626Z" />
                <path d="M30 18H20v-4h13a1 1 0 0 1 1 1v13h-4Z" />
            </svg>
        );
    },
);
