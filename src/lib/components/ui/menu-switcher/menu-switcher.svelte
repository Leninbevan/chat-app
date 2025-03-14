<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import Check from "@lucide/svelte/icons/check";
  import ChevronsUpDown from "@lucide/svelte/icons/chevrons-up-down";
  import GalleryVerticalEnd from "@lucide/svelte/icons/gallery-vertical-end";
  import Avatar from "../avatar/avatar.svelte";
  import AvatarImage from "../avatar/avatar-image.svelte";
  import AvatarFallback from "../avatar/avatar-fallback.svelte";
  import { authClient } from "$lib/auth-client";
  import { goto } from "$app/navigation";
  import { toast } from "svelte-sonner";

  let { options }: { options: any } = $props();

  const signout = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("Logged-out successful!");
            goto("/");
          },
          onError: () => {
            toast.error("Logged-out failed!");
          },
        },
      });
    } catch (error) {
      console.error("Signout failed:", error);
    }
  };
  
</script>

<Sidebar.Menu>
  <Sidebar.MenuItem>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        {#snippet child({ props })}
          <Sidebar.MenuButton
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            {...props}
          >
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="chatbot" />
              <AvatarFallback>chatbot</AvatarFallback>
            </Avatar>
            <div class="flex flex-col gap-0.5 leading-none">
              <span class="font-semibold">Lenin Bevan</span>
              <span class="">leninbevan@gmail.com</span>
            </div>
            <ChevronsUpDown class="ml-auto" />
          </Sidebar.MenuButton>
        {/snippet}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        class="w-[var(--bits-dropdown-menu-anchor-width)]"
        align="start"
      >
        <DropdownMenu.Item onSelect={signout}>
          {options}
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </Sidebar.MenuItem>
</Sidebar.Menu>
