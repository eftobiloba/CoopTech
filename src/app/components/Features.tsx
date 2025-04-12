import { Users, Banknote, TrendingUp, Megaphone, FileBarChart2, CreditCard } from "lucide-react";

const features = [
  {
    title: "Membership Management",
    description: "Easily onboard, track, and engage members with robust member profiles and real-time updates.",
    icon: Users,
  },
  {
    title: "Savings & Loans",
    description: "Automate contributions, manage loan products, and monitor repayments with ease.",
    icon: Banknote,
  },
  {
    title: "Investment Products",
    description: "Create, publish and manage investment opportunities tailored to your cooperative's needs.",
    icon: TrendingUp,
  },
  {
    title: "Automated Communication",
    description: "Send notifications via SMS, email, and in-app messages to keep members in the loop.",
    icon: Megaphone,
  },
  {
    title: "Manage Forms",
    description: "Create as many forms as you want and manage submissions in your admin dashboard.",
    icon: FileBarChart2,
  },
  {
    title: "Manage Referrals and Rewards",
    description: "Keep your members happy with rewards, this will make them refer your Cooperative.",
    icon: CreditCard,
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-gray-50 mt-5 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-4">Features made for Cooperatives</h2>
        <p className="text-lg text-gray-600 mb-12">
          Everything you need to manage your society, all in one place.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ title, description, icon: Icon }, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-left transition transform hover:-translate-y-1 hover:shadow-lg duration-300"
            >
              <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
