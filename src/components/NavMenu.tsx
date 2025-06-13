import { NavigationMenu } from "radix-ui";

type TrailingLink = {
  href: string;
  label: string;
}

type NavMenuProps = {
  trailingLinks: TrailingLink[];
}

const NavMenu: React.FC<NavMenuProps> = ({ trailingLinks }: NavMenuProps) => {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex gap-4 text-sm font-bold text-neon-pink-dark sm:text-base">
        {trailingLinks.map(({ label, href }) => (
          <NavigationMenu.Link href={href}>
            {label}
          </NavigationMenu.Link>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export default NavMenu;