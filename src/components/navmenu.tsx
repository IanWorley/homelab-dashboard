import Link from "next/link";

const NavMenu = () => {
  return (
    <div className="flex  bg-primary p-8 space-x-8">
      <Link href="/">
        <p className="text-white hover:underline"> Overview </p>
      </Link>
      <p className="text-white"> New Media </p>
      <Link href="/settings">
        <p className="text-white hover:underline"> Settings </p>
      </Link>
      <p className="text-white"> System </p>
    </div>
  );
};

export default NavMenu;
