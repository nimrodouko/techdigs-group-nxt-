import Link from "next/link"

export default function Navigationbar(){
 return(   <div>
        <div className="bg-gray-800 text-white py-4 text-center">
            <Link href="/" className="pr-8">Home</Link>
            <Link href="docs" className="pr-8">products</Link>
            <Link href="chalize" className="pr-8">cart</Link>
            <Link href= "/login" className="pr-8">login</Link>
            <Link href= "signup" className="pr-8">Signup</Link>


        </div>
    </div>);
}