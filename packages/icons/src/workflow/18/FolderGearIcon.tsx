import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FolderGearIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14.7 27A12.293 12.293 0 0 1 34 16.893V9a1 1 0 0 0-1-1H2v21a1 1 0 0 0 1 1h12.084a12.251 12.251 0 0 1-.384-3Z" />
                <path d="M35.193 25.786h-2.125a6.142 6.142 0 0 0-.9-2.179l1.513-1.513a.607.607 0 0 0 0-.858l-.92-.92a.607.607 0 0 0-.858 0l-1.511 1.514a6.145 6.145 0 0 0-2.178-.9v-2.123a.607.607 0 0 0-.607-.607h-1.214a.607.607 0 0 0-.607.607v2.125a6.145 6.145 0 0 0-2.178.9l-1.513-1.513a.607.607 0 0 0-.858 0l-.92.92a.607.607 0 0 0 0 .858l1.513 1.513a6.142 6.142 0 0 0-.9 2.179h-2.123a.607.607 0 0 0-.607.607v1.214a.607.607 0 0 0 .607.607h2.125a6.142 6.142 0 0 0 .9 2.179l-1.513 1.513a.607.607 0 0 0 0 .858l.92.92a.607.607 0 0 0 .858 0l1.513-1.513a6.145 6.145 0 0 0 2.178.9v2.125a.607.607 0 0 0 .607.607h1.214a.607.607 0 0 0 .607-.607v-2.131a6.145 6.145 0 0 0 2.178-.9l1.513 1.513a.607.607 0 0 0 .858 0l.92-.92a.607.607 0 0 0 0-.858l-1.515-1.511a6.142 6.142 0 0 0 .9-2.179h2.125a.607.607 0 0 0 .607-.607v-1.213a.607.607 0 0 0-.609-.607ZM27 30.164A3.164 3.164 0 1 1 30.164 27 3.164 3.164 0 0 1 27 30.164ZM16 6H2V3.5A1.5 1.5 0 0 1 3.5 2h7.672a2 2 0 0 1 1.414.586Z" />
            </svg>
        );
    },
);
