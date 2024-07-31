"use client";

import * as React from "react";
import { MoreIcon } from "@continuum-ui/icons/workflow/18";
import { ActionButton as Button } from "@continuum-ui/spectrum/components/action-button";
import { CheckboxInput, CheckboxRoot } from "@continuum-ui/spectrum/components/checkbox";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@continuum-ui/spectrum/components/dropdown-menu";
import { Input } from "@continuum-ui/spectrum/components/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@continuum-ui/spectrum/components/table";
import { CaretSortIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import {
    ColumnDef,
    ColumnFiltersState,
    ColumnResizeMode,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    Header,
    SortingState,
    Table as TableProps,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table";

import "./index.css";

// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@continuum-ui/spectrum/table";

const data: Payment[] = [
    {
        id: "m5gr84i9",
        amount: 316,
        status: "success",
        email: "ken99@yahoo.com",
    },
    {
        id: "3u1reuv4",
        amount: 242,
        status: "success",
        email: "Abe45@gmail.com",
    },
    {
        id: "derv1ws0",
        amount: 837,
        status: "processing",
        email: "Monserrat44@gmail.com",
    },
    {
        id: "5kma53ae",
        amount: 874,
        status: "success",
        email: "Silas22@gmail.com",
    },
    {
        id: "bhqecj4p",
        amount: 721,
        status: "failed",
        email: "carmella@hotmail.com",
    },
];

export type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
};

export const columns: ColumnDef<Payment>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <CheckboxRoot>
                <CheckboxInput
                    checked={
                        table.getIsAllPageRowsSelected() /* || (table.getIsSomePageRowsSelected() && "indeterminate") */
                    }
                    onChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            </CheckboxRoot>
        ),
        cell: ({ row }) => (
            <CheckboxRoot>
                <CheckboxInput
                    checked={row.getIsSelected()}
                    onChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            </CheckboxRoot>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => <div className="flex items-center h-full capitalize">{row.getValue("status")}</div>,
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button variant="quiet" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Email
                    <CaretSortIcon className="w-4 h-4 ml-2" />
                </Button>
            );
        },
        cell: ({ row }) => <div className="flex items-center h-full lowercase ">{row.getValue("email")}</div>,
    },
    {
        accessorKey: "amount",
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"));

            // Format the amount as a dollar amount
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount);

            return <div className="flex items-center h-full font-medium text-right ">{formatted}</div>;
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="quiet" className="w-8 h-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreIcon size="sm" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

type TableResizerProps<TData, TValue> = {
    header: Header<TData, TValue>;
    table: TableProps<TData>;
    columnResizeMode: ColumnResizeMode;
};

export function TableResizer<TData, TValue>({ header, table, columnResizeMode }: TableResizerProps<TData, TValue>) {
    return (
        <div
            {...{
                onDoubleClick: () => header.column.resetSize(),
                onMouseDown: header.getResizeHandler(),
                onTouchStart: header.getResizeHandler(),
                className: `resizer ${table.options.columnResizeDirection} ${
                    header.column.getIsResizing() ? "isResizing" : ""
                }`,
                style: {
                    transform:
                        columnResizeMode === "onEnd" && header.column.getIsResizing()
                            ? `translateX(${
                                  (table.options.columnResizeDirection === "rtl" ? -1 : 1) *
                                  (table.getState().columnSizingInfo.deltaOffset ?? 0)
                              }px)`
                            : "",
                },
            }}
        />
    );
}

export function DataTableDemo() {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});
    const [columnResizeMode] = React.useState<ColumnResizeMode>("onChange");

    const table = useReactTable({
        data,
        columns,
        columnResizeMode,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                <div className="spectrum-Textfield spectrum-Textfield--sizeM">
                    <Input
                        placeholder="Filter emails..."
                        value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                        onChange={(event) => table.getColumn("email")?.setFilterValue(event.target.value)}
                    />
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="ml-auto">
                            Columns <ChevronDownIcon className="w-4 h-4 ml-2" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) => column.toggleVisibility(!!value)}
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                );
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="relative w-full overflow-auto">
            <Table
                style={{
                    width: table.getCenterTotalSize(),
                }}
            >
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead
                                    key={header.id}
                                    {...{
                                        colSpan: header.colSpan,
                                        style: {
                                            width: header.getSize(),
                                        },
                                    }}
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(header.column.columnDef.header, header.getContext())}
                                    <TableResizer {...{ table, header, columnResizeMode }} />
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody className="w-full">
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            </div>

            <div className="flex items-center justify-end py-4 space-x-2">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length}{" "}
                    row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                        Previous
                    </Button>
                    <Button size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}
