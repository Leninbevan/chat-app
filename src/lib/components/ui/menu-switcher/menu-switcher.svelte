<script lang="ts">
  import { goto } from "$app/navigation";
  import { authClient } from "$lib/auth-client.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
  import UserRound from "lucide-svelte/icons/user-round";
  import { toast } from "svelte-sonner";


  let { options }: { options: any } = $props();

  function handleSelect(item: any) {
    if (item.title === "Sign out") {
      signout();
    } else if (item.title === "Settings") {
      goto("/settings");
    }
  }

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
            <div class="bg-gray-200 p-[7px] rounded-full">
              <UserRound color="rgb(142 145 150)" />
            </div>
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
        {#each options.items as item}
          <DropdownMenu.Item onSelect={() => handleSelect(item)}>
            <item.icon class="w-4 h-4 mr-2" />
            {item.title}
          </DropdownMenu.Item>
        {/each}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </Sidebar.MenuItem>
</Sidebar.Menu>

