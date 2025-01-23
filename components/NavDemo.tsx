"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const components: { title: string; href: string; description: string; logo: string }[] = [
  {
    title: "InvGate Service Desk ",
    href: "/productos/invgateServiceDesk",
    description:
      "Gestiona incidencias, solicitudes y problemas de forma ágil, con flujos de trabajo automatizados y una interfaz intuitiva.",
    logo: "/Service Management-logo.webp",
  },
  {
    title: "InvGate Assets",
    href: "/productos/invgateAssets",
    description:
      "Gestiona hardware, software y licencias en un solo lugar, reduciendo costos y mejorando la productividad.",
    logo: "/AssetManagement.webp",
  },
  {
    title: "Red Hat",
    href: "/docs/primitives/progress",
    description:
      "Moderniza tu infraestructura y acelera tu ciclo de desarrollo con soluciones empresariales de primer nivel.",
    logo: "/redhat.png",
  },
  {
    title: "Zabbix + Grafana",
    href: "/docs/primitives/scroll-area",
    description:
      "Anticípate a los problemas y toma decisiones estratégicas basadas en datos, con la potencia de dos líderes del software open source.",
    logo: "/zabbix.png",
  },
]

export function NavDemo() {
  return (
    <div className="text-white flex items-center justify-between w-full fixed top-0 left-0 right-0 px-4 h-20 bg-transparent backdrop-blur-sm z-20">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className="text-white">
          <Image src="/Logo.png" alt="InsideTech" width={200} height={200}>

          </Image>
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="space-x-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-black shadow-none hover:bg-white/10">
                  Servicios
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-white/90 backdrop-blur-sm rounded-md">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <Icons.logo className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium text-black">shadcn/ui</div>
                          <p className="text-sm leading-tight text-gray-600">
                            Beautifully designed components built with Radix UI and Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem href="/docs/primitives/typography" title="Typography">
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-black hover:bg-white/10  data-[state=open]:bg-white/10">
                  Productos
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white/90 backdrop-blur-sm rounded-md">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        logo={component.logo}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent text-black hover:bg-white/10 ")}
                  >
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="bg-primary text-white hover:bg-[#00E5E5]/90 px-6">Cotizar servicio</Button>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="bg-transparent border-white">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-gray-900/95 backdrop-blur-sm text-white">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-lg font-semibold">
                  Getting started
                </Link>
                <Link href="/" className="text-lg font-semibold">
                  Servicios
                </Link>
                <Link href="/docs" className="text-lg font-semibold">
                  Documentation
                </Link>
                <Button className="bg-[#00E5E5] text-white hover:bg-[#00E5E5]/90 w-full">Cotizar servicio</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { logo?: string }>(
  ({ className, title, children, logo, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-black",
              className,
            )}
            {...props}
          >
            <div className="flex items-center space-x-2">
              {logo && (
                <div className="flex-shrink-0">
                  <Image
                    src={logo || "/placeholder.svg"}
                    alt={`${title} logo`}
                    width={30}
                    height={30}
                    className="rounded-sm mr-3"
                  />
                </div>
              )}
              <div>
                <div className="text-sm font-medium leading-none text-black">{title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-gray-600">{children}</p>
              </div>
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

