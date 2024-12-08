import { SliderBar } from "../components/mainPage/sliderBar";
import { Welcome } from "../components/mainPage/welcome";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
        <Welcome/>
        <SliderBar/>
    </div>
  );
}
