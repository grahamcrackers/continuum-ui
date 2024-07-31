import { cn } from "@continuum-ui/utils";
import { VariantProps } from "class-variance-authority";
import * as React from "react";

import { tableHeadVariants, tableVariants } from "./variants";

export interface TableProps extends React.HTMLAttributes<HTMLTableElement>, VariantProps<typeof tableVariants> {}

const Table = React.forwardRef<HTMLTableElement, TableProps>(({ className, size, ...props }, ref) => (
    // <div className="relative w-full overflow-auto">
        <table ref={ref} className={cn(tableVariants({ size, className }))} {...props} />
    // </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
    ({ className, ...props }, ref) => <thead ref={ref} className={cn("spectrum-Table-head", className)} {...props} />,
);
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
    ({ className, ...props }, ref) => <tbody ref={ref} className={cn("spectrum-Table-body", className)} {...props} />,
);
TableBody.displayName = "TableBody";

// const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
//     ({ className, ...props }, ref) => (
//         <tfoot
//             ref={ref}
//             className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)}
//             {...props}
//         />
//     ),
// );
// TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
    ({ className, ...props }, ref) => <tr ref={ref} className={cn("spectrum-Table-row", className)} {...props} />,
);
TableRow.displayName = "TableRow";

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement>, VariantProps<typeof tableHeadVariants> {}

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
    ({ className, sortable, children, ...props }, ref) => (
        <th ref={ref} className={cn(tableHeadVariants({ sortable, className }))} {...props}>
            {children}
        </th>
    ),
);
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
    ({ className, ...props }, ref) => (
        <td ref={ref} className={cn("spectrum-Table-cell py-2", className)} {...props} />
    ),
);
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
    ({ className, ...props }, ref) => (
        <caption ref={ref} className={cn("mt-4 text-sm text-muted-foreground", className)} {...props} />
    ),
);
TableCaption.displayName = "TableCaption";

export { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow };
