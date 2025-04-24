<script>
    import { Textarea } from "$lib/components/ui/textarea/index.js";
  import Globe from "lucide-svelte/icons/globe";
  import SendHorizontal from "lucide-svelte/icons/send-horizontal";
  let message=""
</script>

<div class="flex justify-center items-center flex-col gap-y-2">
  <div
    class="p-2 bg-gray-200 rounded-md w-36 flex justify-center items-center mt-10"
  >
    <Globe color="rgb(142 145 150)" size={120} />
  </div>
    <div class="text-xl font-bold">Space Name</div>
    <div class="text-gray-500 max-w-[50%] text-center text-md">A brief description about this space. Ask questions about the contents of this space to get AI powered answers</div>
  <div class="relative w-[80%] mt-6 box-shadow rounded-lg bg-white border border-[#e5e4e4]">
    <Textarea class="w-full h-full max-h-full min-h-36 px-2 py-1 pr-10 border-none resize-none" autofocus placeholder="Type your question here..." bind:value={message}/>
    <div
      class="absolute right-3 bottom-3 bg-black p-2 rounded-lg text-white cursor-pointer"
      onclick={() => console.log("Message submitted:", message)}
    >
      <SendHorizontal size={20} class="rotate-[322deg]"/>
    </div>
  </div>
</div>
