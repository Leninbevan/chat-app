<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Switch } from "$lib/components/ui/switch/index.js";
  import { Textarea } from "$lib/components/ui/textarea/index.js";
  import Image from "lucide-svelte/icons/image";
  import Save from "lucide-svelte/icons/save";
  import { Slider } from "$lib/components/ui/slider/index.js";
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import { Checkbox } from "$lib/components/ui/checkbox/index.js";
  import DataTable from "$lib/components/ui/data-table/DataTable.svelte";
  import { columns } from "./columns.js";
  import Plus from 'lucide-svelte/icons/plus';
  import { writable } from "svelte/store";

  let file;
  let previewUrl = "";


  function handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (target && target.files && target.files[0]) {
      file = target.files[0];
      previewUrl = URL.createObjectURL(file);
    }
  }

  let activeTab = "Links";
  const tabs = ["Youtube", "Documents", "Links"];
  const checkboxStates = writable({
  extract: false,
  preserveLayout: false
});

  type ActivityLog = {
    id: string;
    status: "Pending" | "Processing" | "Indexed" | "Failed";
    characters: number;
    actions: string;
    source: string;
    type?: string;
    date: string;
  };

  const data: ActivityLog[] = [
    {
      id: "m5gr84i9",
      characters: 316,
      status: "Pending",
      actions: "Delete",
      source: "Video title link",
      type: "Video",
      date: "2023-01-01",
    },
    {
      id: "3u1reuv4",
      characters: 242,
      status: "Indexed",
      actions: "Delete",
      source: "Video title link",
      type: "Video",
      date: "2023-01-01",
    },
  ];
</script>

<div class="flex flex-col gap-y-5 w-full">
  <div class="flex justify-between items-center">
    <div class="font-bold text-2xl">Edit Space</div>
    <div>
      <Button>
        <div><Save size="16" /></div>
        <div>Save Changes</div>
      </Button>
    </div>
  </div>
  <div class="flex flex-col gap-y-3 pb-8 border-b-2">
    <div class="font-bold text-lg">Basic Details</div>
    <div class="flex justify-between w-[100%]">
      <div class="flex flex-col gap-2 items-center w-[150px]">
        <div class="flex flex-col items-center">
          <Label for="image" class="cursor-pointer">
            {#if previewUrl}
              <img
                src={previewUrl}
                alt="Preview"
                class="w-[150px] h-[150px] object-cover rounded-full border"
              />
            {:else}
              <div
                class="w-[150px] h-[150px] flex flex-col items-center justify-center border-2 border-dashed rounded-full text-gray-500"
              >
                <Image size={50} />
              </div>
            {/if}
          </Label>
          <Input
            id="image"
            type="file"
            class="hidden"
            onchange={handleFileChange}
          />
        </div>
        <div>
          <Button variant="outline" class="text-muted-foreground"
            >Change image</Button
          >
        </div>
      </div>
      <div class="flex flex-col gap-y-3 w-[65%]">
        <div>
          <Label for="name">Name</Label>
          <Input id="name" type="text" class="mt-2" />
        </div>
        <div>
          <Label for="title">Description</Label>
          <Textarea placeholder="Descripe your space" class="mt-2" />
        </div>
        <div>
          <Label>Category</Label>
          <Select.Root type="single">
            <Select.Trigger class="rounded-md mt-2"
              >Select Category</Select.Trigger
            >
            <Select.Content>
              <Select.Item value="light">Agents</Select.Item>
              <Select.Item value="dark">Characters</Select.Item>
              <Select.Item value="system">Spaces</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex flex-col gap-y-1">
            <div>Visibility</div>
            <div class="text-sm text-muted-foreground">
              Make this agen public or Keep it private
            </div>
          </div>
          <div class="flex items-center gap-x-2">
            <Label>Private</Label>
            <Switch id="private" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-y-3 pb-8 border-b-2">
    <div class="font-bold text-lg">Data Sources</div>
    <div class="flex flex-col gap-y-1">
      <div class="text-muted-foreground">
        Add content from various sources to your space.
      </div>
    </div>
  </div>
  <Tabs.Root bind:value={activeTab} class="w-full mt-2">
    <Tabs.List class="flex gap-2 bg-gray-200 p-[5px] rounded-md">
      {#each tabs as tab}
        <Tabs.Trigger
          value={tab}
          class={`p-[6px] rounded-md w-[33%] ${activeTab === tab ? "box-shadow" : ""}`}
        >
          {tab}
        </Tabs.Trigger>
      {/each}
    </Tabs.List>

    {#each tabs as tab}
      <Tabs.Content
        value={tab}
        class="w-full flex flex-col gap-4 relative data-[state=active]:flex data-[state=inactive]:hidden"
      >
      {#if tab === "Documents"}
      <div class="flex flex-col gap-y-2 bg-gray-50 rounded-md p-4 border-2">
        <div class="flex flex-col gap-2 items-center">
          <div
            class="flex flex-col items-center border-2 border-dashed rounded-md w-[100%] h-[150px] justify-center"
          >
            <Label for="image" class="cursor-pointer">
              {#if previewUrl}
                <img
                  src={previewUrl}
                  alt="Preview"
                  class="w-[150px] h-[150px] object-cover p-2"
                />
              {:else}
                <div
                  class="flex flex-col items-center justify-center text-gray-500 w-[100%] h-[100%] gap-y-3"
                >
                  <div>Drag-and-drop or select files</div>
                  <div class="text-[#8273734f]">
                    Supported formats: PDF,TXT,DOCS,CSV,XLS
                  </div>
                  <Button>Upload Documents</Button>
                </div>
              {/if}
            </Label>
            <Input
              id="image"
              type="file"
              class="hidden"
              onchange={handleFileChange}
            />
          </div>
        </div>
        <div class="font-medium text-sm">Advanced Options</div>
        <div class="flex justify-between">
          <div class="flex items-center space-x-2 w-[50%]">
            <Checkbox
              id="extract"
              bind:checked={$checkboxStates.extract}
              aria-labelledby="extract-label"
            />
            <Label id="extract-label" for="extract" class="text-sm font-medium leading-none">
              Extract text from images
            </Label>
          </div>

          <div class="flex items-center space-x-2 w-[50%]">
            <Checkbox
              id="preserveLayout"
              bind:checked={$checkboxStates.preserveLayout}
              aria-labelledby="preserve-label"
            />
            <Label id="preserve-label" for="preserveLayout" class="text-sm font-medium leading-none">
              Preserve document layout
            </Label>
          </div>

        </div>
      </div>
      {:else if tab === "Links"}
      <div class="flex flex-col gap-y-3 bg-gray-50 rounded-md p-4 border-2">
        <div class="border-b-2 pb-4">
          <div class="text-sm">Website URl or Site Map</div>
          <div class="flex w-full justify-between mt-2">
            <div class="w-[90%]">
              <Input type="search" placeholder="Enter website URL or sitemap URL" class="pl-8 bg-gray-50" />
            </div>
            <div>
              <Button variant="outline" class="w-full">
                Scrap all
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div class="text-sm">Webpage Links</div>
          <div class="flex w-full justify-between mt-2 items-center">
            <div class="w-[96%]">
              <Input type="search" placeholder="Enter webpage URL" class="pl-8 bg-gray-50" />
            </div>
            <Plus size="25"/>
          </div>
          <div class="flex items-center justify-end mt-2">
            <Button class="px-4 py-0 w-fit">Scrape</Button>
          </div>
        </div>
      </div>
      {:else}
      <div class="flex flex-col gap-y-3 bg-gray-50 rounded-md p-4 border-2">
        <div class="border-b-2 pb-4">
          <div class="text-sm">YouTube Channel Link</div>
          <div class="flex w-full justify-between mt-2">
            <div class="w-[90%]">
              <Input type="search" placeholder="Enter website URL or sitemap URL" class="pl-8 bg-gray-50" />
            </div>
            <div>
              <Button variant="outline" class="w-full">
                Scrap all
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div class="text-sm">YouTube Video Links</div>
          <div class="flex w-full justify-between mt-2 items-center">
            <div class="w-[96%]">
              <Input type="search" placeholder="Enter webpage URL" class="pl-8 bg-gray-50" />
            </div>
            <Plus size="25"/>
          </div>
          <div class="flex items-center justify-end mt-2">
            <Button class="px-4 py-0 w-fit">Scrape</Button>
          </div>
        </div>
      </div>
      {/if}
      </Tabs.Content>
    {/each}
  </Tabs.Root>

  <div class="mt-4 pb-8 border-b-2">
    <div class="flex flex-col gap-y-1">
      <DataTable {columns} {data} />
    </div>
  </div>
  <div class="flex flex-col gap-y-3">
    <div class="font-bold text-2xl text-red-600">Danger Zone</div>
    <div>These actions cannot be undone</div>
    <Button variant="destructive" class="w-fit">Delete agent</Button>
  </div>
</div>
