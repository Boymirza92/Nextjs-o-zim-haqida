"use client"
import "../../style.css"
import { useRouter } from "next/navigation";

const Navbar = () =>{
    const router = useRouter();
    return( 
        <div className="button">
            <button onClick={() => router.push("/") } >Bosh sahifa</button>
            <button onClick={() => router.push("/component/men-haqimda") } >O'zim haqimda</button>
            <button onClick={() => router.push("/component/kaspim") } >Kaspim</button>
            <button onClick={() => router.push("/component/qiziqishlarim") } >Qiziqishim</button>
            <button onClick={() => router.push("/posts") } >Posts</button>
            <button onClick={() => router.push("/comments") } >Comments</button>
           
        </div>
    )
}
export default Navbar;