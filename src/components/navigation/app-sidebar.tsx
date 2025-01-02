import {
  Users,
  LineChart,
  DollarSign,
  BarChart3,
  ClipboardList,
  Building2,
  LayoutDashboard,
  HeadphonesIcon,
  Settings,
  User,
  Shield,
  ChevronDown,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenu,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { ProgressBarLink } from '@/components/ui/progress-bar';
import NavHeader from './nav-header';
import { NavUser } from './nav-user';
import NavCommand from './nav-command';
import { Separator } from '../ui/separator';
import path from 'path';

const NAV_LINKS = [
  {
    id: 1,
    name: 'User Management',
    path: '/',
    icon: Users,
  },
  {
    id: 2,
    name: 'Transaction Monitoring',
    path: '/transactions',
    icon: LineChart,
  },
  {
    id: 3,
    name: 'Revenue & Fees',
    path: '/revenue',
    icon: DollarSign,
  },
  {
    id: 4,
    name: 'Liquidity & Exchange Rate',
    path: '/liquidity',
    icon: BarChart3,
  },
  {
    id: 5,
    name: 'Compliance & Reporting',
    path: '/compliance',
    icon: ClipboardList,
  },
  {
    id: 6,
    name: 'Partner & Bank',
    path: '/partners',
    icon: Building2,
  },
  {
    id: 7,
    name: 'Dashboard Analytics',
    path: '/analytics',
    icon: LayoutDashboard,
  },
  {
    id: 8,
    name: 'Support & Help Desk',
    path: '/support',
    icon: HeadphonesIcon,
  },
  {
    id: 9,
    name: 'System Admin',
    path: '/admin',
    icon: Settings,
  },
  {
    id: 10,
    name: 'Security Management',
    path: '/security',
    icon: Shield,
  },
  {
    id: 11,
    name: 'Clients',
    path: '/clients',
    icon: User,
  },
];

interface User {
  name: string;
  email: string;
  avatar: string;
}

const NavigationItem: React.FC<{
  name: string;
  path: string;
  icon: React.ElementType;
  isActive: boolean;
}> = ({ name, path, icon: Icon, isActive }) => {
  return (
    <SidebarMenuItem className="px-2">
      <SidebarMenuButton asChild>
        <ProgressBarLink
          href={path}
          className={cn(
            'flex items-center gap-3 px-4 py-2.5 rounded-md transition-colors',
            isActive
              ? 'bg-primary/10 text-primary'
              : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'
          )}
        >
          <Icon
            className={cn(
              'w-5 h-5',
              isActive ? 'text-primary' : 'text-gray-500 dark:text-gray-400'
            )}
          />
          <span
            className={cn(
              'text-sm font-medium',
              isActive && 'font-semibold text-primary'
            )}
          >
            {name}
          </span>
        </ProgressBarLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export function AppSidebar(): JSX.Element {
  const pathname = usePathname();
  const user: User = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '/avatars/default.jpg',
  };

  return (
    <Sidebar variant="inset">
      <NavHeader />
      <div className="px-3 py-2">
        <NavCommand />
      </div>
      <SidebarContent>
        <SidebarMenu className="space-y-1 py-2">
          {NAV_LINKS.map((item) => (
            <NavigationItem
              key={item.id}
              name={item.name}
              path={item.path}
              icon={item.icon}
              isActive={
                item.path === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.path)
              }
            />
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-gray-200 dark:border-gray-800 mt-auto">
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
