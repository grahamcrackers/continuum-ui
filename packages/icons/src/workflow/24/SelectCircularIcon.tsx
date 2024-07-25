import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SelectCircularIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6 24c0-.46.018-.916.051-1.366l-3.988-.3A21.906 21.906 0 0 0 2 24a21.848 21.848 0 0 0 .9 6.241L6.73 29.1A17.82 17.82 0 0 1 6 24ZM8.155 32.548l-3.519 1.9a22.063 22.063 0 0 0 4.978 6.193l2.618-3.025a18.057 18.057 0 0 1-4.077-5.068ZM9.632 13.153l-3.191-2.41a21.862 21.862 0 0 0-3.569 7.1l3.84 1.118a17.934 17.934 0 0 1 2.92-5.808ZM17.771 7.106l-1.383-3.752A21.9 21.9 0 0 0 9.55 7.41l2.629 3.016a17.917 17.917 0 0 1 5.592-3.32ZM41.6 20.215l3.91-.834a21.778 21.778 0 0 0-3.049-7.347l-3.355 2.18a17.8 17.8 0 0 1 2.494 6.001ZM39.6 8.489a21.924 21.924 0 0 0-6.528-4.536L31.421 7.6a17.977 17.977 0 0 1 5.344 3.714ZM13.351 43.258a21.869 21.869 0 0 0 7.541 2.525l.562-3.961a17.876 17.876 0 0 1-6.166-2.064ZM34.7 38.476l2.379 3.215a21.947 21.947 0 0 0 5.434-5.8l-3.363-2.164a18.026 18.026 0 0 1-4.45 4.749ZM42 24a17.946 17.946 0 0 1-1.17 6.4l3.739 1.422A21.939 21.939 0 0 0 46 24v-.082ZM25.185 41.962l.258 3.992a21.849 21.849 0 0 0 7.712-1.943l-1.667-3.637a17.831 17.831 0 0 1-6.303 1.588ZM28.745 2.513a22.4 22.4 0 0 0-7.939-.283l.574 3.959a18.362 18.362 0 0 1 6.506.231Z" />
            </svg>
        );
    },
);
