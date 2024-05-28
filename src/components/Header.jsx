import banner from "../assets/banner.png";
const Header = () => {
  return (
      <div className="relative  w-full h-full">
        <img
          src={banner}
          alt="banner"
          className=" object-cover w-full h-full rounded-x "
        />
        <div className="absolute backdrop-brightness-50 w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  flex justify-center items-center text-white">
          <div>
            <h3 className="text-2xl font-semibold">
              Welcome to our Jersey Store!
            </h3>

            <h1 className="md:text-5xl  text-base font-bold my-6">
              Discover The Best Jersey Collection
            </h1>
            <button className="btn border-orange-600 hover:bg-white border-t-orange-500 bg-orange-600">Shop Now</button>
          </div>
        </div>
      </div>
  );
};

export default Header;
