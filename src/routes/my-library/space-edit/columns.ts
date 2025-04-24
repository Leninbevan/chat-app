import DataTableCheckbox from "$lib/components/ui/data-table/data-table-checkbox.svelte";
import {
  renderComponent,
  renderSnippet,
} from "$lib/components/ui/data-table/index.js";
import type { ColumnDef } from "@tanstack/table-core";
import { createRawSnippet } from "svelte";

type ActivityLog  = {
  id: string;
  status: "Pending" | "Processing" | "Indexed" | "Failed";
  characters: number;
  actions: string;
  source: string;
  type?: string;
  date: string;
};

export const columns: ColumnDef<ActivityLog >[] = [
  {
    id: "select",
    cell: ({ row }: { row: any }) =>
      renderComponent(DataTableCheckbox, {
        checked: row.getIsSelected(),
        onCheckedChange: (value) => row.toggleSelected(!!value),
        "aria-label": "Select row",
      }),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: () => {
      const statusHeaderSnippet = createRawSnippet(() => {
        return {
          render: () => `<div class="text-center uppercase">Status</div>`,
        };
      });
      return renderSnippet(statusHeaderSnippet, "");
    },
    cell: ({ row }) => {
      const statusSnippet = createRawSnippet<[string]>((getStatus) => {
        const status = getStatus();
        return {
          render: () => `<div class="text-center capitalize rounded-[13px] bg-[#81d8818a] text-[#248424] font-medium w-fit px-2 mx-auto">${status}</div>`,
        };
      });
      return renderSnippet(statusSnippet, row.getValue("status"));
    },
  },
  {
    accessorKey: "characters",
    header: () => {
      const amountHeaderSnippet = createRawSnippet(() => {
        return {
          render: () => `<div class="text-center uppercase ">Characters</div>`,
        };
      });
      return renderSnippet(amountHeaderSnippet, "");
    },
    cell: ({ row }) => {
      const amountCellSnippet = createRawSnippet<[string]>((getAmount) => {
        const characters = getAmount();
        return {
          render: () => `<div class="text-center font-medium">${characters}</div>`,
        };
      });
      return renderSnippet(amountCellSnippet, row.getValue("characters"));
    },
  },
  {
    accessorKey: "source",
    header: () => {
      const sourceHeaderSnippet = createRawSnippet(() => {
        return {
          render: () => `<div class="text-center uppercase ">Source</div>`,
        };
      });
      return renderSnippet(sourceHeaderSnippet, "");
    },
    cell: ({ row }) => {
      const sourceSnippet = createRawSnippet<[string]>((getSource) => {
        const source = getSource();
        return {
          render: () => `<div class="text-center capitalize">${source}</div>`,
        };
      });
      return renderSnippet(sourceSnippet, row.getValue("source"));
    },
  },
  {
    accessorKey: "date",
    header: () => {
      const dateHeaderSnippet = createRawSnippet(() => {
        return {
          render: () => `<div class="text-center uppercase">Date</div>`,
        };
      });
      return renderSnippet(dateHeaderSnippet, "");
    },
    cell: ({ row }) => {
      const dateSnippet = createRawSnippet<[string]>((getDate) => {
        const date = getDate();
        return {
          render: () => `<div class="text-center">${date}</div>`,
        };
      });
      return renderSnippet(dateSnippet, row.getValue("date"));
    },
  },
  {
    accessorKey: "type",
    header: () => {
      const typeHeaderSnippet = createRawSnippet(() => {
        return {
          render: () => `<div class="text-center uppercase">Type</div>`,
        };
      });
      return renderSnippet(typeHeaderSnippet, "");
    },
    cell: ({ row }) => {
      const typeSnippet = createRawSnippet<[string]>((getType) => {
        const type = getType();
        return {
          render: () => `<div class="text-center capitalize">${type || "N/A"}</div>`,
        };
      });
      return renderSnippet(typeSnippet, row.getValue("type"));
    },
  },
  {
    accessorKey: "actions",
    header: () => {
      const actionHeaderSnippet = createRawSnippet(() => {
        return {
          render: () => `<div class="text-center uppercase">Actions</div>`,
        };
      });
      return renderSnippet(actionHeaderSnippet, "");
    },
    cell: ({ row }) => {
      const actionCellSnippet = createRawSnippet<[string]>((getActions) => {
        const actions = getActions();
        return {
          render: () => `<div class="text-center font-medium text-red-600">${actions}</div>`,
        };
      });
      return renderSnippet(actionCellSnippet, row.getValue("actions"));
    },
  },
];

