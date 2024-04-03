const serviceTerms = [
  {
    terms: "সার্ভিস টি নিতে আপনার বয়স কমপক্ষে ১৮ হতে হবে।",
  },
  {
    terms:
      "আপনার নজিস্ব ব্যাবসা থাকতে হবে অথবা অনলাইনে ব্যাবসা করার জন্য প্রয়োজ্জনীয় প্লান থাকুতে হবে।",
  },
  {
    terms:
      "অফারকৃত ওয়েবসাইট এ আপনি কোন ধরনের কাস্টমাইজেশন পাবেন না। কাস্তমাইজেশন করতে হলে আপনাকে অবশ্যই কাস্টমাইজেশনের ধরনের উপর ভিত্তি করে পেমেন্ট করতে হবে।",
  },
  {
    terms:
      "অফারকৃত বেসিক প্যাকেজ এ আমরা কোন ধরণের আপডেট দিলে সেটার জন্য কোন ধরণের পেমেন্ট করতে হবে না।",
  },
  {
    terms: "অফারকৃত প্যাকেজ এর পেমেন্ট সর্বোচ্চ দুইবারে পে করা যাবে।",
  },
  {
    terms:
      "আপনি আপনার পাসওয়ার্ড নিরাপদ রাখার জন্য দায়ী। WebHub আপনার অ্যাকাউন্ট এবং পাসওয়ার্ডের নিরাপত্তা বজায় রাখতে ব্যর্থতার কারণে কোনো যেকোন ধরণের ক্ষয়ক্ষতির দায়ভার নিবে না।",
  },
  {
    terms: "আপনার অনলাইন স্টোর পরিচালনার জন্য একমাত্র আপনি দায়ী।",
  },
  {
    terms:
      "কোন ধরণের অবৈধ প্রোডাক্ট বা আইন বিরুদ্ধ কাজের জন্য আপনি নিজেই দায়ী থাকিবেন, WebHub কোনভাবেই এই দায়ভার বহন করিবে না।",
  },
  {
    terms:
      "WebHub & StoreX কোন মার্কেটপ্লেস না, আপনার স্টোরের মাধ্যমে বিক্রয়ের যেকোনো চুক্তি সরাসরি আপনার এবং ক্রেতার মধ্যে।",
  },
  {
    terms:
      "আপনার স্টোর এর সকল কার্যকলাপ এবং কন্টেন্ট যেমন - ফটো, ছবি, ভিডিও, গ্রাফিক্স, লিখিত বিষয়বস্তু, অডিও ফাইল, কোড, তথ্য, বা ডেটা আপলোড করা, সংগ্রহ করা, জেনারেট করা, সঞ্চিত, প্রদর্শিত, বিতরণ, প্রেরণ বা প্রদর্শন করার জন্য সমস্ত দায়ভার আপনার।",
  },
  {
    terms:
      "উন্নত সার্ভিস প্রদানের লক্ষ্যে যেকোন ধরনের শর্ত পরিব্রতন, পরিবর্ধন, সংযোজন, বিয়োজন করার ক্ষমতা WebHub & StoreX কর্তপক্ষের সিদ্ধান্তের উপর নির্ভর করে।",
  },
];

const TermsAndConditions = () => {
  return (
    <section className="mt-12 container text-center">
      <h3>
        Terms <span className="text-primary">&</span> Conditions
      </h3>
      <h6 className="text-gray-800 mt-6">
        যেহেতু আপনি আমাদের থেকে ইকমার্স ওয়েবসাইট ডেভেলপমেন্ট এর সার্ভিস গুলো
        নিচ্ছেন সেহেতু আপনি নিন্মে উল্লেখিত শর্ত গুলো মেনে নিচ্ছেন। WebHub এর
        ইকমার্স সার্ভিস এর নাম হলো StoreXpert
      </h6>

      <ul className="text-left flex flex-col gap-3 mt-10 list-disc pl-4">
        {serviceTerms?.map((item, index) => (
          <li key={index} className="text-gray-800 max-sm:text-sm">
            {item?.terms}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TermsAndConditions;
