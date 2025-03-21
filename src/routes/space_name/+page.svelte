<script>
    import { Textarea } from "$lib/components/ui/textarea/index.js";
  import Globe from "lucide-svelte/icons/globe";
  import SendHorizontal from "lucide-svelte/icons/send-horizontal";
  let message=""
</script>

<div class="mt-4 align-middle flex justify-center items-center flex-col">
  <div
    class="p-2 bg-gray-200 rounded-md w-36 flex justify-center items-center mt-10"
  >
    <Globe color="rgb(142 145 150)" size={120} />
  </div>
    <div class="decoration-black text-lg font-medium">Space Name</div>
    <div class="text-gray-500 text-sm">A brief description about the space</div>
  <div class="relative mt-10 w-2/3">
    <Textarea class="w-full h-full max-h-full min-h-36 px-2 py-1 pr-10 border-none resize-none outline rounded-lg shadow-md" placeholder="Type here to chat..." bind:value={message}/>
    <div
      class="absolute right-3 bottom-3 text-gray-500 hover:text-blue-500"
      onclick={() => console.log("Message submitted:", message)}
    >
      <SendHorizontal size={20} />
    </div>
  </div>
</div>
