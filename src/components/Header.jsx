import Button from "../components/Button";

const Header = () => {
  return (
    
      <div className="w-[90%] mx-auto h-[80vh] relative overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          className="w-full h-full object-cover rounded-lg "
        />
        <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-black/30">

            <div className="flex flex-col items-start gap-[1.5vw] max-w-[70%] mt-26 ml-8 ">
                <h2 className="text-white font-extrabold text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
                    Delicious Meals, Delivered Fast & Fresh! 
                </h2>
                <p className="lg:text-lg text-white mt-2 text-sm md:text-base max-w-[80%]">
                    Explore a variety of cuisines from top restaurants and get your favorite meals delivered straight
                    to your door—fast, fresh, and hassle-free! 🍕🍔🥗
                </p>

                <Button
                    label="View Menu"
                    className="text-[#747474] font-bold bg-white px-8 py-3 rounded-2xl mt-8 cursor-pointer
                    hover:-translate-y-1 transition delay-200 ease-in-out"
                />
            </div>
        </div>
      </div>
    
  )
}

export default Header