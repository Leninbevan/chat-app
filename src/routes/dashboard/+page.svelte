<script>
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import ArrowUpNarrowWide from "lucide-svelte/icons/arrow-up-narrow-wide";
  import EllipsisVertical from "lucide-svelte/icons/ellipsis-vertical";
  import Search from "lucide-svelte/icons/search";
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import UserRound from "lucide-svelte/icons/user-round";
  import Clock4 from "lucide-svelte/icons/clock-4";
  import Star from "lucide-svelte/icons/star";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import { Separator } from "$lib/components/ui/separator/index.js";

  let activeTab = "All";
  const tabs = ["All", "Spaces", "Agents", "Characters"];
</script>

<!-- <div class="flex w-full justify-between">
  <div class="relative w-[90%]">
    <Search class="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
    <Input type="search" placeholder="Search for items here..." class="pl-8" />
  </div>
  <div>
    <Button variant="outline" class="w-full justify-between p-y-0">
      <ArrowUpNarrowWide />
      <div>Sort</div>
    </Button>
  </div>
</div>
<div class="mt-4">
  <Tabs.Root bind:value={activeTab} class="w-full h-[40px]">
    <Tabs.List class="flex gap-2 bg-gray-200 p-[10px] rounded-md">
      {#each tabs as tab}
        <Tabs.Trigger
          value={tab}
          class={`p-[6px] rounded-md w-[25%] ${activeTab === tab ? "box-shadow" : ""}`}
        >
          {tab}
        </Tabs.Trigger>
      {/each}
    </Tabs.List>

    {#each tabs as tab}
      <Tabs.Content value={tab}>
        <div class="flex flex-col gap-y-4 mt-4 mb-6">
          <div class="flex gap-x-2 items-center">
            <Star color="gold" size="18" />
            <div class="text-[18px] font-medium">Pinned Chats</div>
          </div>
          <div class="flex flex-wrap gap-y-5 gap-x-10">
            <Card.Root
              class="flex flex-col p-4 w-fit rounded-xl box-shadow gap-y-[20px] w-full max-w-[620px]"
            >
              <div class="flex gap-x-[10px]">
                <div class="rounded-xl p-4 bg-gray-200">
                  <UserRound color="#087be9" />
                </div>
                <div class="flex flex-col justify-between gap-y-1 w-[100%]">
                  <Card.Header class="p-0">
                    <Card.Title
                      class="flex justify-between items-center text-md font-bold"
                    >
                      <div>Title of the item</div>
                      <Popover.Root>
                        <Popover.Trigger><EllipsisVertical size="16" /></Popover.Trigger>
                        <Popover.Content class="max-w-[130px] p-0">
                            <div class="p-2 cursor-pointer">Unpin</div>
                            <div class="p-2 cursor-pointer">Share</div>
                            <Separator/>
                            <div class="p-2 text-red-500 cursor-pointer">Delete</div>
                        </Popover.Content>
                      </Popover.Root>
                    </Card.Title>
                  </Card.Header>
                  <Card.Content class="flex flex-col gap-y-2 p-0">
                    <div
                      class="flex justify-between items-center text-muted-foreground"
                    >
                      <div class="flex gap-x-2">
                        <div
                          class="rounded-md px-4 py-0.5 text-xs font-bold text-center bg-gray-200 card-tag"
                        >
                          <div>Agent</div>
                        </div>
                        <div class="flex items-center gap-x-1">
                          <Clock4 size="12" />
                          <div class="text-[12px] font-medium">Today</div>
                        </div>
                      </div>
                    </div>
                  </Card.Content>
                </div>
              </div>
              <div class="text-muted-foreground">
                Lucide is built with ES Modules, so it's completely
                tree-shakable.
              </div>
            </Card.Root>
            <Card.Root
              class="flex flex-col p-4 w-fit rounded-xl box-shadow gap-y-[20px] w-full max-w-[620px]"
            >
              <div class="flex gap-x-[10px]">
                <div class="rounded-xl p-4 bg-gray-200">
                  <UserRound color="#087be9" />
                </div>
                <div class="flex flex-col justify-between gap-y-1 w-[100%]">
                  <Card.Header class="p-0">
                    <Card.Title
                      class="flex justify-between items-center text-md font-bold"
                    >
                      <div>Title of the item</div>
                      <Popover.Root>
                        <Popover.Trigger><EllipsisVertical size="16" /></Popover.Trigger>
                        <Popover.Content class="max-w-[130px] p-0">
                            <div class="p-2 cursor-pointer">Unpin</div>
                            <div class="p-2 cursor-pointer">Share</div>
                            <Separator/>
                            <div class="p-2 text-red-500 cursor-pointer">Delete</div>
                        </Popover.Content>
                      </Popover.Root>
                    </Card.Title>
                  </Card.Header>
                  <Card.Content class="flex flex-col gap-y-2 p-0">
                    <div
                      class="flex justify-between items-center text-muted-foreground"
                    >
                      <div class="flex gap-x-2">
                        <div
                          class="rounded-md px-4 py-0.5 text-xs font-bold text-center bg-gray-200 card-tag"
                        >
                          <div>Agent</div>
                        </div>
                        <div class="flex items-center gap-x-1">
                          <Clock4 size="12" />
                          <div class="text-[12px] font-medium">Today</div>
                        </div>
                      </div>
                    </div>
                  </Card.Content>
                </div>
              </div>
              <div class="text-muted-foreground">
                Lucide is built with ES Modules, so it's completely
                tree-shakable.
              </div>
            </Card.Root>
          </div>
          <Button variant="outline" class="text-muted-foreground w-fit mx-auto"
            >Load More</Button
          >
        </div>


        <div class="flex flex-col gap-y-4 mt-4 mb-6">
          <div class="flex gap-x-2 items-center">
            <Clock4 color="gray" size="18" />
            <div class="text-[18px] font-medium">Recent Chats</div>
          </div>
          <div class="flex flex-wrap gap-y-5 gap-x-10">
            <Card.Root
              class="flex flex-col p-4 w-fit rounded-xl box-shadow gap-y-[20px] w-full max-w-[620px]"
            >
              <div class="flex gap-x-[10px]">
                <div class="rounded-xl p-4 bg-gray-200">
                  <UserRound color="#087be9" />
                </div>
                <div class="flex flex-col justify-between gap-y-1 w-[100%]">
                  <Card.Header class="p-0">
                    <Card.Title
                      class="flex justify-between items-center text-md font-bold"
                    >
                      <div>Title of the item</div>
                      <Popover.Root>
                        <Popover.Trigger><EllipsisVertical size="16" /></Popover.Trigger>
                        <Popover.Content class="max-w-[130px] p-0">
                            <div class="p-2 cursor-pointer">Unpin</div>
                            <div class="p-2 cursor-pointer">Share</div>
                            <Separator/>
                            <div class="p-2 text-red-500 cursor-pointer">Delete</div>
                        </Popover.Content>
                      </Popover.Root>
                    </Card.Title>
                  </Card.Header>
                  <Card.Content class="flex flex-col gap-y-2 p-0">
                    <div
                      class="flex justify-between items-center text-muted-foreground"
                    >
                      <div class="flex gap-x-2">
                        <div
                          class="rounded-md px-4 py-0.5 text-xs font-bold text-center bg-gray-200 card-tag"
                        >
                          <div>Agent</div>
                        </div>
                        <div class="flex items-center gap-x-1">
                          <Clock4 size="12" />
                          <div class="text-[12px] font-medium">Today</div>
                        </div>
                      </div>
                    </div>
                  </Card.Content>
                </div>
              </div>
              <div class="text-muted-foreground">
                Lucide is built with ES Modules, so it's completely
                tree-shakable.
              </div>
            </Card.Root>
            <Card.Root
              class="flex flex-col p-4 w-fit rounded-xl box-shadow gap-y-[20px] w-full max-w-[620px]"
            >
              <div class="flex gap-x-[10px]">
                <div class="rounded-xl p-4 bg-gray-200">
                  <UserRound color="#087be9" />
                </div>
                <div class="flex flex-col justify-between gap-y-1 w-[100%]">
                  <Card.Header class="p-0">
                    <Card.Title
                      class="flex justify-between items-center text-md font-bold"
                    >
                      <div>Title of the item</div>
                      <Popover.Root>
                        <Popover.Trigger><EllipsisVertical size="16" /></Popover.Trigger>
                        <Popover.Content class="max-w-[130px] p-0">
                            <div class="p-2 cursor-pointer">Unpin</div>
                            <div class="p-2 cursor-pointer">Share</div>
                            <Separator/>
                            <div class="p-2 text-red-500 cursor-pointer">Delete</div>
                        </Popover.Content>
                      </Popover.Root>
                    </Card.Title>
                  </Card.Header>
                  <Card.Content class="flex flex-col gap-y-2 p-0">
                    <div
                      class="flex justify-between items-center text-muted-foreground"
                    >
                      <div class="flex gap-x-2">
                        <div
                          class="rounded-md px-4 py-0.5 text-xs font-bold text-center bg-gray-200 card-tag"
                        >
                          <div>Agent</div>
                        </div>
                        <div class="flex items-center gap-x-1">
                          <Clock4 size="12" />
                          <div class="text-[12px] font-medium">Today</div>
                        </div>
                      </div>
                    </div>
                  </Card.Content>
                </div>
              </div>
              <div class="text-muted-foreground">
                Lucide is built with ES Modules, so it's completely
                tree-shakable.
              </div>
            </Card.Root>
            <Card.Root
              class="flex flex-col p-4 w-fit rounded-xl box-shadow gap-y-[20px] w-full max-w-[620px]"
            >
              <div class="flex gap-x-[10px]">
                <div class="rounded-xl p-4 bg-gray-200">
                  <UserRound color="#087be9" />
                </div>
                <div class="flex flex-col justify-between gap-y-1 w-[100%]">
                  <Card.Header class="p-0">
                    <Card.Title
                      class="flex justify-between items-center text-md font-bold"
                    >
                      <div>Title of the item</div>
                      <Popover.Root>
                        <Popover.Trigger><EllipsisVertical size="16" /></Popover.Trigger>
                        <Popover.Content class="max-w-[130px] p-0">
                            <div class="p-2 cursor-pointer">Unpin</div>
                            <div class="p-2 cursor-pointer">Share</div>
                            <Separator/>
                            <div class="p-2 text-red-500 cursor-pointer">Delete</div>
                        </Popover.Content>
                      </Popover.Root>
                    </Card.Title>
                  </Card.Header>
                  <Card.Content class="flex flex-col gap-y-2 p-0">
                    <div
                      class="flex justify-between items-center text-muted-foreground"
                    >
                      <div class="flex gap-x-2">
                        <div
                          class="rounded-md px-4 py-0.5 text-xs font-bold text-center bg-gray-200 card-tag"
                        >
                          <div>Agent</div>
                        </div>
                        <div class="flex items-center gap-x-1">
                          <Clock4 size="12" />
                          <div class="text-[12px] font-medium">Today</div>
                        </div>
                      </div>
                    </div>
                  </Card.Content>
                </div>
              </div>
              <div class="text-muted-foreground">
                Lucide is built with ES Modules, so it's completely
                tree-shakable.
              </div>
            </Card.Root>
            <Card.Root
              class="flex flex-col p-4 w-fit rounded-xl box-shadow gap-y-[20px] w-full max-w-[620px]"
            >
              <div class="flex gap-x-[10px]">
                <div class="rounded-xl p-4 bg-gray-200">
                  <UserRound color="#087be9" />
                </div>
                <div class="flex flex-col justify-between gap-y-1 w-[100%]">
                  <Card.Header class="p-0">
                    <Card.Title
                      class="flex justify-between items-center text-md font-bold"
                    >
                      <div>Title of the item</div>
                      <Popover.Root>
                        <Popover.Trigger><EllipsisVertical size="16" /></Popover.Trigger>
                        <Popover.Content class="max-w-[130px] p-0">
                            <div class="p-2 cursor-pointer">Unpin</div>
                            <div class="p-2 cursor-pointer">Share</div>
                            <Separator/>
                            <div class="p-2 text-red-500 cursor-pointer">Delete</div>
                        </Popover.Content>
                      </Popover.Root>
                    </Card.Title>
                  </Card.Header>
                  <Card.Content class="flex flex-col gap-y-2 p-0">
                    <div
                      class="flex justify-between items-center text-muted-foreground"
                    >
                      <div class="flex gap-x-2">
                        <div
                          class="rounded-md px-4 py-0.5 text-xs font-bold text-center bg-gray-200 card-tag"
                        >
                          <div>Agent</div>
                        </div>
                        <div class="flex items-center gap-x-1">
                          <Clock4 size="12" />
                          <div class="text-[12px] font-medium">Today</div>
                        </div>
                      </div>
                    </div>
                  </Card.Content>
                </div>
              </div>
              <div class="text-muted-foreground">
                Lucide is built with ES Modules, so it's completely
                tree-shakable.
              </div>
            </Card.Root>
          </div>
          <Button variant="outline" class="text-muted-foreground w-fit mx-auto"
            >Load More</Button
          >
        </div>
      </Tabs.Content>
    {/each}
  </Tabs.Root>
</div> -->

 <div>Dashboard</div>