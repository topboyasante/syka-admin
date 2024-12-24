'use client';

import { cn } from '@/lib/utils';
import React, { useState } from 'react';

export interface ITabType {
  id: number;
  title: string;
  content: JSX.Element;
}

interface TabProps {
  content: ITabType[];
}

function CustomTabs({ content }: TabProps) {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="text-black bg-white flex max-w-2xl shadow rounded-md divide-x divide-[#D0D5DD] border border-[#cdcdcd]">
          {content.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setCurrentTab(tab.id)}
              className={cn('font-semibold px-2 py-1 text-sm', {
                'bg-[#cdcdcd]': currentTab === tab.id,
                'rounded-l-md': tab.id === 0,
                'rounded-r-md': tab.id === content.length - 1,
              })}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-5">{content[currentTab].content}</div>
    </div>
  );
}

export default CustomTabs;
