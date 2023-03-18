import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
import React from "react";
interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }
  const { data } = useCurrentUser();
  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gry-800">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex items-center w-full gap-3">
          <img className="w-8 rounded-md" src="/images/default-blue.png" alt="profile" />
          <div className="text-white text-sm group-hover/item:underline">
            {data?.name}
          </div>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          onClick={() => signOut()}
          className="px-3 text-center text-white hover:underline"
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
