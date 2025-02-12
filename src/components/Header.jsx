import Button from "../components/Button";

const Header = () => {
  return (
    
      <div className="w-[90%] mx-auto h-[34vw] relative overflow-hidden">
        <img 
          src="src/assets/frontend_assets/header_img.png" 
          alt="" 
          className="w-full h-full object-center  "
        />
        <div className="absolute bottom-[10%] flex flex-col items-start gap-[1.5vw] max-w-[50%] left-[6vw]
        bg-black/10">

          <h2 className="text-white font-extrabold text-5xl">
            Delicious Meals, Delivered Fast & Fresh! 🚀
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Explore a variety of cuisines from top restaurants and get your favorite meals delivered straight
            to your door—fast, fresh, and hassle-free! 🍕🍔🥗
          </p>

          <Button
            label="View Menu"
            className=""
          />
        </div>
      </div>
    
  )
}

export default Header