<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import EllipsisVertical from "lucide-svelte/icons/ellipsis-vertical";
  import Plus from "lucide-svelte/icons/plus";
  import UserRound from "lucide-svelte/icons/user-round";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import Label from "$lib/components/ui/label/label.svelte";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Textarea } from "$lib/components/ui/textarea/index.js";
  import { Switch } from "$lib/components/ui/switch/index.js";
  import Info from "lucide-svelte/icons/info";
  import Image from "lucide-svelte/icons/image";
  import { goto } from "$app/navigation";

  let activeTab = "All Items";
  const tabs = ["All Items", "Spaces", "Agents", "Characters"];

  let file;
  let previewUrl = "";

  function handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (target && target.files && target.files[0]) {
      file = target.files[0];
      previewUrl = URL.createObjectURL(file);
    }
  }

  function handleNavigateToSpace(endPoint:String) {
    if(endPoint === "characters" || endPoint === "agents"){
      goto("/my-library/character-agent-edit").catch((err) => console.error("Navigation error:", err));
    }
    else{
      goto("/my-library/space-edit").catch((err) => console.error("Navigation error:", err));
    }
  }

</script>

<div class="mt-4">
  <Tabs.Root bind:value={activeTab} class="w-full h-[40px]">
    <div class="flex justify-between items-center">
      <Tabs.List
        class="flex gap-2 bg-gray-200 p-[5px] rounded-md max-w-[400px] w-full"
      >
        {#each tabs as tab}
          <Tabs.Trigger
            value={tab}
            class={`p-[6px] rounded-md w-[25%] ${activeTab === tab ? "box-shadow" : ""}`}
          >
            {tab}
          </Tabs.Trigger>
        {/each}
      </Tabs.List>

      <Dialog.Root>
        <Dialog.Trigger>
          <Button class="justify-between p-y-0 bg-black">
            <Plus />
            <div>Add New</div>
          </Button>
        </Dialog.Trigger>
        <Dialog.Content
          class="w-full max-w-[530px] max-h-[730px] h-full overflow-y-scroll"
          onInteractOutside={(event) => event.preventDefault()}
        >
          <Dialog.Header>
            <Dialog.Title class="font-bold">Create New Space</Dialog.Title>
          </Dialog.Header>
          <div class="flex flex-col gap-y-3">
            <div>
              <Label>Type</Label>
              <Select.Root type="single">
                <Select.Trigger class="rounded-md mt-2">Spaces</Select.Trigger>
                <Select.Content>
                  <Select.Item value="light">Agents</Select.Item>
                  <Select.Item value="dark">Characters</Select.Item>
                  <Select.Item value="system">Spaces</Select.Item>
                </Select.Content>
              </Select.Root>
            </div>
            <div class="text-muted-foreground text-sm">
              A container for structured data from multiple sources that users can query.
            </div>
            <Label for="image">Image</Label>
            <div class="flex flex-col items-center">
              <Label for="image" class="cursor-pointer">
                {#if previewUrl}
                  <img
                    src={previewUrl}
                    alt="Preview"
                    class="w-[100px] h-[100px] object-cover rounded-lg border"
                  />
                {:else}
                  <div
                    class="w-[100px] h-[100px] flex flex-col items-center justify-center border-2 border-dashed rounded-lg text-gray-500"
                  >
                    <Image size={40} />
                    <span class="text-sm">Upload</span>
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
              <Label for="title">Title</Label>
              <Input id="title" type="text" class="mt-2" />
            </div>
            <div>
              <Label for="description">Description</Label>
              <Textarea id="description" placeholder="Descripe your space" class="mt-2" />
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
            <div class="flex items-center justify-between">
              <Label  class="flex items-center gap-x-2">
                <div>Private</div>
                <Info size="16" class="text-muted-foreground" />
              </Label>
              <Switch id="private" />
            </div>
          </div>
          <div class="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button class="bg-gray-400">Create</Button>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>

    {#each tabs as tab}
      <Tabs.Content value={tab}>
        <div class="flex flex-wrap gap-y-5 gap-x-10 my-6">
          <Card.Root
            class="flex flex-col p-4 w-fit rounded-xl box-shadow gap-y-[20px] w-full max-w-[620px]"
          >
            <div class="flex gap-x-[10px]">
              <div
                class="rounded-xl flex items-center justify-center h-[100px] max-w-[100px] w-full bg-gray-200"
              >
                <UserRound size="50" />
              </div>
              <div class="flex flex-col gap-y-3 w-[100%]">
                <Card.Header class="p-0">
                  <Card.Title
                    class="flex justify-between items-center text-md font-bold"
                  >
                    <div>Title of the item</div>
                    <Popover.Root>
                      <Popover.Trigger
                        ><EllipsisVertical size="16" /></Popover.Trigger
                      >
                      <Popover.Content class="max-w-[130px] p-0">
                        <div class="p-2 cursor-pointer" onclick={() => handleNavigateToSpace("agents")}>Edit</div>
                        <div class="p-2 text-red-500 cursor-pointer">
                          Delete
                        </div>
                      </Popover.Content>
                    </Popover.Root>
                  </Card.Title>
                </Card.Header>
                <Card.Content class="flex flex-col gap-y-2 p-0">
                  <div class="flex justify-between items-center">
                    <div class="flex flex-col gap-x-2 gap-y-2">
                      <div class="text-muted-foreground">
                        Lucide is built with ES Modules, so it's completely
                        tree-shakable.
                      </div>
                      <div class="flex gap-x-2">
                        <div class="font-bold text-sm text-muted-foreground">
                          Private
                        </div>
                        <div
                          class="rounded-md px-4 py-0.5 text-xs font-bold text-center bg-gray-200 card-tag w-fit"
                        >
                          <div>Agent</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Content>
              </div>
            </div>
          </Card.Root>
          <Card.Root
            class="flex flex-col p-4 w-fit rounded-xl box-shadow gap-y-[20px] w-full max-w-[620px]"
          >
            <div class="flex gap-x-[10px]">
              <div
                class="rounded-xl flex items-center justify-center h-[100px] max-w-[100px] w-full bg-gray-200"
              >
                <UserRound size="50" />
              </div>
              <div class="flex flex-col gap-y-3 w-[100%]">
                <Card.Header class="p-0">
                  <Card.Title
                    class="flex justify-between items-center text-md font-bold"
                  >
                    <div>Title of the item</div>
                    <Popover.Root>
                      <Popover.Trigger
                        ><EllipsisVertical size="16" /></Popover.Trigger
                      >
                      <Popover.Content class="max-w-[130px] p-0">
                        <div class="p-2 cursor-pointer">Edit</div>
                        <div class="p-2 text-red-500 cursor-pointer">
                          Delete
                        </div>
                      </Popover.Content>
                    </Popover.Root>
                  </Card.Title>
                </Card.Header>
                <Card.Content class="flex flex-col gap-y-2 p-0">
                  <div class="flex justify-between items-center">
                    <div class="flex flex-col gap-x-2 gap-y-2">
                      <div class="text-muted-foreground">
                        Lucide is built with ES Modules, so it's completely
                        tree-shakable.
                      </div>
                      <div class="flex gap-x-2">
                        <div class="font-bold text-sm text-muted-foreground">
                          Private
                        </div>
                        <div
                          class="rounded-md px-4 py-0.5 text-xs font-bold text-center bg-gray-200 card-tag w-fit"
                        >
                          <div>Agent</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Content>
              </div>
            </div>
          </Card.Root>
          <Card.Root
            class="flex flex-col p-4 w-fit rounded-xl box-shadow gap-y-[20px] w-full max-w-[620px]"
          >
            <div class="flex gap-x-[10px]">
              <div
                class="rounded-xl flex items-center justify-center h-[100px] max-w-[100px] w-full bg-gray-200"
              >
                <UserRound size="50" />
              </div>
              <div class="flex flex-col gap-y-3 w-[100%]">
                <Card.Header class="p-0">
                  <Card.Title
                    class="flex justify-between items-center text-md font-bold"
                  >
                    <div>Title of the item</div>
                    <Popover.Root>
                      <Popover.Trigger
                        ><EllipsisVertical size="16" /></Popover.Trigger
                      >
                      <Popover.Content class="max-w-[130px] p-0">
                        <div class="p-2 cursor-pointer">Edit</div>
                        <div class="p-2 text-red-500 cursor-pointer">
                          Delete
                        </div>
                      </Popover.Content>
                    </Popover.Root>
                  </Card.Title>
                </Card.Header>
                <Card.Content class="flex flex-col gap-y-2 p-0">
                  <div class="flex justify-between items-center">
                    <div class="flex flex-col gap-x-2 gap-y-2">
                      <div class="text-muted-foreground">
                        Lucide is built with ES Modules, so it's completely
                        tree-shakable.
                      </div>
                      <div class="flex gap-x-2">
                        <div class="font-bold text-sm text-muted-foreground">
                          Private
                        </div>
                        <div
                          class="rounded-md px-4 py-0.5 text-xs font-bold text-center bg-gray-200 card-tag w-fit"
                        >
                          <div>Agent</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Content>
              </div>
            </div>
          </Card.Root>
          <Card.Root
            class="flex flex-col p-4 w-fit rounded-xl box-shadow gap-y-[20px] w-full max-w-[620px]"
          >
            <div class="flex gap-x-[10px]">
              <div
                class="rounded-xl flex items-center justify-center h-[100px] max-w-[100px] w-full bg-gray-200"
              >
                <UserRound size="50" />
              </div>
              <div class="flex flex-col gap-y-3 w-[100%]">
                <Card.Header class="p-0">
                  <Card.Title
                    class="flex justify-between items-center text-md font-bold"
                  >
                    <div>Title of the item</div>
                    <Popover.Root>
                      <Popover.Trigger
                        ><EllipsisVertical size="16" /></Popover.Trigger
                      >
                      <Popover.Content class="max-w-[130px] p-0">
                        <div class="p-2 cursor-pointer">Edit</div>
                        <div class="p-2 text-red-500 cursor-pointer">
                          Delete
                        </div>
                      </Popover.Content>
                    </Popover.Root>
                  </Card.Title>
                </Card.Header>
                <Card.Content class="flex flex-col gap-y-2 p-0">
                  <div class="flex justify-between items-center">
                    <div class="flex flex-col gap-x-2 gap-y-2">
                      <div class="text-muted-foreground">
                        Lucide is built with ES Modules, so it's completely
                        tree-shakable.
                      </div>
                      <div class="flex gap-x-2">
                        <div class="font-bold text-sm text-muted-foreground">
                          Private
                        </div>
                        <div
                          class="rounded-md px-4 py-0.5 text-xs font-bold text-center bg-gray-200 card-tag w-fit"
                        >
                          <div>Agent</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Content>
              </div>
            </div>
          </Card.Root>
          <Card.Root
            class="flex flex-col p-4 w-fit rounded-xl box-shadow gap-y-[20px] w-full max-w-[620px]"
          >
            <div class="flex gap-x-[10px]">
              <div
                class="rounded-xl flex items-center justify-center h-[100px] max-w-[100px] w-full bg-gray-200"
              >
                <UserRound size="50" />
              </div>
              <div class="flex flex-col gap-y-3 w-[100%]">
                <Card.Header class="p-0">
                  <Card.Title
                    class="flex justify-between items-center text-md font-bold"
                  >
                    <div>Title of the item</div>
                    <Popover.Root>
                      <Popover.Trigger
                        ><EllipsisVertical size="16" /></Popover.Trigger
                      >
                      <Popover.Content class="max-w-[130px] p-0">
                        <div class="p-2 cursor-pointer">Edit</div>
                        <div class="p-2 text-red-500 cursor-pointer">
                          Delete
                        </div>
                      </Popover.Content>
                    </Popover.Root>
                  </Card.Title>
                </Card.Header>
                <Card.Content class="flex flex-col gap-y-2 p-0">
                  <div class="flex justify-between items-center">
                    <div class="flex flex-col gap-x-2 gap-y-2">
                      <div class="text-muted-foreground">
                        Lucide is built with ES Modules, so it's completely
                        tree-shakable.
                      </div>
                      <div class="flex gap-x-2">
                        <div class="font-bold text-sm text-muted-foreground">
                          Private
                        </div>
                        <div
                          class="rounded-md px-4 py-0.5 text-xs font-bold text-center bg-gray-200 card-tag w-fit"
                        >
                          <div>Agent</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Content>
              </div>
            </div>
          </Card.Root>
          <Card.Root
            class="flex flex-col p-4 w-fit rounded-xl box-shadow gap-y-[20px] w-full max-w-[620px]"
          >
            <div class="flex gap-x-[10px]">
              <div
                class="rounded-xl flex items-center justify-center h-[100px] max-w-[100px] w-full bg-gray-200"
              >
                <UserRound size="50" />
              </div>
              <div class="flex flex-col gap-y-3 w-[100%]">
                <Card.Header class="p-0">
                  <Card.Title
                    class="flex justify-between items-center text-md font-bold"
                  >
                    <div>Title of the item</div>
                    <Popover.Root>
                      <Popover.Trigger
                        ><EllipsisVertical size="16" /></Popover.Trigger
                      >
                      <Popover.Content class="max-w-[130px] p-0">
                        <div class="p-2 cursor-pointer">Edit</div>
                        <div class="p-2 text-red-500 cursor-pointer">
                          Delete
                        </div>
                      </Popover.Content>
                    </Popover.Root>
                  </Card.Title>
                </Card.Header>
                <Card.Content class="flex flex-col gap-y-2 p-0">
                  <div class="flex justify-between items-center">
                    <div class="flex flex-col gap-x-2 gap-y-2">
                      <div class="text-muted-foreground">
                        Lucide is built with ES Modules, so it's completely
                        tree-shakable.
                      </div>
                      <div class="flex gap-x-2">
                        <div class="font-bold text-sm text-muted-foreground">
                          Private
                        </div>
                        <div
                          class="rounded-md px-4 py-0.5 text-xs font-bold text-center bg-gray-200 card-tag w-fit"
                        >
                          <div>Agent</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Content>
              </div>
            </div>
          </Card.Root>
        </div>
      </Tabs.Content>
    {/each}
    <Button variant="outline" class="flex text-muted-foreground w-fit mx-auto"
      >Load More</Button
    >
  </Tabs.Root>
</div>
