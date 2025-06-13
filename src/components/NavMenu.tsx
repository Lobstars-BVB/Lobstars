import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from "@radix-ui/react-icons";
import "../styles/NavMenu.css";
import * as React from "react";

type LinkItem = {
  type: 'link';
  href: string;
  label: string;
};

type DropdownItem = {
  type: 'dropdown';
  label: string;
  children: LinkItem[];
};

export type MenuItem = LinkItem | DropdownItem;

type NavMenuProps = {
  menuItems: MenuItem[];
};

// const DropdownMenuItem: React.FC<Omit<DropdownItem, "type">> = ({ label, children }) => (
//   <NavigationMenu.Item className="NavigationMenuItem">
//     <NavigationMenu.Trigger className="NavigationMenuTrigger">
//       {label} <CaretDownIcon className="CaretDown" aria-hidden />
//     </NavigationMenu.Trigger>
//     <NavigationMenu.Content className="NavigationMenuContent">
//       <ul className="List two">
//         {children.map((child) => (
//           <li key={child.href}>
//             <NavigationMenu.Link asChild>
//               <a href={child.href} className="ListItemLink">
//                 {child.label}
//               </a>
//             </NavigationMenu.Link>
//           </li>
//         ))}
//       </ul>
//     </NavigationMenu.Content>
//   </NavigationMenu.Item>
// );
//
// const NavMenu: React.FC<NavMenuProps> = ({ menuItems }: NavMenuProps) => {
//   return (
//     <NavigationMenu.Root className="NavigationMenuRoot">
//       <NavigationMenu.List className="NavigationMenuList">
//         {menuItems.map((menuItem: MenuItem) =>
//           menuItem.type == "link" ? (
//             <NavigationMenu.Link href={menuItem.href} className="NavigationMenuLink">
//               {menuItem.label}
//             </NavigationMenu.Link>
//           ) : (
//             <DropdownMenuItem label={menuItem.label} children={menuItem.children} />
//           )
//         )}
//       </NavigationMenu.List>
//     </NavigationMenu.Root>
//   );
// };

const NavMenu: React.FC<NavMenuProps> = ({ menuItems }) => {
  const handleTriggerClick = (label: string) => {
    console.log(`Trigger clicked: ${label}`);
  };

  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        {menuItems.map((menuItem: MenuItem) => {
          if (menuItem.type === "link") {
            return (
              <NavigationMenu.Item key={menuItem.label}>
                <NavigationMenu.Link href={menuItem.href} className="NavigationMenuLink">
                  {menuItem.label}
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ) } else {
              return (
                <NavigationMenu.Item key={menuItem.label}>
                  <NavigationMenu.Trigger
                    className="NavigationMenuTrigger"
                    onClick={() => handleTriggerClick(menuItem.label)}
                    onPointerEnter={() => console.log(`Hover enter: ${menuItem.label}`)}
                  >
                    {menuItem.label} <CaretDownIcon className="CaretDown" aria-hidden />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="NavigationMenuContent">
                    <ul className="List">
                      {
                        menuItem.children.map((linkItem: LinkItem) => {
                          return (
                            <li key={linkItem.label}>
                              <NavigationMenu.Link asChild>
                                <a href={linkItem.href}>{linkItem.label}</a>
                              </NavigationMenu.Link>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
              )
            }
          })
        }

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

export default NavMenu;