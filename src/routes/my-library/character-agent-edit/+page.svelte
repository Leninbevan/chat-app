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

  let file;
  let previewUrl = "";
  let value = 5;

  function handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (target && target.files && target.files[0]) {
      file = target.files[0];
      previewUrl = URL.createObjectURL(file);
    }
  }
</script>

<div class="flex flex-col gap-y-5 w-full pr-1.5">
  <div class="flex justify-between items-center">
    <div class="font-bold text-2xl">Edit Agent</div>
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
        <div
          class="p-2 bg-[#ffa9003b] rounded-[9px] border border-[#ffa900] text-[#8c6820] text-[14px] font-medium"
        >
          Public agents require admin apporoval before they become visible to
          other users.
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-y-3 pb-8 border-b-2">
    <div class="font-bold text-lg">Inststructions</div>
    <div class="flex flex-col gap-y-1">
      <div class="text-muted-foreground">
        Define how this agent shouold behave when interacting with the users. 
      </div>
        <Textarea placeholder="Descripe your space" class="mt-2" />
    </div>
    <div class="bg-gray-100 rounded-md p-4">
      <div class="flex flex-col gap-y-1">
        <div>Tips for effective instructions:</div>
        <ul class="list-disc pl-5 text-muted-foreground">
          <li>Be specific abot the agent's personality and tone</li>
          <li>Clearly define what tasks it should perform</li>
          <li>Include examples od desired responses when apporpriate</li>
          <li>Specify any limitations or boundaries</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-y-3 pb-8 border-b-2">
    <div class="font-bold text-lg">AI Model Settings</div>
    <div class="flex flex-col gap-y-1">
      <div class="text-muted-foreground">
        Configure the AI model behaviour. 
      </div>
      <div class="flex gap-x-5 items-center">
        <div class="w-[100%]">
          <Label>Model</Label>
          <Select.Root type="single">
            <Select.Trigger class="rounded-md mt-2 w-full"
              >GPT-4</Select.Trigger
            >
            <Select.Content>
              <Select.Item value="light">GPT-3</Select.Item>
              <Select.Item value="dark">GPT-3.5</Select.Item>
              <Select.Item value="system">GPT-2</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
        <div class="flex flex-col gap-y-2 w-[100%]">
          <div class="flex justify-between">
            <div>Temperature</div>
            <div class="text-sm text-muted-foreground">
              0.7
            </div>
          </div>
          <div>
            <Slider type="single" bind:value={value} max={10} step={1} class="mt-2 [&>span]:w-3 [&>span]:h-3 cursor-pointer"/>
          </div>
          <div class="flex justify-between text-muted-foreground">
            <div>Precise</div>
            <div>Creative</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-y-3">
    <div class="font-bold text-2xl text-red-600">Danger Zone</div>
    <div>These actions cannot be undone</div>
    <Button variant="destructive" class="w-fit">Delete agent</Button>
  </div>
</div>
