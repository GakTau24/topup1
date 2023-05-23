import Carousel from "@/components/Carousel";
import Mobile from "@/components/Mobile";
import Trending from "@/components/Trending";
import Computer from "@/components/Computer";
import Apps from "@/components/Apps";

export const metadata = {
  title: `Topup Games - ${process.env.siteName}`,
  description: 'top-up game, harga murah, proses cepat, bonus menarik, beli game online',
  keywords: 'top-up game, harga murah, proses cepat, bonus menarik, beli game online',
  author: 'unipin, codashop, dunia games',
}

export default function Home() {
  return (
    <main>
      <div className="m-3 p-3 max-md:m-1 max-md:gap-1 shadow-xl rounded-xl">
        <Carousel />
      </div>
      <div className="p-5">
        <Trending />
        <Mobile />
        <Computer />
        <Apps />
      </div>
    </main>
  );
}
