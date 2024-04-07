const policies = [
  {
    policy:
      "বিশ্বাস হল StoreX প্ল্যাটফর্মের মূল ভিত্তি এবং এতে আপনার তথ্য দিয়ে সঠিক কাজ করার জন্য আমাদের বিশ্বাস করা অন্তর্ভুক্ত।",
  },
  {
    policy: "আপনার তথ্য একান্তই আপনার",
  },
  {
    policy:
      "আমাদের পরিষেবাগুলি সরবরাহ করার জন্য আমাদের কী ধরণের তথ্য প্রয়োজন তা আমরা যত্ন সহকারে বিশ্লেষণ করি এবং আমরা যে তথ্য সংগ্রহ করি তা কেবলমাত্র আমাদের যা প্রয়োজন তা সীমাবদ্ধ করার চেষ্টা করি। যেখানে সম্ভব, আমরা এই তথ্যটি মুছে ফেলি বা বেনামী করি যখন আমাদের আর এটির প্রয়োজন হয় না। আমাদের পণ্যগুলি তৈরি এবং উন্নত করার সময়, আমাদের প্রকৌশলীরা গোপনীয়তা মাথায় রেখে তৈরি করতে আমাদের গোপনীয়তা এবং সিকিউরিটি টিম ঘনিষ্ঠভাবে কাজ করে৷ এই সমস্ত কাজের ক্ষেত্রে আমাদের মূলনীতি হলো আপনার তথ্য আপনারই, এবং আমরা শুধুমাত্র আপনার সুবিধার জন্য আপনার তথ্য ব্যবহার করা।",
  },
  {
    policy: "আমরা আপনার তথ্য অন্যদের থেকে রক্ষা করি",
  },
  {
    policy:
      "যদি কোনো তৃতীয় পক্ষ আপনার ব্যক্তিগত তথ্যের জন্য অনুরোধ করে, আপনি আমাদের অনুমতি না দিলে বা আমাদের আইনগতভাবে প্রয়োজন না হলে আমরা তা শেয়ার করতে অস্বীকার করব। যখন আমাদের আইনগতভাবে আপনার ব্যক্তিগত তথ্য শেয়ার করার প্রয়োজন হয়, তখন আমরা আপনাকে আগেই জানিয়ে দেব।",
  },
  {
    policy:
      "আমরা ব্যবসায়ী এবং অংশীদারদের তাদের গোপনীয়তার বাধ্যবাধকতা পূরণে সহায়তা করি",
  },
  {
    policy: "আমরা আপনার তথ্যগুলো নিন্মোক্ত কারণে সংরক্ষণ করে থাকি -",
  },
  {
    policy: "ঝুঁকি এবং জালিয়াতি প্রতিরোধ",
  },
  {
    policy: "প্রশ্নের উত্তর দেওয়া বা অন্যান্য ধরনের সহায়তা প্রদান",
  },
  {
    policy:
      "আমাদের অ্যাপ স্টোরের মাধ্যমে বণিকদের অ্যাপ খুঁজে পেতে এবং ব্যবহার করতে সাহায্য করা",
  },
  {
    policy: "আমাদের পণ্য এবং পরিষেবা প্রদান এবং উন্নতি",
  },
  {
    policy: "রিপোর্টিং এবং বিশ্লেষণ প্রদান",
  },
  {
    policy: "বৈশিষ্ট্য বা অতিরিক্ত পরিষেবা পরীক্ষা করা",
  },
  {
    policy: "বিপণন, বিজ্ঞাপন বা অন্যান্য যোগাযোগে সহায়তা করা",
  },
];

const PrivacyPolicy = () => {
  return (
    <section className="mt-12 mb-28 container text-center">
      <h3>
        Privacy<span className="text-primary">Policy</span>
      </h3>
      <p className="text-gray-600 mt-6 font-semibold md:text-lg">
        যেহেতু আপনি আমাদের থেকে ইকমার্স ওয়েবসাইট ডেভেলপমেন্ট এর সার্ভিস গুলো
        নিচ্ছেন সেহেতু আপনি নিন্মে উল্লেখিত শর্ত গুলো মেনে নিচ্ছেন। WebHub এর
        ইকমার্স সার্ভিস এর নাম হলো StoreXpert
      </p>
      <ul className="text-left flex flex-col gap-3 mt-10 list-disc pl-4">
        {policies?.map((item, index) => (
          <li key={index} className="text-gray-800 max-sm:text-sm">
            {item?.policy}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PrivacyPolicy;
