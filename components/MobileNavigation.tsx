interface MobileNavigationProps {
  visible?: boolean;
}
const MobileNavigation: React.FC<MobileNavigationProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div
      className="
    bg-black 
    w-56
    absolute
    top-8
    left-0
    py-5
    flex-col
    border-2
    border-gray-800
    flex 
    gap-4
  "
    >
      <div className="text-white px-3 text-center hover:underline">Home</div>
      <div className="text-white px-3 text-center hover:underline">Series</div>
      <div className="text-white px-3 text-center hover:underline">Films</div>
      <div className="text-white px-3 text-center hover:underline">New & Popular</div>
      <div className="text-white px-3 text-center hover:underline">My List</div>
      <div className="text-white px-3 text-center hover:underline">
        Browse by Lenguage
      </div>
    </div>
  );
};

export default MobileNavigation;
