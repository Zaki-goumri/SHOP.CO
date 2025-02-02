import Link from "next/link"
import Image from 'next/image';

const brands = [
    {path:'../../assets/brands/versace.svg', name:'brand1',
        alt:'brand1'},
        {path:'../../assets/brands/zara.svg', name:'brand2', alt:'brand2'},
        {path:'../../assets/brands/gucci.svg', name:'brand3', alt:'brand3'},
        {path:'../../assets/brands/prada.svg', name:'brand4', alt:'brand4'},
        {path:'../../assets/brands/calvinKlein.svg', name:'brand5', alt:'brand5'},
]

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
        <main className="flex flex-col items-center justify-center">
        <div className=" flex bg-[#F2F0F1] lg:bg-hero-pattern w-screen bg-no-repeat bg-cover xl:bg-right-bottom lg:bg-center  h-[80%]  ">
        <aside className="flex flex-col lg:items-start justify-center lg:px-36 lg:py-24 lg:p-10 items-center  mt-10 gap-10 lg:text-left text-center ">
        <h1 className="md:text-6xl text-5xl  font-extrabold w-[60%]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className=" text-sm opacity-60 w-96"> Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <Link href="/products" className="bg-black rounded-full text-white  text-3xl py-6 px-12  hover:bg-gray-800 transition duration-300  mt-20  md:w-60 w-[calc(100%-30px)]">Shop Now</Link>
        <ul className="flex gap-5 flex-wrap justify-center my-5" >
        {statics.map((element, index) => (
           <li key={index}>
                 <h1 className="text-5xl font-bold border-opacity-10  px-10 border-r-2">{element.number}+</h1>
                 <p className="opacity-60 text-center">{element.paragraph}</p>
            </li>
          ))} 
    </ul>
</aside>

         
</div>

<div className=" bg-black w-full h-full  flex items-center justify-evenly flex-wrap"> 
{
    brands.map((brand, index) => (
        <Image height={0} width={0} src={brand.path} alt={brand.alt} key={index} className="w-auto h-auto m-5" />
))}

</div>




        </main>
    )
}       








