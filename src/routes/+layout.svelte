<script lang="ts" module>
  const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
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
    ],
  };
</script>

<script lang="ts">
  import "../app.css";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import { page } from "$app/stores";
  import MenuSwitcher from "$lib/components/ui/menu-switcher/menu-switcher.svelte";
  import logo from "../assests/logo.jpg";
  import type { ComponentProps } from "svelte";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import { goto } from "$app/navigation";
  import type { SvelteComponent } from "svelte";
  import Avatar from "$lib/components/ui/avatar/avatar.svelte";
  import { AvatarFallback, AvatarImage } from "$lib/components/ui/avatar";

  function handleNavigate(endPoint: string): void {
    if (endPoint) {
      goto(endPoint).catch((err) => console.error("Navigation error:", err));
    }
  }

  let ref: SvelteComponent | null = null;
  let restProps: Partial<ComponentProps<typeof Sidebar.Root>> = {};
</script>

{#if $page.url.pathname !== "/"}
  <Sidebar.Provider>
    <Sidebar.Root {...restProps} bind:this={ref}>
      <Sidebar.Header class="p-0">
        <img src={logo} alt="logo" class="h-[64px]" />
      </Sidebar.Header>
      <Sidebar.Content class="gap-0">
        {#each data.navMain as group (group.title)}
          <Sidebar.Group
            class="pt-2 pr-2 pb-[2px] pl-2 !important cursor-pointer"
          >
            <Sidebar.GroupLabel
              onclick={() => handleNavigate(group.url)}
              class={`text-black font-bold ${$page.url.pathname === group.url ? "active" : ""}`}
            >
              <button class="text-sm">
                {group.title}
              </button>
            </Sidebar.GroupLabel>
            {#if group.items.length > 0}
              <Sidebar.GroupContent class="pl-3">
                <Sidebar.Menu class="border-l-2">
                  {#each group.items as item (item.title)}
                    <Sidebar.MenuItem class="ml-2 font-bold">
                      <Sidebar.MenuButton
                        class={$page.url.pathname === item.url ? "active" : ""}
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
            class="flex items-center justify-between p-4 text-lg border border-black"
          >
            <div>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="chatbot"
                />
                <AvatarFallback>chatbot</AvatarFallback>
              </Avatar>
            </div>
            <div>Space name</div>
          </div>
          <div
            class="flex items-center justify-between p-4 text-lg border border-black"
          >
            <div>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="chatbot"
                />
                <AvatarFallback>chatbot</AvatarFallback>
              </Avatar>
            </div>
            <div>Agent name</div>
          </div>
        </div>
      </Sidebar.Content>
      <Sidebar.Footer>
        <MenuSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
      </Sidebar.Footer>
      <Sidebar.Rail />
    </Sidebar.Root>
    <Sidebar.Inset>
      <header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <Sidebar.Trigger class="-ml-1" />
        <Separator orientation="vertical" class="mr-2 h-4" />
      </header>
      <div class="p-8">
        <slot />
      </div>
    </Sidebar.Inset>
  </Sidebar.Provider>
{:else}
  <slot />
{/if}
