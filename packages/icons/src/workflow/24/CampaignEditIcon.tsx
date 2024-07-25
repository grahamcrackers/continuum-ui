import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CampaignEditIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="24" cy="24" r="6" />
                <path d="M10.157 26H4.1A20 20 0 0 0 22 43.9v-6.06A14.015 14.015 0 0 1 10.157 26ZM10.157 22A14.015 14.015 0 0 1 22 10.16V4.1A20 20 0 0 0 4.1 22ZM37.842 22H43.9A20 20 0 0 0 26 4.1v6.06A14.015 14.015 0 0 1 37.842 22ZM47.667 29.01l-4.68-4.68a.987.987 0 0 0-.7-.287h-.031a1.112 1.112 0 0 0-.753.33L27.054 38.82a.812.812 0 0 0-.2.342l-2.813 8.112c-.092.306.373.69.636.69a.221.221 0 0 0 .05-.005c.224-.052 6.944-2.461 8.117-2.814a.8.8 0 0 0 .336-.2L47.624 30.5a1.115 1.115 0 0 0 .328-.717.992.992 0 0 0-.285-.773ZM32.179 43.645c-1.754.527-4.505 1.747-6.02 2.2l2.189-6.022Z" />
            </svg>
        );
    },
);
