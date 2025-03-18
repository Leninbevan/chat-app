<script>
  import * as Card from "$lib/components/ui/card/index.js";
  import UserRound from "lucide-svelte/icons/user-round";
  import Eye from "lucide-svelte/icons/eye";
</script>

<div class="flex flex-wrap gap-y-5 gap-x-10 mt-4 mb-6">
  <Card.Root
    class="flex items-center p-4 w-fit rounded-xl box-shadow gap-x-[20px] w-full max-w-[610px]"
  >
    <div class="rounded-md p-7 bg-gray-200">
      <UserRound />
    </div>
    <div class="flex flex-col gap-y-1 w-[100%]">
      <Card.Header class="p-0">
        <Card.Title class="text-md font-medium"
          >Space or agent name</Card.Title
        >
      </Card.Header>
      <Card.Content class="flex flex-col gap-y-2 p-0">
        <div class="text-muted-foreground text-s">
          Excerpt of the query made by the user
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
    class="flex items-center p-4 w-fit rounded-xl box-shadow gap-x-[20px] w-full max-w-[610px]"
  >
    <div class="rounded-md p-7 bg-gray-200">
      <UserRound />
    </div>
    <div class="flex flex-col gap-y-1 w-[100%]">
      <Card.Header class="p-0">
        <Card.Title class="text-md font-medium"
          >Space or agent name</Card.Title
        >
      </Card.Header>
      <Card.Content class="flex flex-col gap-y-2 p-0">
        <div class="text-muted-foreground text-s">
          Excerpt of the query made by the user
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
    class="flex items-center p-4 w-fit rounded-xl box-shadow gap-x-[20px] w-full max-w-[610px]"
  >
    <div class="rounded-md p-7 bg-gray-200">
      <UserRound />
    </div>
    <div class="flex flex-col gap-y-1 w-[100%]">
      <Card.Header class="p-0">
        <Card.Title class="text-md font-medium"
          >Space or agent name</Card.Title
        >
      </Card.Header>
      <Card.Content class="flex flex-col gap-y-2 p-0">
        <div class="text-muted-foreground text-s">
          Excerpt of the query made by the user
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
    class="flex items-center p-4 w-fit rounded-xl box-shadow gap-x-[20px] w-full max-w-[610px]"
  >
    <div class="rounded-md p-7 bg-gray-200">
      <UserRound />
    </div>
    <div class="flex flex-col gap-y-1 w-[100%]">
      <Card.Header class="p-0">
        <Card.Title class="text-md font-medium"
          >Space or agent name</Card.Title
        >
      </Card.Header>
      <Card.Content class="flex flex-col gap-y-2 p-0">
        <div class="text-muted-foreground text-s">
          Excerpt of the query made by the user
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
