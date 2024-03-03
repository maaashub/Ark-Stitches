import Image from "next/image"
import pic2 from "@/public/asset/3.jpg";
import logo from '@/public/asset/Ark.jpg'

const About = () => {
  return (
    <section className='bg-gray-200/75 min-h-max py-12 mt-12'>
      <div className='px-12 flex justify-between items-center'>
        <div className="border-[8px] border-black/60 h-auto mr-12 w-4/12">
          <Image src={pic2} alt="ads" className="object-cover aspect-[1/2]"/>
        </div>

        <div className="w-full">
          <div className="rounded-full h-8 w-8 overflow-hidden relative">
           <Image src={logo} alt='logo' fill className='object-conver'/>
          </div>
          <h3 className="text-xl text-black/75 font-bold my-4">About Ark Stitches</h3>
          <p className="text-balance">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatum in cum quia eum, tenetur corporis illum soluta. Fuga distinctio unde laborum commodi numquam deserunt expedita ut quae, natus itaque ipsa hic dicta ex impedit neque, consequuntur quia officiis nulla dolorum omnis, reprehenderit possimus! Doloremque voluptatem at architecto, ducimus ratione eius voluptates debitis rem itaque mollitia officiis placeat? Reprehenderit non exercitationem nam sed et dolorem iste quae consequuntur consectetur ducimus eligendi maxime reiciendis sint, ex quam id eveniet? Error doloremque repellat provident tempora non, asperiores atque omnis odio ullam corrupti soluta. Nulla quae est dolore ipsam nostrum libero quod natus!
          </p>
        </div>
      </div>
    </section>
  )
}

export default About