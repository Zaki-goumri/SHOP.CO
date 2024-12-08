import Image from 'next/image';
const brands = [
    {path:'../../assets/brands/versace.svg', name:'brand1',
        alt:'brand1'},
        {path:'../../assets/brands/zara.svg', name:'brand2', alt:'brand2'},
        {path:'../../assets/brands/gucci.svg', name:'brand3', alt:'brand3'},
        {path:'../../assets/brands/prada.svg', name:'brand4', alt:'brand4'},
        {path:'../../assets/brands/calvinKlein.svg', name:'brand5', alt:'brand5'},
]


export const SliderBar = () => {
    return (
        <div className="h-32 bg-black w-full flex items-center justify-evenly"> 
            {
                brands.map((brand, index) => (
                    <Image height={0} width={0} src={brand.path} alt={brand.alt} key={index} className="w-auto h-auto" />
            ))}

        </div>
    );
    }