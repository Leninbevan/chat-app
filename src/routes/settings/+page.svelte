<script lang="ts">
  import { Badge } from "$lib/components/ui/badge/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Progress } from "$lib/components/ui/progress/index.js";
  import { SelectSeparator } from "$lib/components/ui/select/index.js";
  import * as Table from "$lib/components/ui/table/index.js";
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import ChartNoAxesColumn from "lucide-svelte/icons/chart-no-axes-column";
  import Check from "lucide-svelte/icons/check";
  import CreditCard from "lucide-svelte/icons/credit-card";
  import UserRound from "lucide-svelte/icons/user-round";
  import TriangleAlert from "lucide-svelte/icons/triangle-alert";

  let file;
  let previewUrl = $state("");

  function handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (target && target.files && target.files[0]) {
      file = target.files[0];
      previewUrl = URL.createObjectURL(file);
    }
  }

  let activeTab = $state("Usage");

  const tabs = [
    { title: "Profile", icon: UserRound },
    { title: "Billing", icon: CreditCard },
    { title: "Usage", icon: ChartNoAxesColumn },
  ];

  const invoices = [
    {
      date: "JUN 30, 2001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
      plan: "Basic",
      invoice: "INV006",
    },
    {
      date: "SEP 03, 2006",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
      plan: "Pro",
      invoice: "INV007",
    },
  ];
  let value = $state(80);
</script>

<div class="mt-4">
  <Tabs.Root bind:value={activeTab} class="w-full h-[40px]">
    <Tabs.List class="flex gap-2 bg-gray-200 p-[5px] rounded-md">
      {#each tabs as tab}
        <Tabs.Trigger
          value={tab.title}
          class={`p-[6px] rounded-md w-[33%] flex items-center justify-center gap-2 ${
            activeTab === tab.title ? "box-shadow" : ""
          }`}
        >
          <tab.icon class="w-4 h-4" />
          {tab.title}
        </Tabs.Trigger>
      {/each}
    </Tabs.List>

    {#each tabs as tab}
      <Tabs.Content value={tab.title}>
        {#if tab.title === "Profile"}
          <div class="flex flex-col gap-y-4">
            <div class="flex flex-col gap-y-4 border rounded-xl p-4 box-shadow">
              <div class="flex flex-col gap-y-1">
                <div class="font-bold">Personal information</div>
                <div class="text-muted-foreground text-sm">
                  Update your personal details and profile picture
                </div>
              </div>
              <div class="flex w-[100%] gap-x-10 items-center">
                <div class="flex flex-col gap-2 items-center">
                  <div class="flex flex-col items-center">
                    <Label for="image" class="cursor-pointer">
                      {#if previewUrl}
                        <img
                          src={previewUrl}
                          alt="Preview"
                          class="w-[100px] h-[100px] object-cover rounded-full border"
                        />
                      {:else}
                        <div
                          class="w-[100px] h-[100px] flex flex-col items-center justify-center border-2 bg-gray-200 rounded-full text-gray-500"
                        >
                          LB
                        </div>
                      {/if}
                    </Label>
                    <Input
                      id="image"
                      type="file"
                      class="hidden"
                      onchange={handleFileChange}
                    />
                  </div>
                  <div>
                    <Button variant="outline" class="text-muted-foreground"
                      >Change image</Button
                    >
                  </div>
                </div>
                <div class="flex flex-col gap-y-3 w-full">
                  <div class="flex justify-between">
                    <div class="w-[48%]">
                      <Label for="fname">First Name</Label>
                      <Input
                        id="fname"
                        type="text"
                        class="mt-2"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="w-[48%]">
                      <Label for="lname">Last Name</Label>
                      <Input
                        id="lname"
                        type="text"
                        class="mt-2"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div>
                    <Label for="name">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      class="mt-2"
                      placeholder="email"
                    />
                  </div>
                </div>
              </div>
              <div class="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </div>
            </div>
            <div class="flex flex-col gap-y-4 border rounded-xl p-4 box-shadow">
              <div class="flex flex-col gap-y-1">
                <div class="font-bold">Change Password</div>
                <div class="text-muted-foreground text-sm">
                  Update your password to keep your account secure
                </div>
              </div>
              <div class="flex w-[100%] gap-x-10 items-center">
                <div class="flex flex-col gap-y-3 w-full">
                  <div>
                    <Label for="current-password">Current Password</Label>
                    <Input id="current-password" type="password" class="mt-2" />
                  </div>
                  <div>
                    <Label for="new-password">New Password</Label>
                    <Input id="new-password" type="password" class="mt-2" />
                  </div>
                  <div>
                    <Label for="confirm-new-password"
                      >Confirm New Password</Label
                    >
                    <Input
                      id="confirm-new-password"
                      type="password"
                      class="mt-2"
                    />
                  </div>
                </div>
              </div>
              <div class="flex justify-end">
                <Button>Update Password</Button>
              </div>
            </div>
            <div
              class="flex flex-col gap-y-4 border border-red-600 rounded-xl p-4 box-shadow"
            >
              <div class="flex flex-col gap-y-1">
                <div class="font-bold text-red-600">Delete Account</div>
                <div class="text-muted-foreground text-sm">
                  Once you delete your account, there is no going back. This
                  action cannot be undone.
                </div>
              </div>
              <div class="flex justify-start">
                <Button variant="destructive">Delete Account</Button>
              </div>
            </div>
          </div>
        {/if}

        {#if tab.title === "Billing"}
          <div class="flex flex-col gap-y-4">
            <div class="flex flex-col gap-y-4 border rounded-xl p-4 box-shadow">
              <div class="flex justify-between">
                <div class="flex flex-col gap-y-1">
                  <div class="font-bold">Personal information</div>
                  <div class="text-muted-foreground text-sm">
                    Update your personal details and profile picture
                  </div>
                </div>
                <Badge class="bg-[#9ae89acf] text-[#1eb11e] h-[25px] rounded-md"
                  >Active</Badge
                >
              </div>
              <div class="flex w-[100%] justify-between items-center">
                <div class="flex flex-col gap-y-1">
                  <div class="text-2xl font-medium">Free Plan</div>
                  <div class="text-muted-foreground">
                    Basic access to platform features.
                  </div>
                </div>
                <div class="flex flex-col gap-y-1">
                  <div class="text-muted-foreground">Current billing cycle</div>
                  <div class="text-sm font-medium">N/A(Free Plan)</div>
                </div>
              </div>
              <div class="flex justify-start">
                <Button>Upgrade Plan</Button>
              </div>
            </div>
            <div
              class="flex gap-x-4 items-center border rounded-xl p-4 box-shadow"
            >
              <Card.Root class="w-[100%] cursor-pointer">
                <Card.Header>
                  <Card.Title class="text-lg font-medium">Free</Card.Title>
                  <div class="text-2xl font-medium">$0</div>
                  <div class="text-muted-foreground text-sm">per month</div>
                  <SelectSeparator class="bg-gray-200" />
                </Card.Header>
                <Card.Content class="flex flex-col gap-y-4 h-[200px]">
                  <div class="flex items-center gap-4">
                    <Check
                      class="bg-[#9ae89acf] text-[#1eb11e] border border-[#9ae89acf] rounded-full"
                    />
                    <div>2 Spaces</div>
                  </div>
                  <div class="flex items-center gap-4">
                    <Check
                      class="bg-[#9ae89acf] text-[#1eb11e] border border-[#9ae89acf] rounded-full"
                    />
                    <div>2 Agents</div>
                  </div>
                  <div class="flex items-center gap-4">
                    <Check
                      class="bg-[#9ae89acf] text-[#1eb11e] border border-[#9ae89acf] rounded-full"
                    />
                    <div>50 Queries/month</div>
                  </div>
                </Card.Content>
                <Card.Footer>
                  <Button variant="outline" class="w-full">Current Plan</Button>
                </Card.Footer>
              </Card.Root>
              <Card.Root
                class="w-[100%] cursor-pointer border border-blue-300 bg-[#6babcc17]"
              >
                <Card.Header>
                  <Card.Title
                    class="flex items-center justify-between text-lg font-medium"
                  >
                    <div>Basic</div>
                    <Badge class="h-[25px] rounded-md">Popular</Badge>
                  </Card.Title>
                  <div class="text-2xl font-medium">$10.099</div>
                  <div class="text-muted-foreground text-sm">per month</div>
                  <SelectSeparator class="bg-gray-200" />
                </Card.Header>
                <Card.Content class="flex flex-col gap-y-4 h-[200px]">
                  <div class="flex items-center gap-4">
                    <Check
                      class="bg-[#9ae89acf] text-[#1eb11e] border border-[#9ae89acf] rounded-full"
                    />
                    <div>10 Spaces</div>
                  </div>
                  <div class="flex items-center gap-4">
                    <Check
                      class="bg-[#9ae89acf] text-[#1eb11e] border border-[#9ae89acf] rounded-full"
                    />
                    <div>5 Agents</div>
                  </div>
                  <div class="flex items-center gap-4">
                    <Check
                      class="bg-[#9ae89acf] text-[#1eb11e] border border-[#9ae89acf] rounded-full"
                    />
                    <div>500 Queries/month</div>
                  </div>
                  <div class="flex items-center gap-4">
                    <Check
                      class="bg-[#9ae89acf] text-[#1eb11e] border border-[#9ae89acf] rounded-full"
                    />
                    <div>Private Spaces</div>
                  </div>
                </Card.Content>
                <Card.Footer>
                  <Button class="w-full">Upgrade</Button>
                </Card.Footer>
              </Card.Root>
              <Card.Root class="w-[100%] cursor-pointer">
                <Card.Header>
                  <Card.Title class="text-lg font-medium">Pro</Card.Title>
                  <div class="text-2xl font-medium">$20.199</div>
                  <div class="text-muted-foreground text-sm">per month</div>
                  <SelectSeparator class="bg-gray-200" />
                </Card.Header>
                <Card.Content class="flex flex-col gap-y-4 h-[200px]">
                  <div class="flex items-center gap-4">
                    <Check
                      class="bg-[#9ae89acf] text-[#1eb11e] border border-[#9ae89acf] rounded-full"
                    />
                    <div>Unlimited Spaces</div>
                  </div>
                  <div class="flex items-center gap-4">
                    <Check
                      class="bg-[#9ae89acf] text-[#1eb11e] border border-[#9ae89acf] rounded-full"
                    />
                    <div>20 Agents</div>
                  </div>
                  <div class="flex items-center gap-4">
                    <Check
                      class="bg-[#9ae89acf] text-[#1eb11e] border border-[#9ae89acf] rounded-full"
                    />
                    <div>2000 Queries/month</div>
                  </div>
                  <div class="flex items-center gap-4">
                    <Check
                      class="bg-[#9ae89acf] text-[#1eb11e] border border-[#9ae89acf] rounded-full"
                    />
                    <div>Priority Support</div>
                  </div>
                </Card.Content>
                <Card.Footer>
                  <Button variant="outline" class="w-full">Upgrade</Button>
                </Card.Footer>
              </Card.Root>
            </div>
            <div class="flex flex-col gap-y-6 border rounded-xl p-4 box-shadow">
              <div class="flex flex-col gap-y-1">
                <div class="flex flex-col gap-y-1">
                  <div class="font-bold">Billing History</div>
                  <div class="text-muted-foreground text-sm">
                    View your past invoices and payment history
                  </div>
                </div>
              </div>
              <div
                class="flex flex-col gap-y-2 items-center text-muted-foreground"
              >
                {#if invoices.length > 0}
                  <Table.Root>
                    <Table.Header>
                      <Table.Row>
                        <Table.Head>Date</Table.Head>
                        <Table.Head class="text-center">Amount</Table.Head>
                        <Table.Head class="text-center">Plan</Table.Head>
                        <Table.Head class="text-center">Status</Table.Head>
                        <Table.Head class="text-center">Invoice</Table.Head>
                        <Table.Head class="text-center">Actions</Table.Head>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {#each invoices as data (data)}
                        <Table.Row>
                          <Table.Cell class="text-black font-medium"
                            >{data.date}</Table.Cell
                          >
                          <Table.Cell class="text-center text-black font-medium"
                            >{data.totalAmount}</Table.Cell
                          >
                          <Table.Cell class="text-center text-black font-medium"
                            >{data.plan}</Table.Cell
                          >
                          <Table.Cell class="text-center text-black"
                            ><Badge
                              class="bg-[#9ae89acf] text-[#1eb11e] border border-[#9ae89acf] rounded-md font-bold"
                              >{data.paymentStatus}</Badge
                            ></Table.Cell
                          >
                          <Table.Cell class="text-center text-black font-medium"
                            >{data.invoice}</Table.Cell
                          >
                          <Table.Cell class="text-center text-black font-medium"
                            ><Button variant="outline">Download</Button
                            ></Table.Cell
                          >
                        </Table.Row>
                      {/each}
                    </Table.Body>
                  </Table.Root>
                {:else}
                  <div>No billing history available</div>
                  <div>
                    Your billing history will appear here once you upgrade to
                    paid plan
                  </div>
                {/if}
              </div>
            </div>
          </div>
        {/if}

        {#if tab.title === "Usage"}
          <div class="flex flex-col gap-y-4">
            <div class="flex flex-col gap-y-4 border rounded-xl p-4 box-shadow">
              <div class="flex flex-col gap-y-1">
                <div class="font-bold">Usage Overview</div>
                <div class="text-muted-foreground text-sm">
                  Monitor your usage accross the platform
                </div>
              </div>
              <div class="flex flex-col gap-y-2">
                <div class="text-sm flex justify-between">
                  <div>Queries Used</div>
                  <div>26/50</div>
                </div>
                <Progress {value} max={100} class="h-2" />
                <div class="text-muted-foreground text-sm">
                  80% of your monthly query limit used
                </div>
              </div>
              <div class="flex flex-col gap-y-2">
                <div class="text-sm flex justify-between">
                  <div>Spaces Created</div>
                  <div>1/5</div>
                </div>
                <Progress {value} max={100} class="h-2" />
                <div class="text-muted-foreground text-sm">
                  80% of your space limit used
                </div>
              </div>
              <div class="flex flex-col gap-y-2">
                <div class="text-sm flex justify-between">
                  <div>Agents Created</div>
                  <div>1/5</div>
                </div>
                <Progress {value} max={100} class="h-2" />
                <div class="text-muted-foreground text-sm">
                  80% of your agent limit used
                </div>
              </div>
              <div class="flex flex-col gap-y-2">
                <div class="text-sm flex justify-between">
                  <div>Characters Created</div>
                  <div>1/5</div>
                </div>
                <Progress {value} max={100} class="h-2" />
                <div class="text-muted-foreground text-sm">
                  80% of your characters limit used
                </div>
              </div>
              <div class="flex gap-x-2 border border-red-600 rounded-md p-2">
                <TriangleAlert class="text-red-600" />
                <div class="font-medium text-red-600">
                  You're approaching your monthly query limit. Consider
                  upgrading your plan to avoid service disruption.
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-y-6 border rounded-xl p-4 box-shadow">
              <div class="flex flex-col gap-y-1">
                <div class="flex flex-col gap-y-1">
                  <div class="font-bold">Usage History</div>
                  <div class="text-muted-foreground text-sm">
                    Monthly breakdown of your platform usage
                  </div>
                </div>
              </div>
              <div
                class="flex flex-col gap-y-2 items-center text-muted-foreground"
              >
                {#if invoices.length > 0}
                  <Table.Root>
                    <Table.Header>
                      <Table.Row>
                        <Table.Head>Month</Table.Head>
                        <Table.Head class="text-center">Queries</Table.Head>
                        <Table.Head class="text-center">Spaces</Table.Head>
                        <Table.Head class="text-center">Agents</Table.Head>
                        <Table.Head class="text-center">Characters</Table.Head>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {#each invoices as data (data)}
                        <Table.Row>
                          <Table.Cell class="text-black font-medium"
                            >{data.date}</Table.Cell
                          >
                          <Table.Cell class="text-center text-black font-medium"
                            >{data.totalAmount}</Table.Cell
                          >
                          <Table.Cell class="text-center text-black font-medium"
                            >{data.plan}</Table.Cell
                          >
                          <Table.Cell class="text-center text-black">
                            {data.paymentStatus}
                          </Table.Cell>
                          <Table.Cell class="text-center text-black font-medium"
                            >{data.invoice}</Table.Cell
                          >
                        </Table.Row>
                      {/each}
                    </Table.Body>
                  </Table.Root>
                {:else}
                  <div>Usage history chart will appear here</div>
                {/if}
              </div>
            </div>
          </div>
        {/if}
      </Tabs.Content>
    {/each}
  </Tabs.Root>
</div>
