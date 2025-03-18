<script>
  import Input from "$lib/components/ui/input/input.svelte";
  import Search from "lucide-svelte/icons/search";
  import * as Select from "$lib/components/ui/select/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import UserRound from "lucide-svelte/icons/user-round";
  import Eye from "lucide-svelte/icons/eye";
</script>

<div class="flex flex-col">
  <div>
    <h1 class="text-lg font-bold md:text-2xl">Discover</h1>
    <div class="text-muted-foreground">Text that will describe the page in brief</div>
    <div>
      <div class="flex items-center gap-4 text-center py-[30px]">
        <Select.Root type="single">
          <Select.Trigger class="w-[180px] rounded-md box-shadow"
            >Spaces</Select.Trigger
          >
          <Select.Content>
            <Select.Item value="light">Agents</Select.Item>
            <Select.Item value="dark">Characters</Select.Item>
            <Select.Item value="system">Spaces</Select.Item>
          </Select.Content>
        </Select.Root>
        <div class="relative">
          <Search
            class="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4"
          />
          <Input
            type="search"
            placeholder="Search for items here..."
            class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] rounded-md box-shadow"
          />
        </div>
      </div>
    </div>
  </div>
  <div>
    <h1 class="text-lg font-bold md:text-2xl">Spaces</h1>
    <div class="flex flex-wrap gap-y-5 gap-x-6 mt-4">
      <Card.Root
        class="flex items-center p-4 w-fit rounded-xl box-shadow gap-x-[20px] w-full max-w-[410px]"
      >
        <div class="rounded-md p-7 bg-gray-200">
          <UserRound />
        </div>
        <div class="flex flex-col gap-y-1 w-[100%]">
          <Card.Header class="p-0">
            <Card.Title class="text-md font-medium"
              >Title of the item</Card.Title
            >
          </Card.Header>
          <Card.Content class="flex flex-col gap-y-2 p-0">
            <div class="text-muted-foreground text-s">
              A brief description about the item
            </div>
            <div
              class="flex justify-between items-center text-muted-foreground"
            >
              <div class="flex gap-x-1">
                <div
                  class="rounded-full text-sm h-[20px] w-[20px] text-center bg-gray-200"
                >
                  <div>JD</div>
                </div>
                <div class="text-sm">Jhon Doe</div>
              </div>
              <div class="flex items-center">
                <Eye size="16" />
                <div class="text-sm">1.2k</div>
              </div>
            </div>
          </Card.Content>
        </div>
      </Card.Root>
      <Card.Root
        class="flex items-center p-4 w-fit rounded-xl box-shadow gap-x-[20px] w-full max-w-[410px]"
      >
        <div class="rounded-md p-7 bg-gray-200">
          <UserRound />
        </div>
        <div class="flex flex-col gap-y-1 w-[100%]">
          <Card.Header class="p-0">
            <Card.Title class="text-md font-medium"
              >Title of the item</Card.Title
            >
          </Card.Header>
          <Card.Content class="flex flex-col gap-y-2 p-0">
            <div class="text-muted-foreground text-s">
              A brief description about the item
            </div>
            <div
              class="flex justify-between items-center text-muted-foreground"
            >
              <div class="flex gap-x-1">
                <div
                  class="rounded-full text-sm h-[20px] w-[20px] text-center bg-gray-200"
                >
                  <div>JD</div>
                </div>
                <div class="text-sm">Jhon Doe</div>
              </div>
              <div class="flex items-center">
                <Eye size="16" />
                <div class="text-sm">1.2k</div>
              </div>
            </div>
          </Card.Content>
        </div>
      </Card.Root>
      <Card.Root
        class="flex items-center p-4 w-fit rounded-xl box-shadow gap-x-[20px] w-full max-w-[410px]"
      >
        <div class="rounded-md p-7 bg-gray-200">
          <UserRound />
        </div>
        <div class="flex flex-col gap-y-1 w-[100%]">
          <Card.Header class="p-0">
            <Card.Title class="text-md font-medium"
              >Title of the item</Card.Title
            >
          </Card.Header>
          <Card.Content class="flex flex-col gap-y-2 p-0">
            <div class="text-muted-foreground text-s">
              A brief description about the item
            </div>
            <div
              class="flex justify-between items-center text-muted-foreground"
            >
              <div class="flex gap-x-1">
                <div
                  class="rounded-full text-sm h-[20px] w-[20px] text-center bg-gray-200"
                >
                  <div>JD</div>
                </div>
                <div class="text-sm">Jhon Doe</div>
              </div>
              <div class="flex items-center">
                <Eye size="16" />
                <div class="text-sm">1.2k</div>
              </div>
            </div>
          </Card.Content>
        </div>
      </Card.Root>
      <Card.Root
        class="flex items-center p-4 w-fit rounded-xl box-shadow gap-x-[20px] w-full max-w-[410px]"
      >
        <div class="rounded-md p-7 bg-gray-200">
          <UserRound />
        </div>
        <div class="flex flex-col gap-y-1 w-[100%]">
          <Card.Header class="p-0">
            <Card.Title class="text-md font-medium"
              >Title of the item</Card.Title
            >
          </Card.Header>
          <Card.Content class="flex flex-col gap-y-2 p-0">
            <div class="text-muted-foreground text-s">
              A brief description about the item
            </div>
            <div
              class="flex justify-between items-center text-muted-foreground"
            >
              <div class="flex gap-x-1">
                <div
                  class="rounded-full text-sm h-[20px] w-[20px] text-center bg-gray-200"
                >
                  <div>JD</div>
                </div>
                <div class="text-sm">Jhon Doe</div>
              </div>
              <div class="flex items-center">
                <Eye size="16" />
                <div class="text-sm">1.2k</div>
              </div>
            </div>
          </Card.Content>
        </div>
      </Card.Root>
      <Card.Root
        class="flex items-center p-4 w-fit rounded-xl box-shadow gap-x-[20px] w-full max-w-[410px]"
      >
        <div class="rounded-md p-7 bg-gray-200">
          <UserRound />
        </div>
        <div class="flex flex-col gap-y-1 w-[100%]">
          <Card.Header class="p-0">
            <Card.Title class="text-md font-medium"
              >Title of the item</Card.Title
            >
          </Card.Header>
          <Card.Content class="flex flex-col gap-y-2 p-0">
            <div class="text-muted-foreground text-s">
              A brief description about the item
            </div>
            <div
              class="flex justify-between items-center text-muted-foreground"
            >
              <div class="flex gap-x-1">
                <div
                  class="rounded-full text-sm h-[20px] w-[20px] text-center bg-gray-200"
                >
                  <div>JD</div>
                </div>
                <div class="text-sm">Jhon Doe</div>
              </div>
              <div class="flex items-center">
                <Eye size="16" />
                <div class="text-sm">1.2k</div>
              </div>
            </div>
          </Card.Content>
        </div>
      </Card.Root>
      <Card.Root
        class="flex items-center p-4 w-fit rounded-xl box-shadow gap-x-[20px] w-full max-w-[410px]"
      >
        <div class="rounded-md p-7 bg-gray-200">
          <UserRound />
        </div>
        <div class="flex flex-col gap-y-1 w-[100%]">
          <Card.Header class="p-0">
            <Card.Title class="text-md font-medium"
              >Title of the item</Card.Title
            >
          </Card.Header>
          <Card.Content class="flex flex-col gap-y-2 p-0">
            <div class="text-muted-foreground text-s">
              A brief description about the item
            </div>
            <div
              class="flex justify-between items-center text-muted-foreground"
            >
              <div class="flex gap-x-1">
                <div
                  class="rounded-full text-sm h-[20px] w-[20px] text-center bg-gray-200"
                >
                  <div>JD</div>
                </div>
                <div class="text-sm">Jhon Doe</div>
              </div>
              <div class="flex items-center">
                <Eye size="16" />
                <div class="text-sm">1.2k</div>
              </div>
            </div>
          </Card.Content>
        </div>
      </Card.Root>
    </div>
  </div>
</div>
