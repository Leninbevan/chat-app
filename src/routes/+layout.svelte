<script lang="ts" module>
  const data = {
    options: {
      items: [
        {
          title: "Settings",
          icon: Settings,
        },
        {
          title: "Sign out",
          icon: LogOut,
        },
      ],
    },
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
            url: "/space-name/youtube",
            icon: Youtube,
            items: [],
          },
          {
            title: "Website",
            url: "/space-name/website",
            icon: Globe,
            items: [],
          },
          {
            title: "Documents",
            url: "/space-name/documents",
            icon: File,
            items: [],
          },
        ],
      },
      {
        title: "Documents content",
        items: [
          {
            title: "PDF guide to Vector Databases",
            url: "/pdf-guide-to-vector-databases",
            icon: File,
            items: [],
          },
          {
            title: "Research paper on RAG",
            url: "/research-paper-on-the-use-of-ai-in-the-medical-field",
            icon: File,
            items: [],
          },
          {
            title: "Technical Documentation",
            url: "/technical-documentation",
            icon: File,
            items: [],
          },
        ],
      },
    ],
  };

  const dialogData = [
    {
      icon: Globe,
      title: "Title of the document etc. with its icon",
      url: "/space-name/title-of-the-document-etc-with-its-icon",
    },
    {
      icon: Youtube,
      title: "Title of the video etc. with its icon",
      url: "/space-name/title-of-the-video-etc-with-its-icon",
    },
    {
      icon: File,
      title: "Title of the file etc. with its icon",
      url: "/space-name/title-of-the-file-etc-with-its-icon",
    },
    {
      icon: Plus,
      title: "Title of the doc/webpage etc. with its icon",
      url: "/space-name/title-of-the-doc&webpage-etc-with-its-icon",
    },
    {
      icon: Youtube,
      title: "Title of the video etc. with its icon",
      url: "/space-name/title-of-the-video-etc-with-its-icon",
    },
    {
      icon: File,
      title: "Title of the file etc. with its icon",
      url: "/space-name/title-of-the-file-etc-with-its-icon",
    },
    {
      icon: Plus,
      title: "Title of the doc/webpage etc. with its icon",
      url: "/space-name/title-of-the-doc&webpage-etc-with-its-icon",
    },
    
    {
      icon: Plus,
      title: "Title of the doc/webpage etc. with its icon",
      url: "/space-name/title-of-the-doc&webpage-etc-with-its-icon",
    },
    {
      icon: Youtube,
      title: "Title of the video etc. with its icon",
      url: "/space-name/title-of-the-video-etc-with-its-icon",
    },
    {
      icon: File,
      title: "Title of the file etc. with its icon",
      url: "/space-name/title-of-the-file-etc-with-its-icon",
    },
    {
      icon: Plus,
      title: "Title of the doc/webpage etc. with its icon",
      url: "/space-name/title-of-the-doc&webpage-etc-with-its-icon",
    },
    
    {
      icon: Plus,
      title: "Title of the doc/webpage etc. with its icon",
      url: "/space-name/title-of-the-doc&webpage-etc-with-its-icon",
    },
    {
      icon: Youtube,
      title: "Title of the video etc. with its icon",
      url: "/space-name/title-of-the-video-etc-with-its-icon",
    },
    {
      icon: File,
      title: "Title of the file etc. with its icon",
      url: "/space-name/title-of-the-file-etc-with-its-icon",
    },
    {
      icon: Plus,
      title: "Title of the doc/webpage etc. with its icon",
      url: "/space-name/title-of-the-doc&webpage-etc-with-its-icon",
    },
  ];

  const headerImage = { "space-name": Globe, "agent-name": UserRound };
</script>

<script lang="ts">
  import { goto, onNavigate } from "$app/navigation";
  import { page } from "$app/stores";
  import MenuSwitcher from "$lib/components/ui/menu-switcher/menu-switcher.svelte";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import UserRound from "lucide-svelte/icons/user-round";
  import Globe from "lucide-svelte/icons/globe";
  import Youtube from "lucide-svelte/icons/youtube";
  import File from "lucide-svelte/icons/file";
  import Plus from "lucide-svelte/icons/plus";
  import { onMount, type ComponentProps, type SvelteComponent } from "svelte";
  import { Toaster } from "svelte-sonner";
  import logo from "../assests/chatbot-logo.jpg";
  import "../styles/app.css";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import { derived } from "svelte/store";
  import { Button } from "$lib/components/ui/button/index.js";
  import Search from "lucide-svelte/icons/search";
  import Input from "$lib/components/ui/input/input.svelte";
  import Settings from 'lucide-svelte/icons/settings';
  import LogOut  from 'lucide-svelte/icons/log-out';
  import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "$lib/components/ui/breadcrumb/index.js";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import { Provider } from "$lib/components/ui/tooltip/index.js";

  function handleNavigate(endPoint: string): void {
    const paths = endPoint.split("/");
    console.log("Handle navigate", paths);
    breadcrumbPage = "";
    goto(endPoint).catch((err) => console.error("Navigation error:", err));
  }

  // function handleNav() {
  //   goto("/chats-page").catch((err) => console.error("Navigation error:", err));
  // }

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
  let userInput = "";
  $: filteredData = dialogData.filter(
    (group) =>
      group.title.toLowerCase().includes(userInput.toLowerCase()) ||
      userInput === "",
  );
  let breadcrumbPage = "";
  $: breadcrumb = ["space-name", "my-library"].includes(
    $page.url.pathname.split("/")[1],
  )
    ? breadcrumbPage
    : "";
  $: isDailogopen = false;

  // the reactive statement is used for breadcrumb temporarily
  $: {
    if ($page.url.pathname.split("/").length > 2) {
      const paths = $page.url.pathname.split("/");
      console.log("Path", paths);
      breadcrumbPage =
        paths[paths.length - 1].replaceAll("-", " ").charAt(0).toUpperCase() +
        paths[paths.length - 1]
          .replaceAll("-", " ")
          .slice(1, paths[paths.length - 1].replaceAll("-", " ").length);
    }
  }
</script>

<Toaster position="top-right" />
{#if $page.url.pathname !== "/"}
  <Sidebar.Provider>
    <Sidebar.Root {...restProps} bind:this={ref}>
      <Sidebar.Header class="p-0 h-[64px]">
        <img src={logo} alt="logo" class="object-cover h-full" />
      </Sidebar.Header>
      <Separator />
      <Sidebar.Content class="gap-0 ">
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
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <div
            class="flex items-center p-2 text-lg border rounded-[14px] gap-4 cursor-pointer"
            onclick={() => handleNavigate("/space-name")}
          >
            <div class="p-2 bg-gray-200 rounded-full">
              <Globe color="rgb(142 145 150)" />
            </div>
            <div class="text-base font-medium">Space name</div>
          </div>
          <div
            class="flex items-center p-2 text-lg border rounded-[14px] gap-4 cursor-pointer"
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
        <header
          class="flex h-16 shrink-0 items-center gap-2 border-b px-4 sticky top-0 z-50 bg-white"
        >
          <Sidebar.Trigger class="-ml-1" />
          <Separator orientation="vertical" class="mr-2 h-4" />
          <div class="flex justify-between w-full items-center">
            <!-- <div class="text-lg font-semibold">{$currentTabTitle}</div> -->
            {#if ["my-library", "space-name","settings"].includes($page.url.pathname.split("/")[1])}
              <Breadcrumb>
                <BreadcrumbList>
                  {#if breadcrumb}
                    <BreadcrumbItem>
                      {#if Object.keys(headerImage).includes($page.url.pathname.split("/")[1])}
                      <div class="p-2 bg-gray-200 rounded-md">
                        <svelte:component
                          this={headerImage[$page.url.pathname.split("/")[1] as keyof typeof headerImage]}
                          color="rgb(142 145 150)"
                        />
                      </div>
                        {/if}
                      <BreadcrumbLink
                        onclick={() => {
                          handleNavigate(
                            `/${$page.url.pathname.split("/")[1]}`,
                          );
                        }}
                        class="text-lg font-semibold"
                      >
                        {$page.url.pathname
                          .split("/")[1]
                          .replaceAll("-", " ")
                          .charAt(0)
                          .toUpperCase() +
                          $page.url.pathname
                            .split("/")[1]
                            .replaceAll("-", " ")
                            .slice(
                              1,
                              $page.url.pathname
                                .split("/")[1]
                                .replaceAll("-", " ").length,
                            )}
                      </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator />
                  {/if}

                  <BreadcrumbItem class="decoration-black">
                    {#if !breadcrumb && $page.url.pathname === "/space-name"}
                      <div class="p-2 bg-gray-200 rounded-md">
                        <svelte:component
                          this={headerImage[$page.url.pathname.split("/")[1] as keyof typeof headerImage]}
                          color="rgb(142 145 150)"
                        />
                      </div>
                    {/if}

                    <BreadcrumbPage
                      class="text-lg font-semibold decoration-black"
                      >{breadcrumb ||
                        $page.url.pathname
                          .split("/")
                          [
                            $page.url.pathname.split("/").length - 1
                          ].replaceAll("-", " ")
                          .charAt(0)
                          .toUpperCase() +
                          $page.url.pathname
                            .split("/")
                            [
                              $page.url.pathname.split("/").length - 1
                            ].replaceAll("-", " ")
                            .slice(
                              1,
                              $page.url.pathname
                                .split("/")
                                [
                                  $page.url.pathname.split("/").length - 1
                                ].replaceAll("-", " ").length,
                            )}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
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
      <div class="m-8 h-full overflow-y-auto scrollbar-none">
        <slot />
      </div>
    </Sidebar.Inset>

    <!-- Right niside navigation -->
    {#if ["space-name","chats-page"].includes($page.url.pathname.split("/")[1])}
      <Sidebar.Content class="border-l max-w-[350px]">
        <div class="flex flex-col gap-y-[20px] p-[20px]">
          <div class="relative">
            <Dialog.Root bind:open={isDailogopen}>
              <Dialog.Trigger class="w-full">
                <Search
                  class="text-muted-foreground absolute left-4 top-3 h-4 w-4 "
                />
                <Input
                  type="search"
                  placeholder="Search in sources"
                  class="pl-8 w-[100%] rounded-md box-shadow"
                  value={userInput}
                />
              </Dialog.Trigger>
              <Dialog.Content isClose={true} class="p-5 max-w-[450px]">
                <Dialog.Header >
                  <Dialog.Title >
                    Search Source items
                  </Dialog.Title>
                </Dialog.Header>
                <Dialog.Description class="w-full">
                  <div class="flex items-baseline">
                  
                    <Input
                      type="search"
                      placeholder="Search Source items..."
                      class="pl-2 rounded-md border-black mb-5"
                      bind:value={userInput}
                    />
                    <!-- <Search
                      class="text-muted-foreground absolute h-4 max-w-4 right-1"
                    /> -->
                  </div>
                    <div class="flex flex-col gap-5 pt-2 h-[25em] overflow-auto">

                      {#each filteredData as group}
                        {#if group.title.includes(userInput) || userInput === ""}
                          <!-- svelte-ignore a11y_click_events_have_key_events -->
                          <!-- svelte-ignore a11y_no_static_element_interactions -->
                           <div class="flex flex-col gap-4">

                           
                          <div
                            class={`hover:bg-gray-200 rounded-lg flex items-center gap-2 cursor-pointer text-base text-black`}
                            onclick={() => {
                              breadcrumbPage = group.title;
                              isDailogopen = false;
                            }}
                          >
                          <div class="bg-gray-50 p-2 border rounded-md">
                            
                            <svelte:component
                              this={group.icon}
                              color="rgb(142 145 150)"
                              size={20}
                            />
                          </div>
                          
 {group.title}
                          </div>
                          <Separator/>
                        </div>
                        {/if}
                      {/each}
                    </div>
                </Dialog.Description>
              </Dialog.Content>
            </Dialog.Root>
          </div>
          {#each rightData.navMain as group (group.title)}
            <Sidebar.Group
              class="p-0 cursor-pointer"
            >
              <Sidebar.GroupLabel class="text-black p-0">
                <div class="text-sm text-muted-foreground">
                  {group.title}
                </div>
              </Sidebar.GroupLabel>
              {#if group.items.length > 0}
                <Sidebar.GroupContent>
                  <Sidebar.Menu class="gap-y-2">
                    {#each group.items as item (item.title)}
                      <Sidebar.MenuItem>
                        <div
                          class="flex border rounded-lg items-center right-side-parent"
                        >
                          <Sidebar.MenuButton
                            class={`py-[37px] px-[14px] font-medium ${breadcrumbPage === item.title ? "active-blue" : ""}`}
                            onclick={() => {
                              breadcrumbPage = item.title;
                            }}
                          >
                            <div
                              class="bg-white border p-2 rounded-md flex items-center">
                              {#if typeof item.icon === "function"}
                                <svelte:component
                                  this={item.icon}
                                  color="rgb(142 145 150)"
                                />
                              {/if}
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
