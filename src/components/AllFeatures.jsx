import fast from "/src/assets/features/fast-loading.png";
import productManagement from "/src/assets/features/product-management.png";
import payment from "/src/assets/features/payment.png";
import socialMedia from "/src/assets/features/social-media.png";
import delivery from "/src/assets/features/back-office.png";
import orderManagement from "/src/assets/features/inspection.png";
import XMark from "./shared/XMark";

const features = [
  {
    title: "সুপার ফাস্ট ওয়েবসাইট",
    description:
      "আপডেটেড টেকনোলজি ব্যাবহারের ফলে ওয়েবসাইট ১০০ মিলি সেকেন্ড এর মধ্যে লোড হতে সক্ষম",
    img: fast,
  },
  {
    title: "প্রোডাক্ট ম্যানেজমেন্ট",
    description:
      "আমাদের রয়েছে কমপ্লিট প্রোডাক্ট ম্যানেজমেন্ট সিস্টেম - যে কোন ধরণের প্রোডাক্ট ম্যানেজ করতে পারবেন সহজেই",
    img: productManagement,
  },
  {
    title: "পেমেন্ট গেটওয়ে",
    description:
      "আমাদের রয়েছে পেমেন্ট ইন্ট্রিগ্রেটেড সিস্টেম (বিকাশ, নগদ, রকেট, ssl comerz, amarpay)",
    img: payment,
  },
  {
    title: "ডিজিটাল মার্কেটিং ফ্রেন্ডলি",
    description:
      "গুগোল এনালিটিক্স, সার্ভার সাইড ট্যাগিং, ট্যাগ ম্যানেজার, কনভার্সন এপিআই সহ সকল সুবিধা আছে",
    img: socialMedia,
  },
  {
    title: "ডেলিভারি ম্যানেজমেন্ট",
    description:
      "আমাদের রয়েছে ওয়ান ক্লিক কুরিয়ার ইন্ট্রিগ্রেটেড সিস্টেম (পাঠাও, স্টিডফাস্ট, RedX)",
    img: delivery,
  },
  {
    title: "অর্ডার ম্যানেজমেন্ট",
    description: "আমাদের রয়েছে সম্পূর্ণ অটোমেটেড অর্ডার ম্যানেজমেন্ট সিস্টেম",
    img: orderManagement,
  },
];

const AllFeatures = () => {
  return (
    <section id="features" className=" bg-secondary">
      <div className="container relative z-10 py-24 text-center">
        <h3 className="text-slate-950">
          আমাদের <span className="text-primary">ফিচারসমূহ</span>
        </h3>
        <div className="absolute -z-10 top-0 right-1 max-lg:hidden">
          <XMark />
        </div>
        <div className="mt-10  grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {features?.map((feature, index) => (
            <div
              key={index}
              className="border bg-white px-4 py-6 rounded-xl shadow hover:shadow-2xl duration-500 flex flex-col justify-between">
              <img
                className="w-16 h-16 mx-auto mb-8"
                src={feature?.img}
                alt=""
              />
              <div className="h-28 ">
                <h6 className=" mb-2 drop-shadow-lg ">{feature?.title}</h6>
                <p className="drop-shadow-lg text-slate-600">
                  {feature?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllFeatures;
