import Link from "next/link"
import Image from "next/image"


export const Welcome = () => {
    const statics = [
        {
            number:200,
            paragraph: 'International Brands'
        },
        {
            number:2000,
            paragraph: 'High-Quality Products'
        },
        {
            number:3000,
            paragraph: ' Happy Customers'
        }]


    return (
        <div className="bg-[#F2F0F1] flex bg-hero-pattern w-full  bg-right bg-no-repeat bg-auto">
                <aside className="flex flex-col items-start justify-center px-36 py-24 gap-10  ">
                    <h1 className="text-6xl font-bold  w-[60%]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p className=" text-sm opacity-60 w-96"> Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <Link href="/" className="bg-black rounded-full text-white  text-3xl py-6 px-12  hover:bg-gray-800 transition duration-300">Shop Now</Link>
                    <ul className="flex gap-5" >
                       {statics.map((element, index) => (
                           <li key={index}>
                                 <h1 className="text-5xl font-bold  border-opacity-10  px-10 border-r-2">{element.number}+</h1>
                                 <p className="opacity-60 text-center">{element.paragraph}</p>
                            </li>
                          ))} 
                    </ul>
                </aside>
                         
        </div>
    )
}       