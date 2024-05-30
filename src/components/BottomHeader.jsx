import men from "../assets/0000540_men-football-jersey_600-removebg-preview.png";
import kids from '../assets/0000525_kids-collection_600.png'
import women from '../assets/0000524_womens-collection_600.png'
const BottomHeader = () => {
  return (
    <div className=" text-white grid grid-cols-1 md:grid-cols-3  mx-auto ">
    <div className="bg-[#2A2A2A]  flex justify-around items-center">
        <div className="p-16">
          <h3 className="text-[32px] font-semibold">{`Men's `}Footbal Jersey</h3>
         <button className="pb-2 text-white border-b-2 border-b-orange-500 bg-transparent">Shop Now</button>
        </div>
        <img className="mr-10 md:mr-0  w-40  h-44 md:h-52" src={men} alt="" />
      </div>

      <div className=" bg-[#2D2D2D]   flex justify-around  items-center">
      <div className="p-16">
          <h3 className="text-[32px] font-semibold">{`Kids's `}Footbal Jersey</h3>
          <button className="pb-2 text-white border-b-2 border-b-orange-500 bg-transparent">Shop Now</button>

        </div>
        <img className="mr-10  md:mr-0 w-40  h-44 md:h-52" src={kids} alt="" />
      </div>

      <div className="bg-[#282828]  flex justify-around  items-center">
      <div className="p-16">
          <h3 className="text-[32px] font-semibold">{`Women's `}Footbal Jersey</h3>
          <button className="pb-2 text-white border-b-2 border-b-orange-500 bg-transparent">Shop Now</button>

        </div>
        <img className="mr-10  md:mr-0 w-40  h-44 md:h-52" src={women} alt="" />
      </div>
    </div>
  );
};

export default BottomHeader;
