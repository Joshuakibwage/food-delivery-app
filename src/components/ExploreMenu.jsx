import { menu_list } from "../assets/frontend_assets/assets"

const ExploreMenu = () => {
  return (
    <section className="w-full">
        <div className="w-[90%] mx-auto">

            <h1 className="font-bold text-[#262626] text-2xl md:text-4xl">Explore Our Menu</h1>
            <p>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to </p>

            <div className="flex justify-center items-center">
                {
                    menu_list.map((item, index) => (
                        <div key={index} className="">
                            <img 
                                src={item.menu_image}
                                alt={item.menu_name} 
                            />
                            <p>{item.menu_name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default ExploreMenu