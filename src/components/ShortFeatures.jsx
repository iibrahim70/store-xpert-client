import { AiFillLayout } from "react-icons/ai";
import { GrSecure } from "react-icons/gr";
import { MdOutlineElectricBolt } from "react-icons/md";

const ShortFeatures = () => {
  return (
    <div className="container drop-shadow-lg text-slate-950 mt-16 grid text-center lg:grid-cols-3 grid-cols-1 gap-5">
      <div className="py-6 p-3 rounded-lg shadow hover:shadow-2xl duration-300">
        <AiFillLayout className="mx-auto text-3xl text-primary" />
        <h5 className="mt-5">ওয়েবসাইট বিল্ডার</h5>
        <p className="mt-2">কোডিং ছাড়াই ওয়েবসাইট তৈরির অপশন</p>
      </div>
      <div className="py-6 p-3 rounded-lg shadow hover:shadow-2xl duration-300">
        <MdOutlineElectricBolt className="mx-auto text-3xl text-primary" />
        <h5 className="mt-5">সুপারফাস্ট ব্রাউজিং</h5>
        <p className="mt-2">ইউজার এক্সপেরিয়েন্স হবে টপনছ</p>
      </div>
      <div className="py-6 p-3 rounded-lg shadow hover:shadow-2xl duration-300">
        <GrSecure className="mx-auto text-3xl text-primary" />
        <h5 className="mt-5">সর্বোচ্চ সিকিউরিটি</h5>
        <p className="mt-2">কাস্টমার ডাটা থাকবে সুরক্ষিত</p>
      </div>
    </div>
  );
};

export default ShortFeatures;
