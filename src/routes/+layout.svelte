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

  const rightData = {
    navMain: [
      {
        title: "Sources",
        items: [
          {
            title: "Youtube",
            url: "/youtube",
            icon: Youtube,
            items: [],
          },
          {
            title: "Website",
            url: "/website",
            icon: Globe,
            items: [],
          },
          {
            title: "Documents",
            url: "/documents",
            icon: File,
            items: [],
          },
        ],
      },
    ],
  };

  const dialogData = [
    { 
      icon: Globe ,
      title:"Title of the document etc. with its icon",
      url:"/title-of-the-document-etc-with-its-icon"
    },
    { 
      icon: Youtube ,
      title:"Title of the video etc. with its icon",
      url:"/title-of-the-video-etc-with-its-icon"
    },
    { 
      icon: File ,
      title:"Title of the file etc. with its icon",
      url:"/title-of-the-file-etc-with-its-icon"
    },
    { 
      icon: Plus ,
      title:"Title of the doc/webpage etc. with its icon",
      url:"/title-of-the-doc&webpage-etc-with-its-icon"
    }
    ];

    
</script>

<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import MenuSwitcher from "$lib/components/ui/menu-switcher/menu-switcher.svelte";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import UserRound from "lucide-svelte/icons/user-round";
  import Globe from "lucide-svelte/icons/globe";
  import Youtube from "lucide-svelte/icons/youtube";
  import File from "lucide-svelte/icons/file";
  import Plus from "lucide-svelte/icons/plus";
  import type { ComponentProps, SvelteComponent } from "svelte";
  import { Toaster } from "svelte-sonner";
  import logo from "../assests/logo.jpg";
  import "../styles/app.css";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import { derived } from "svelte/store";
  import { Button } from "$lib/components/ui/button/index.js";
  import Search from "lucide-svelte/icons/search";
  import Input from "$lib/components/ui/input/input.svelte";
  import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "$lib/components/ui/breadcrumb/index.js";
  import * as Dialog from "$lib/components/ui/dialog/index.js";

  function handleNavigate(endPoint: string): void {
    console.log("navigate");
    goto(endPoint).catch((err) => console.error("Navigation error:", err));
  }

  const currentTabTitle = derived(page, ($page) => {
    for (const group of data.navMain) {
      if ($page.url.pathname === group.url) return group.title;
      for (const item of group.items) {
        if ($page.url.pathname === item.url) return item.title;
      }
    }
    // for (const group of rightData.navMain) {
    //   for (const item of group.items) {
    //     if ($page.url.pathname === item.url) return item.title;
    //   }
    // }
  });

  let ref: SvelteComponent | null = null;
  let restProps: Partial<ComponentProps<typeof Sidebar.Root>> = {};
  let userInput = "";
  $: filteredData = dialogData.filter(group => 
    group.title.toLowerCase().includes(userInput.toLowerCase()) || userInput === ""
  );
  $:breadcrumpPage="";
  $:isDailogopen=false;
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
            onclick={() => handleNavigate("/space_name")}
          >
            <div class="p-2 bg-gray-200 rounded-full">
              <Globe color="rgb(142 145 150)" />
            </div>
            <div class="text-base font-medium">Space name</div>
          </div>
          <div
            class="flex items-center p-2 text-lg border rounded-[14px] gap-4"
          >
            <div class="p-2 bg-gray-200 rounded-full">
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
            <!-- <div class="text-lg font-semibold">{$currentTabTitle}</div> -->
            {#if ["Youtube", "Website", "Documents","Title of the document etc. with its icon","Title of the video etc. with its icon","Title of the file etc. with its icon","Title of the doc/webpage etc. with its icon"].includes(breadcrumpPage)}
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/space_name"
                      class="text-lg font-semibold">Space name</BreadcrumbLink
                    >
                  </BreadcrumbItem>
                  {#if breadcrumpPage}
                  <BreadcrumbSeparator />
                  <BreadcrumbItem class="decoration-black">
                    <BreadcrumbPage
                      class="text-lg font-semibold decoration-black"
                      >{breadcrumpPage}</BreadcrumbPage
                    >
                  </BreadcrumbItem>
                  {/if}
                </BreadcrumbList>
              </Breadcrumb>
            {:else if $page.url.pathname === "/space_name"}
              <div class="text-lg font-semibold">Space name</div>
            {:else}
              <div class="text-lg font-semibold">{$currentTabTitle}</div>
            {/if}
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

    <!-- Right niside navigation -->
    {#if ["Youtube", "Website", "Documents", "/space_name",""].includes($page.url.pathname)}
      <Sidebar.Content class="gap-0 flex-none border-l w-xl mt-2">
        <div class="py-[30px]">
          <div class="relative px-2">
            <Dialog.Root bind:open={isDailogopen}>
              <Dialog.Trigger>
                <Search
                  class="text-muted-foreground absolute left-4 top-3 h-4 w-4 "
                />
                <Input
                  type="search"
                  placeholder="Search in sources"
                  class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] rounded-md box-shadow"
                  value={userInput}
                />
              </Dialog.Trigger>
              <Dialog.Content isClose={false} class="p-2">
                
                  <Dialog.Header class="">
                    <Dialog.Title>
                      <Search
                        class="text-muted-foreground absolute left-4 top-5 h-4 w-4 "
                      />
                      <Input
                        type="search"
                        placeholder="Search in sources"
                        class="pl-8 rounded-md border"
                        bind:value={userInput}
                      />
                    </Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Description>
                    {#each filteredData as group}
                    {#if group.title.includes(userInput)||userInput===""}
                    <div
                      class={`p-2 py-3 hover:bg-gray-200 rounded-lg flex items-center gap-2`}
                      onclick={()=>{breadcrumpPage=group.title;isDailogopen=false}}
                    >
                        <svelte:component
                          this={group.icon}
                          color="rgb(142 145 150)"
                          size={20}
                        />
                      {group.title}
                    </div>
                    {/if}
                    {/each}
                  </Dialog.Description>
                
              </Dialog.Content>
            </Dialog.Root>
          </div>
          {#each rightData.navMain as group (group.title)}
            <Sidebar.Group
              class="pt-2 pr-2 pb-[2px] pl-2 !important cursor-pointer"
            >
              <Sidebar.GroupLabel class={`pt-5 pb-5 pl-3  text-black `}>
                <div class="text-sm">
                  {group.title}
                </div>
              </Sidebar.GroupLabel>
              {#if group.items.length > 0}
                <Sidebar.GroupContent class="pl-2">
                  <Sidebar.Menu>
                    {#each group.items as item (item.title)}
                      <Sidebar.MenuItem class="ml-2">
                        <div
                          class="flex border p-2 mr-2 rounded-lg items-center mb-2 hover:bg-[hsl(240 4.8% 95.9%)]"
                        >
                          <Sidebar.MenuButton
                            class={`pt-5 pb-5 pl-3 font-medium ${breadcrumpPage === item.url ? "active" : ""}`}
                            onclick={() => {breadcrumpPage=item.title}}
                          >
                            <div
                              class={`p-2 ${breadcrumpPage=== item.url ? "focus:bg-black" : "bg-gray-200"} rounded-lg flex items-center`}
                            >
                              {#if typeof item.icon === "function"}
                                <svelte:component
                                  this={item.icon}
                                  color="rgb(142 145 150)"
                                />
                              {/if}

                              <!-- {item?.icon} -->
                            </div>
                            {item.title}
                          </Sidebar.MenuButton>
                        </div>
                      </Sidebar.MenuItem>
                    {/each}
                  </Sidebar.Menu>
                </Sidebar.GroupContent>
              {/if}
            </Sidebar.Group>
          {/each}
        </div>
      </Sidebar.Content>
    {/if}
  </Sidebar.Provider>
{:else}
  <slot />
{/if}
