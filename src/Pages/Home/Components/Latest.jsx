import Marquee from "react-fast-marquee";

const Latest = () => {
  return (
    <div className="bg-[#F3F3F3] p-4 w-full font-poppins flex gap-4">
      <button className="text-white text-xl font-medium p-4 bg-pink-700 border-none">Latest</button>
      <Marquee>
        <p className="text-lg font-semibold text-dark-600">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
      </Marquee>
    </div>
  )
}

export default Latest