import Image from "next/image";
import Link from "next/link";
import list_room from "@/data/list_room";
import { Button } from "@/components/ui/button";
import FloatingShape from "@/components/FloatingShape";
export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-tl from-[#253e72] via-[#4DA1A9] to-[#1c91b3]">
      <FloatingShape
        color="bg-green-500"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-emerald-500"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShape
        color="bg-lime-500"
        size="w-32 h-32"
        top="40%"
        left="-10%"
        delay={2}
      />

      <div className="w-[80%] mx-auto mb-4 flex flex-row gap-5 justify-between">
        {list_room.map((data, index) => (
          <div key={index} className="w-[25%] mt-4 hover:opacity-85">
            <Image
              src={data.url}
              width={700}
              height={1300}
              objectFit="cover"
              alt={data.name}
              className="mb-4 h-[60%] hover:cursor-pointer mb-d"
            />
            <div className="bg-[#F6F4F0] opacity-20 wi w-700 h-1300">
              <h1 className="font-oasis font-bold text-3xl text-center my-2 mx-3 py-2 bg-gradient-to-r from-[#253e72] to-[#c91b3] bg-clip-text">
                {data.name}
              </h1>
            </div>
            <div className="w-full h-full font-oasis font-thin flex flex-col gap-3">
              <span className="mt-2 h-[12%]">{data.description}</span>
              <p>Mô tả: </p>
              <ul className="text-">
                {data.services.map((service, index) => (
                  <li key={index}>- {service}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-15 flex justify-center ">
        <Button variant="book_room" size="lg" className="hover:cursor-pointer">
          <Link href="/book-room">Đặt phòng ngay</Link>
        </Button>
      </div>
    </div>
  );
}
