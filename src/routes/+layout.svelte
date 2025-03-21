<script lang="ts" module>
  const data = {
    options: "Signout",
    navMain: [
      {
        title: "Discover",
        url: "/discover",
        items: [
          {
            title: "Spaces",
            url: "/spaces",
            isActive: false,
          },
          {
            title: "Agents",
            url: "/agents",
            isActive: false,
          },
          {
            title: "Characters",
            url: "/characters",
            isActive: false,
          },
        ],
      },
      {
        title: "Chats",
        url: "/chats",
        items: [],
      },
      {
        title: "Dashboard",
        url: "/dashboard",
        items: [],
      },
      {
        title: "My Library",
        url: "/my-library",
        items: [],
      },
    ],
  };
</script>

<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import MenuSwitcher from "$lib/components/ui/menu-switcher/menu-switcher.svelte";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import UserRound from "lucide-svelte/icons/user-round";
  import Globe from "lucide-svelte/icons/globe";
  import Plus from "lucide-svelte/icons/plus";
  import type { ComponentProps, SvelteComponent } from "svelte";
  import { Toaster } from "svelte-sonner";
  import logo from "../assests/logo.jpg";
  import "../styles/app.css";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import { derived } from "svelte/store";
  import { Button } from "$lib/components/ui/button/index.js";

  
  function handleNavigate(endPoint: string): void {
    goto(endPoint).catch((err) => console.error("Navigation error:", err));
  }

  const currentTabTitle = derived(page, ($page) => {
    for (const group of data.navMain) {
      if ($page.url.pathname === group.url) return group.title;
      for (const item of group.items) {
        if ($page.url.pathname === item.url) return item.title;
      }
    }
  });


  let ref: SvelteComponent | null = null;
  let restProps: Partial<ComponentProps<typeof Sidebar.Root>> = {};
</script>

<Toaster position="top-right" />
{#if $page.url.pathname !== "/"}
  <Sidebar.Provider>
    <Sidebar.Root {...restProps} bind:this={ref}>
      <Sidebar.Header class="p-0">
        <img src={logo} alt="logo" class="h-[64px]" />
      </Sidebar.Header>
      <Separator />
      <Sidebar.Content class="gap-0">
        {#each data.navMain as group (group.title)}
          <Sidebar.Group
            class="pt-2 pr-2 pb-[2px] pl-2 !important cursor-pointer"
          >
            <Sidebar.GroupLabel
              onclick={() => handleNavigate(group.url)}
              class={`pt-5 pb-5 pl-3  text-black ${$page.url.pathname === group.url ? "active" : ""}`}
            >
              <button class="text-sm">
                {group.title}
              </button>
            </Sidebar.GroupLabel>
            {#if group.items.length > 0}
              <Sidebar.GroupContent class="pl-2">
                <Sidebar.Menu>
                  {#each group.items as item (item.title)}
                    <Sidebar.MenuItem class="ml-2">
                      <Sidebar.MenuButton
                        class={`pt-5 pb-5 pl-3 font-medium ${$page.url.pathname === item.url ? "active" : ""}`}
                        onclick={() => handleNavigate(item.url)}
                      >
                        {item.title}
                      </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                  {/each}
                </Sidebar.Menu>
              </Sidebar.GroupContent>
            {/if}
          </Sidebar.Group>
        {/each}
        <div class="flex flex-col gap-2.5 px-4 mt-4">
          <div>Recent</div>
          <div
            class="flex items-center p-2 text-lg border rounded-[14px] gap-4"
          >
            <div class="p-2 bg-gray-200 rounded-md">
              <Globe color="rgb(142 145 150)" />
            </div>
            <div class="text-base font-medium">Space name</div>
          </div>
          <div
            class="flex items-center p-2 text-lg border rounded-[14px] gap-4"
          >
            <div class="p-2 bg-gray-200 rounded-md">
              <UserRound color="rgb(142 145 150)" />
            </div>
            <div class="text-base font-medium">Agent name</div>
          </div>
        </div>
      </Sidebar.Content>
      <Sidebar.Footer>
        <MenuSwitcher options={data.options} />
      </Sidebar.Footer>
      <Sidebar.Rail />
    </Sidebar.Root>
    <Sidebar.Inset>
      {#if !["/discover", "/spaces", "/characters", "/agents"].includes($page.url.pathname)}
        <header class="flex h-16 shrink-0 items-center gap-2 border-b px-4 sticky top-0 z-50 bg-white">
          <Sidebar.Trigger class="-ml-1" />
          <Separator orientation="vertical" class="mr-2 h-4" />
          <div class="flex justify-between w-full items-center">
            <div class="text-lg font-semibold">{$currentTabTitle || "Chat"}</div>
            {#if $page.url.pathname === "/chats"}
              <Button class="bg-black">
                <Plus />
                <div>New chat</div>
              </Button>
            {/if}
          </div>
        </header>
      {/if}
      <div class="m-8 h-full overflow-y-auto">
        <slot />
      </div>
    </Sidebar.Inset>
  </Sidebar.Provider>
{:else}
  <slot />
{/if}
