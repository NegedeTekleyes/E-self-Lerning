'use client';

import { useState } from 'react';
import { Square3Stack3DIcon, UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';

type TabItem = {
  label: string;
  value: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  desc: string;
};

const tabs: TabItem[] = [
  {
    label: 'Dashboard',
    value: 'dashboard',
    icon: Square3Stack3DIcon,
    desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
  },
  {
    label: 'Profile',
    value: 'profile',
    icon: UserCircleIcon,
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: 'Settings',
    value: 'settings',
    icon: Cog6ToothIcon,
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },
];

export default function TabsWithIcon() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <div className="flex border-b border-gray-300">
        {tabs.map(({ label, value, icon: Icon }) => (
          <button
            key={value}
            onClick={() => setActiveTab(value)}
            className={`flex items-center gap-2 p-3 flex-1 text-center border-b-2 transition-colors duration-200
              ${activeTab === value ? 'border-red-500 text-red-500' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            <Icon className="w-5 h-5" />
            {label}
          </button>
        ))}
      </div>
      <div className="p-4 bg-gray-100 mt-4 rounded-lg">
        {tabs.map(({ value, desc }) => (
          activeTab === value && (
            <p key={value} className="text-gray-700">{desc}</p>
          )
        ))}
      </div>
    </div>
  );
}
