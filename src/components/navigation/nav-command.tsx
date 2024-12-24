import { Button } from "@/components/ui/button";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Search } from "lucide-react";
import React from "react";

export function NavCommand() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const demoSearchResults = [
    {
      group: "Transactions",
      items: [
        { id: 1, title: "Recent Transactions", link: "/transactions/recent" },
        { id: 2, title: "Transaction Reports", link: "/transactions/reports" },
      ],
    },
    {
      group: "Users",
      items: [
        { id: 3, title: "User List", link: "/users" },
        { id: 4, title: "User Activity", link: "/users/activity" },
      ],
    },
    {
      group: "Settings",
      items: [
        { id: 5, title: "General Settings", link: "/settings" },
        { id: 6, title: "Security Settings", link: "/settings/security" },
      ],
    },
  ];

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <div className="flex-1 relative">
        <Button
          variant="outline"
          className="w-full justify-start text-sm text-muted-foreground h-9 px-3"
          onClick={() => setOpen(true)}
        >
          <Search className="mr-2 h-4 w-4" />
          <span>Search...</span>
          <kbd className="pointer-events-none absolute right-2 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {demoSearchResults.map((group) => (
            <CommandGroup key={group.group} heading={group.group}>
              {group.items.map((item) => (
                <CommandItem
                  key={item.id}
                  onSelect={() => {
                    setOpen(false);
                    // Add navigation logic here
                    console.log(`Navigating to ${item.link}`);
                  }}
                >
                  {item.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </div>
  );
}

export default NavCommand;
