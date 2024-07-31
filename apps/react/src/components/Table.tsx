import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import * as React from "react";
import { tableVariants } from "./table-variants";

interface TableRootProps extends React.TableHTMLAttributes<HTMLTableElement>, VariantProps<typeof tableVariants> {
    asChild?: boolean;
}

const TableRoot = React.forwardRef<HTMLTableElement, TableRootProps>(
    ({ variant, quiet, scrollable, className, asChild = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "table";
        return (
            // <div className={tableVariants({ variant, quiet, scrollable, className })} style={{ height: "200px"}}>
                <Comp className={tableVariants({ scrollable, variant, quiet, className })} ref={ref} {...props}>
                {/* <Comp className={clsx("spectrum-Table-main")}> */}
                    {children}
                </Comp>
            // </div>
        );
    },
);

///

interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    asChild?: boolean;
}

const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
    ({ className, asChild = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "thead";

        return (
            <Comp className={clsx("spectrum-Table-head", className)} ref={ref} {...props}>
                {children}
            </Comp>
        );
    },
);

///

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    asChild?: boolean;
}

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
    ({ className, asChild = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "tbody";
        return (
            <Comp className={clsx("spectrum-Table-body", className)} ref={ref} {...props}>
                {children}
            </Comp>
        );
    },
);

///

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    header?: boolean;
    asChild?: boolean;
}

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
    ({ header = false, className, asChild = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "tr";
        return (
            <Comp className={clsx(!header && "spectrum-Table-row", className)} ref={ref} {...props}>
                {children}
            </Comp>
        );
    },
);

///

interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
    asChild?: boolean;
}

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
    ({ className, asChild = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "td";
        return (
            <Comp className={clsx("spectrum-Table-cell", className)} ref={ref} {...props}>
                {children}
            </Comp>
        );
    },
);

///

interface TableHeaderCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
    sortable?: boolean;
    asChild?: boolean;
}

const TableHeaderCell = React.forwardRef<HTMLTableCellElement, TableHeaderCellProps>(
    ({ className, asChild = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "td";
        return (
            <Comp className={clsx("spectrum-Table-headCell", className)} ref={ref} {...props}>
                {children}
            </Comp>
        );
    },
);

const Table = Object.assign(
    {},
    {
        Root: TableRoot,
        Header: TableHeader,
        Body: TableBody,
        Row: TableRow,
        Cell: TableCell,
        HeaderCell: TableHeaderCell,
    },
);

export { Table };

export type { TableRootProps };
