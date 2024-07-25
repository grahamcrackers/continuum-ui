import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileWordIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M28 4v12h12L28 4z" />
                <path d="M26 20a2 2 0 0 1-2-2V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V20Zm4.256 19.466a.7.7 0 0 1-.71.509h-2.462a.679.679 0 0 1-.672-.406l-.544-2.284c-.534-2.3-1.212-5.221-1.691-7.378-.561 2.359-1.419 5.606-2.046 7.975l-.4 1.515a.7.7 0 0 1-.712.578h-2.413a.756.756 0 0 1-.68-.424L14 24.559l.183-.343.151-.178.349-.038h2.579a.657.657 0 0 1 .721.591c1.117 4.685 1.733 7.387 2.092 9.1.114-.474.248-1.02.4-1.654.417-1.712.994-4.078 1.794-7.467a.686.686 0 0 1 .713-.57h2.642a.667.667 0 0 1 .658.53l.29 1.219a476.025 476.025 0 0 1 1.826 7.925c.385-1.9.994-4.769 1.959-9.1a.7.7 0 0 1 .715-.574H33.7l.287.222a.681.681 0 0 1 .137.562Z" />
            </svg>
        );
    },
);
