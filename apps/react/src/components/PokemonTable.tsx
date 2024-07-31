
import { Arrow600Icon } from "@continuum-ui/icons/large";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import * as React from "react";
import pokeData from "../data/pokemon.json";
import { Table } from "./Table";

export type Pokemon = {
    id: number;
    name: string;
    type1: string;
    type2?: string;
    ability1: string;
    ability2?: string;
    abilityH?: string;
    hp: number;
    attack: number;
    defense: number;
    spattack: number;
    spdefense: number;
    speed: number;
    total: number;
    weight: string;
    height: string;
    percentM?: string | number;
    percentF?: string | number;
};

export function ExampleTable() {
    return (
        <Table.Root>
            <Table.Header>
                <Table.Row header>
                    <th
                        className="spectrum-Table-headCell is-sortable is-sorted-desc"
                        aria-sort="descending"
                        tabIndex={0}
                    >
                        <Arrow600Icon
                            aria-hidden="true"
                            focusable="false"
                            className="spectrum-UIIcon-ArrowDown300 spectrum-Table-sortedIcon"
                        />
                        <span className="spectrum-Table-columnTitle">Column title</span>
                    </th>
                    <th className="spectrum-Table-headCell is-sortable" aria-sort="none" tabIndex={0}>
                        <Arrow600Icon
                            aria-hidden="true"
                            focusable="false"
                            className="spectrum-UIIcon-ArrowDown300 spectrum-Table-sortedIcon"
                        />
                        <span className="spectrum-Table-columnTitle">Column title</span>
                    </th>
                    <th className="spectrum-Table-headCell">Column title</th>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>Row Item Alpha</Table.Cell>
                    <Table.Cell>Row Item Alpha</Table.Cell>
                    <Table.Cell>Row Item Alpha</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Row Item Bravo</Table.Cell>
                    <Table.Cell>Row Item Bravo</Table.Cell>
                    <Table.Cell>Row Item Bravo</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Row Item Charlie</Table.Cell>
                    <Table.Cell>Row Item Charlie</Table.Cell>
                    <Table.Cell>Row Item Charlie</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Row Item Delta</Table.Cell>
                    <Table.Cell>Row Item Delta</Table.Cell>
                    <Table.Cell>Row Item Delta</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Row Item Echo</Table.Cell>
                    <Table.Cell>Row Item Echo</Table.Cell>
                    <Table.Cell>Row Item Echo</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table.Root>
    );
}

///

const columnHelper = createColumnHelper<Pokemon>();

const columns = [
    columnHelper.accessor("id", {
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("hp", {
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("attack", {
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("defense", {
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("speed", {
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("total", {
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("weight", {
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("height", {
        cell: (info) => info.getValue(),
    }),
];

export function PokemonTable() {
    const [data] = React.useState(() => [...pokeData]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="spectrum-Table-scroller spectrum-Table spectrum-Table--emphasized spectrum-Table--sizeM" style={{height: "250px"}}>
        <table className="spectrum-Table-main">
            <Table.Header>
                {table.getHeaderGroups().map((headerGroup) => (
                    <Table.Row header key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <Table.HeaderCell key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(header.column.columnDef.header, header.getContext())}
                            </Table.HeaderCell>
                        ))}
                    </Table.Row>
                ))}
            </Table.Header>
            <Table.Body>
                {table.getRowModel().rows.map((row) => (
                    <Table.Row key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <Table.Cell key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </Table.Cell>
                        ))}
                    </Table.Row>
                ))}
            </Table.Body>
        </table>
        </div>
    );
}
