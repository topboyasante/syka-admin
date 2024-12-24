import Image from 'next/image';
import React from 'react';

type UserComponent = {
  img_url: string;
  email: string;
  name: string;
};

function UserComponent({ ...props }: UserComponent) {
  return (
    <div className="flex items-center gap-2">
      <div>
        <Image
          src={props.img_url}
          alt={props.name}
          width={30}
          height={30}
          className="bg-primary rounded-full size-10"
        />
      </div>
      <div>
        <h2 className="font-semibold">{props.name}</h2>
        <p className="text-neutral-500">{props.email}</p>
      </div>
    </div>
  );
}

export default UserComponent;
