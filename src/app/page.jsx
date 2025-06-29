import Charts from "@/components/Charts";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Songs from "@/components/Songs";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="my-12 ml-9 mr-16 w-full h-[400vh]">
        <div
          className="relative w-full h-[90vh] rounded-xl bg-cover bg-center bg-no-repeat p"
          style={{
            backgroundImage: "url('https://i.ibb.co/0jbZ5JYc/girl.png')",
          }}
        >
          <Header />
          <div className="ms-6 w-2/5">
            <h1 className="text-7xl mt-[30%]">
              All the <span className="text-[#EE10B0]">Best Songs</span> in One
              Place
            </h1>
            <p className="mt-[14%]">
              On our website, you can access an amazing collection of popular
              and new songs. Stream your favorite tracks in high quality and
              enjoy without interruptions. Whatever your taste in music, we have
              it all for you!z
            </p>
            <div className="mt-[7%] flex justify-between mx-4">
              <button className="w-2/5 h-14 rounded-md font-bold bg-[#EE10B0]">
                Discover Now
              </button>
              <button className="w-2/5 h-14 rounded-md font-bold bg-[#0e9cef00] border-2 border-[#0E9EEF] text-[#0E9EEF]">
                Create Playlist
              </button>
            </div>
          </div>
        </div>
        <Songs Title="Weekly Top Songs" />
        <Songs Title="New Release Songs" />
        <Charts Title="trending songs" />
      </div>
    </div>
  );
}
