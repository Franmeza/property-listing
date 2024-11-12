import { Switch } from "./ui/switch";
import { usePropertyList } from "@/contexts/PropertyListProvider";

const locations = ["All Stays", "Norway", "Finland", "Sweden", "Switzerland"];
function NavBar() {
  const {
    handleSuperhostToggle,
    setSelectedLocation,
    selectedLocation,
    setSelectedPropertyType,
  } = usePropertyList();

  return (
    <nav className="flex flex-col  md:flex-row flex-wrap justify-between items-center rounded-xl border border-[#4A5567] lg:mx-auto mx-8 bg-[#20293A] max-w-[1136px] py-8 px-10 text-[#F2F9FE] -mt-14">
      <ul className="flex gap-3 font-bold text-sm">
        {locations.map((location) => (
          <li
            onClick={() => {
              setSelectedLocation(location);
              console.log("li", location);
              console.log("state", selectedLocation);
            }}
            key={location}
            className={`px-3 py-2 rounded-lg cursor-pointer ${
              selectedLocation === location ? "bg-[#4A5567]" : ""
            }`}
          >
            {location}
          </li>
        ))}
      </ul>
      <div className="flex gap-5 items-center justify-center mt-3 md:mt-0 ">
        <div className="flex items-center gap-2">
          <Switch
            id="superhost-switch"
            onCheckedChange={handleSuperhostToggle}
            // checked={isOn}
          />
          <label className="text-[12px]" htmlFor="superhost-switch">
            Superhost
          </label>
        </div>
        <select
          className="bg-[#20293A] px-6 py-3 text-sm font-bold border border-[#4A5567] rounded-xl"
          onChange={(e) => setSelectedPropertyType(e.target.value)}
        >
          <option value="">Property Type</option>
          <option value="1">1 bedroom</option>
          <option value="2">2 bedroom</option>
        </select>
      </div>
    </nav>
  );
}

export default NavBar;
