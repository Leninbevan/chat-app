<script>
  // @ts-nocheck
  import { Card, CardContent } from "$lib/components/ui/card";
  import { Textarea } from "$lib/components/ui/textarea/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { SendHorizontal } from "lucide-svelte";
  import { onMount } from "svelte";
  import * as Avatar from "$lib/components/ui/avatar/index.js";

  let message = "";
  let messages = [];
  let chatContainer;

  function sendMessage() {
    if (message.trim()) {
      messages = [...messages, message];
      message = "";
      scrollToBottom();
    }
  }

  function scrollToBottom() {
    setTimeout(() => {
      chatContainer?.scrollTo({
        top: chatContainer.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  }

  onMount(scrollToBottom);
</script>

<div class="h-[85vh] flex flex-col">
  <div
    bind:this={chatContainer}
    class="flex-grow overflow-auto space-y-4 pb-16"
  >
    {#each messages as msg}
      <!-- <div class="flex"> -->
        <div class="flex gap-x-2 items-center">
          <Avatar.Root>
            <Avatar.Fallback class="text-[#004fff] bg-[#0079ff14] font-medium">L</Avatar.Fallback>
          </Avatar.Root>
          <div class="flex gap-x-2 items-center">
            <div class="font-medium">You</div>
            <div class="text-muted-foreground text-xs font-medium">
              10:00 AM
            </div>
          </div>
        </div>
        <div
          class="rounded-md p-4 relative
                 max-w-[90%] w-fit overflow-hidden break-all text-black bg-[#0079ff14] ml-[45px]"
        >
          {msg}
        </div>
        <div class="flex gap-x-2 items-center">
          <Avatar.Root>
            <Avatar.Fallback class="text-[#8a2be2] bg-[#7c00ff1c]">AI</Avatar.Fallback>
          </Avatar.Root>
          <div class="flex gap-x-2 items-center">
            <div class="font-medium">AI Assistant</div>
            <div class="text-muted-foreground text-xs font-medium">
              10:00 AM
            </div>
          </div>
        </div>
        <div
          class="rounded-md p-4 relative
                 max-w-[90%] w-fit overflow-hidden break-all text-black bg-[#0079ff14] ml-[45px]"
        >
          <!-- {msg} -->
          An unofficial, community-led Svelte port of shadcn/ui. We are not affiliated An unofficial, community-led Svelte port of shadcn/ui. We are not affiliatedAn unofficial, community-led Svelte port of shadcn/ui. We are not affiliatedAn unofficial, community-led Svelte port of shadcn/ui. We are not affiliatedAn unofficial, community-led Svelte port of shadcn/ui. We are not affiliatedAn unofficial, community-led Svelte port of shadcn/ui.
        </div>
      <!-- </div> -->
    {/each}
  </div>

  <div
    class="relative w-full box-shadow rounded-lg bg-white border border-[#e5e4e4]"
  >
    <Textarea
      bind:value={message}
      class="w-full h-full max-h-full min-h-36 px-2 py-1 pr-10 border-none resize-none break-words whitespace-pre-wrap"
      autofocus
      onkeypress={(e) => {
        console.log("e", e);
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          sendMessage();
        }
      }}
      rows="5"
      placeholder="Ask another question..."
    />
    <Button
      class="absolute right-3 bottom-3 bg-black p-3 rounded-lg text-white cursor-pointer"
      on:click={sendMessage}
    >
      <SendHorizontal size={20} class="rotate-[322deg]" />
    </Button>
  </div>

</div>
