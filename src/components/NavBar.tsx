import { Switch } from "./ui/switch";

function NavBar() {
  const menuOptions = [
    "All Stays",
    "Norway",
    "Finland",
    "Sweden",
    "Switzerland",
  ];

  return (
    <nav className="flex justify-between items-center rounded-xl border border-[#4A5567] mx-auto bg-[#20293A] max-w-[1136px] py-8 px-10 text-[#F2F9FE] -mt-14">
      <ul className="flex gap-3 font-bold text-sm">
        {menuOptions.map((option) => (
          <li key={option} className="px-3 py-2 ">
            {option}
          </li>
        ))}
      </ul>
      <div className="flex gap-5 items-center">
        <div className="flex items-center gap-2">
          <Switch id="superhost-switch" />
          <label className="text-[12px]" htmlFor="superhost-switch">
            Superhost
          </label>
        </div>
        <select
          className="bg-transparent px-6 py-3 text-sm font-bold border border-[#4A5567] rounded-xl"
          name=""
          id=""
        >
          <option value="property-type">Property Type</option>
        </select>
      </div>
    </nav>
  );
}

export default NavBar;
