<script>
  // @ts-nocheck
  import * as Card from "$lib/components/ui/card/index.js";
  import { Textarea } from "$lib/components/ui/textarea/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import SendHorizontal  from "lucide-svelte/icons/send-horizontal";
  import { onMount } from "svelte";
  import * as Avatar from "$lib/components/ui/avatar/index.js";
  import UserRound from "lucide-svelte/icons/user-round";
  import SquareArrowOutUpRight from 'lucide-svelte/icons/square-arrow-out-up-right';

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
          <Avatar.Fallback class="text-[#004fff] bg-[#0079ff14] font-medium"
            >L</Avatar.Fallback
          >
        </Avatar.Root>
        <div class="flex gap-x-2 items-center">
          <div class="font-medium">You</div>
          <div class="text-muted-foreground text-xs font-medium">10:00 AM</div>
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
          <Avatar.Fallback class="text-[#8a2be2] bg-[#7c00ff1c]"
            >AI</Avatar.Fallback
          >
        </Avatar.Root>
        <div class="flex gap-x-2 items-center">
          <div class="font-medium">AI Assistant</div>
          <div class="text-muted-foreground text-xs font-medium">10:00 AM</div>
        </div>
      </div>
      <div
        class="flex flex-col gap-y-4 px-4 relative
                 max-w-[90%] w-fit overflow-hidden break-all text-black ml-[45px]"
      >
        <!-- {msg} -->
        <div>
          An unofficial, community-led Svelte port of shadcn/ui. We are not
          affiliated An unofficial, community-led Svelte port of shadcn/ui. We
          are not affiliatedAn unofficial, community-led Svelte port of
          shadcn/ui. We are not affiliatedAn unofficial, community-led Svelte
          port of shadcn/ui. We are not affiliatedAn unofficial, community-led
          Svelte port of shadcn/ui. We are not affiliatedAn unofficial,
          community-led Svelte port of shadcn/ui.
        </div>
        <div class="flex gap-x-2 items-center">
        
          <Card.Root class="flex flex-col p-4 w-fit rounded-xl box-shadow gap-y-[20px] w-full max-w-[620px]">
            <div class="flex gap-x-[10px]">
              <div class="rounded-xl flex items-center justify-center h-[100px] max-w-[100px] w-full bg-gray-200">
                <UserRound size="50" />
              </div>
              <div class="flex flex-col gap-y-1 w-[100%]">
                <Card.Header class="p-0">
                  <Card.Title class="flex justify-between items-center text-md font-bold">
                    <div>Vector DB starterkit</div>
                  </Card.Title>
                </Card.Header>
                <Card.Content class="flex flex-col gap-y-2 p-0">
                  <div class="flex justify-between items-center">
                    <div class="flex flex-col gap-x-2 gap-y-2">
                      <div class="text-muted-foreground line-clamp-2">
                        Easy to Use, Deploy, and Scale — Use Your AWS Login to Store, Search, and Manage Vectors with Production-Ready API. Qdrant Is an Open-Source and Fully Managed High-Performance Vector Database.
                      </div>
                      <div class="flex justify-between items-center">
                        <div class="font-bold text-md">$50.34</div>
                        <div class="flex items-center gap-x-2 border border-gray-300 rounded-md px-2 py-1 text-xs font-bold text-center w-fit text-muted-foreground cursor-pointer">
                          <div>View</div>
                          <SquareArrowOutUpRight size="16"/>
                        </div>

                      </div>
                    </div>
                  </div>
                </Card.Content>
              </div>
            </div>
          </Card.Root>
          <Card.Root class="flex flex-col p-4 w-fit rounded-xl box-shadow gap-y-[20px] w-full max-w-[620px]">
            <div class="flex gap-x-[10px]">
              <div class="rounded-xl flex items-center justify-center h-[100px] max-w-[100px] w-full bg-gray-200">
                <UserRound size="50" />
              </div>
              <div class="flex flex-col gap-y-1 w-[100%]">
                <Card.Header class="p-0">
                  <Card.Title class="flex justify-between items-center text-md font-bold">
                    <div>Vector DB starterkit</div>
                  </Card.Title>
                </Card.Header>
                <Card.Content class="flex flex-col gap-y-2 p-0">
                  <div class="flex justify-between items-center">
                    <div class="flex flex-col gap-x-2 gap-y-2">
                      <div class="text-muted-foreground line-clamp-2">
                        Easy to Use, Deploy, and Scale — Use Your AWS Login to Store, Search, and Manage Vectors with Production-Ready API. Qdrant Is an Open-Source and Fully Managed High-Performance Vector Database.
                      </div>
                      <div class="flex justify-between items-center">
                        <div class="font-bold text-md">$50.34</div>
                        <div class="flex items-center gap-x-2 border border-gray-300 rounded-md px-2 py-1 text-xs font-bold text-center w-fit text-muted-foreground cursor-pointer">
                          <div>View</div>
                          <SquareArrowOutUpRight size="16"/>
                        </div>

                      </div>
                    </div>
                  </div>
                </Card.Content>
              </div>
            </div>
          </Card.Root>
        </div>
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
