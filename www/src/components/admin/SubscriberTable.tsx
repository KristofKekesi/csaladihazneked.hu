"use client";

import {
	CaretDownIcon,
	CaretSortIcon,
	CaretUpIcon,
} from "@radix-ui/react-icons";
import {
	ColumnDef,
	ColumnFiltersState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
	VisibilityState,
} from "@tanstack/react-table";
import { 
	listNewsletterSubscribers, 
	removeSubscriberFromNewsletter, 
} from "@/lib/mysql_api";
import {
	Table,
	TableBody,
	TableCell, 
	TableHead,
	TableHeader,
	TableRow
} from "@/components/ui/Table";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

import { Subscriber } from "@/types/Subscriber";
import { Trash2 } from "lucide-react";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

type Params = {
	password: string
}

/**
 * @param password Password to auth the API calls.
 * @returns A table component with the newsletter subscribers.
 */
export function SubscriberTable(params: Params) {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = useState({});

	const [data, setData] = useState<Subscriber[]>([]);

	const [sortingBy, setSortingBy] = useState<string>("");

	useEffect(() => {
		/**
		 * Wrapper function to run async function in useEffect.
		 */
		async function getData() {
			setData( await listNewsletterSubscribers({ password: params.password }) );
		}
	
		getData();
	}, [params.password]);

	const columns: ColumnDef<Subscriber>[] = [
		{
			accessorKey: "emailAddress",
			header: ({ column }) => {
				return (
					<Button
						variant="ghost"
						onClick={() => {
							column.toggleSorting(column.getIsSorted() === "asc");
							setSortingBy("emailAddress");
						}}
					>
						Email
						{ sortingBy === "emailAddress" ?
							<>{ column.getIsSorted() === "asc" ? 
								<CaretUpIcon className="ml-2 h-4 w-4" /> :
								<CaretDownIcon className="ml-2 h-4 w-4" />
							}</> :
							<CaretSortIcon className="ml-2 h-4 w-4" />
						}
					</Button>
				);
			},
			cell: ({ row }) => <div className="lowercase">{row.getValue("emailAddress")}</div>,
		},
		{
			accessorKey: "timestampSubscribed",
			header: ({ column }) => {
				return (
					<Button
						variant="ghost"
						onClick={() => {
							column.toggleSorting(column.getIsSorted() === "asc");
							setSortingBy("timestampSubscribed");
						}}
					>
						Feliratkozás dátuma
						{ sortingBy === "timestampSubscribed" ?
							<>{ column.getIsSorted() === "asc" ? 
								<CaretUpIcon className="ml-2 h-4 w-4" /> :
								<CaretDownIcon className="ml-2 h-4 w-4" />
							}</> :
							<CaretSortIcon className="ml-2 h-4 w-4" />
						}
					</Button>
				);
			},
			cell: ({ row }) => 
			new Date(row.getValue("timestampSubscribed")).toLocaleString("hu-HU"),
		},
		{
			id: "actions",
			enableHiding: false,
			header: "Törlés",
			cell: ({ row }) => {
				const subscriber = row.original;
		
				/**
				 * On click event handler function.
				 */
				function onClick(event: any) {
				event.preventDefault();
				removeSubscriberFromNewsletter({ subscriber });
				setData(data.filter((iteration) => subscriber !== iteration));
				}
		
				return (
				<Button
				variant="outline"
				size="sm"
				>
					<Trash2 className="h-4 w-4" onClick={ onClick } /></Button>
				);
			},
		},
	];

	const table = useReactTable({
		data,
		columns,
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
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{ headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{ header.isPlaceholder ? null
												: flexRender(
													header.column.columnDef.header,
													header.getContext()
												)
											}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{ table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
								>
									{ row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{ flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									Nincs találat.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
