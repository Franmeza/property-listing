import homeDuotone from "@/assets/Home_duotone.svg";
import userDuotone from "@/assets/User_alt_duotone.svg";
import starFill from "@/assets/Starfill.svg";
import { TPropertyList } from "@/lib/types";

type TPropertyCardProps = {
  property: TPropertyList;
};

function PropertyCard({ property }: TPropertyCardProps) {
  return (
    <>
      <div className="flex flex-col border border-[#4A5567] rounded-xl w-[358px] h-[461px] text-secondary relative">
        {property.superhost && (
          <span className="absolute top-2 left-2 px-3 py-1 bg-[#121826] rounded-full font-bold text-[0.625rem] text-primary">
            Superhost{"\u2B50"}
          </span>
        )}

        <img
          className="rounded-t-xl"
          src={property.image}
          alt={property.title}
          height={200}
        />
        <div className="px-5 flex flex-col flex-grow min-h-[159px]">
          <div className="flex flex-col flex-grow">
            <h1 className="mt-5 text-primary font-bold">{property.title}</h1>
            <p className="text-sm">{property.description}</p>
          </div>
          <div className="flex  py-4 gap-4 text-xs">
            <div className="flex items-center gap-1">
              <img src={homeDuotone} alt="home icon" />
              <span>{property.capacity.bedroom} bedroom</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={userDuotone} alt="user icon" />
              <span>{property.capacity.people} guests</span>
            </div>
          </div>
        </div>
        <div className="  h-px bg-[#4A5567]"></div>
        <div className="flex justify-between items-center px-5 py-5">
          <p className="text-xl text-primary">
            ${property.price}
            <span className="text-sm text-secondary">/night</span>
          </p>
          <div className="flex ">
            <img src={starFill} alt="Starfill" />
            <span className="text-primary">{property.rating}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyCard;
