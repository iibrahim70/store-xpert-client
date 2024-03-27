const features = [
  {
    title: "সুপার ফাস্ট ওয়েবসাইট",
    description:
      "আপডেটেড টেকনোলজি ব্যাবহারের ফলে ওয়েবসাইট ১০০ মিলি সেকেন্ড এর মধ্যে লোড হতে সক্ষম",
    img: "/src/assets/features/fast-loading.png",
  },
  {
    title: "প্রোডাক্ট ম্যানেজমেন্ট",
    description:
      "আমাদের রয়েছে কমপ্লিট প্রোডাক্ট ম্যানেজমেন্ট সিস্টেম - যে কোন ধরণের প্রোডাক্ট ম্যানেজ করতে পারবেন সহজেই",
    img: "/src/assets/features/management.png",
  },
  {
    title: "পেমেন্ট গেটওয়ে",
    description:
      "আমাদের রয়েছে পেমেন্ট ইন্ট্রিগ্রেটেড সিস্টেম (বিকাশ, নগদ, রকেট, ssl comerz, amarpay)",
    img: "/src/assets/features/payment.png",
  },
  {
    title: "ডিজিটাল মার্কেটিং ফ্রেন্ডলি",
    description:
      "গুগোল এনালিটিক্স, সার্ভার সাইড ট্যাগিং, ট্যাগ ম্যানেজার, কনভার্সন এপিআই সহ সকল সুবিধা আছে",
    img: "/src/assets/features/marketing.png",
  },
  {
    title: "ডেলিভারি ম্যানেজমেন্ট",
    description:
      "আমাদের রয়েছে ওয়ান ক্লিক কুরিয়ার ইন্ট্রিগ্রেটেড সিস্টেম (পাঠাও, স্টিডফাস্ট, RedX)",
    img: "/src/assets/features//payment2.png",
  },
  {
    title: "অর্ডার ম্যানেজমেন্ট",
    description: "আমাদের রয়েছে সম্পূর্ণ অটোমেটেড অর্ডার ম্যানেজমেন্ট সিস্টেম",
    img: "/src/assets/features/management.png",
  },
];

const AllFeatures = () => {
  return (
    <section id="features" className="container lg:pt-28 pt-24 text-secondary text-center">
      <h3>
        আমাদের <span className="text-primary">ফিচারসমূহ</span>
      </h3>
      <div className="mt-10 grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {features?.map((feature, index) => (
          <div
            key={index}
            className="border px-4 py-6 rounded-xl hover:bg-orange-50/80 duration-500">
            <img
              className="w-24 h-20 object-cover mx-auto "
              src={feature?.img}
              alt=""
            />
            <h6 className="mt-8 mb-2 drop-shadow-lg">{feature?.title}</h6>
            <p className="drop-shadow-lg text-slate-600">
              {feature?.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllFeatures;
