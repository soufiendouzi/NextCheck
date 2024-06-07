import Image from "next/image";

import web from "../../public/web.jpg"
export default function Home() {
  return (
   <div className="heead">

  <h1>  Welcome To My Profile </h1>

  <Image  src={web} width={400} height={400} />

   </div>
  )
}
