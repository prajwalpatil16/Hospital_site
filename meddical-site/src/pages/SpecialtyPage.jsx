import { useParams, Link } from "react-router-dom";
import { specialtiesData } from "../data/specialtiesData";

export default function SpecialtyPage() {
  const { name } = useParams();
  const specialty = specialtiesData[name];
  const allSpecialties = Object.keys(specialtiesData);

  return (
    <div className="pb-20 bg-gray-50">

      {/* HERO SECTION */}
      <div className="relative w-full h-64 md:h-80">
        <img
          src={specialty.heroImage}
          className="w-full h-full object-cover"
          alt={specialty.title}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center px-6 md:px-20">
          <div>
            <p className="text-blue-300 text-sm tracking-wide">Specialty</p>
            <h1 className="text-white text-4xl md:text-5xl font-bold">
              {specialty.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex gap-10 mt-10">

        {/* SIDEBAR */}
        <aside className="w-72 hidden md:block">
          <div className="bg-white rounded-xl border shadow-sm p-4 sticky top-24">

            <input
              type="text"
              placeholder="Search specialty..."
              className="w-full p-2 border rounded-lg mb-4 text-sm focus:ring-2 focus:ring-blue-400"
            />

            <div className="flex flex-col gap-1">
              {allSpecialties.map((sp) => (
                <Link
                  to={`/specialty/${sp}`}
                  className={`p-2 rounded-lg text-sm font-medium transition ${
                    sp === name
                      ? "bg-blue-600 text-white shadow"
                      : "hover:bg-blue-50"
                  }`}
                  key={sp}
                >
                  {specialtiesData[sp].title}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1">

          {/* DESCRIPTION */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="text-2xl font-semibold mb-3">{specialty.title}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{specialty.description}</p>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Department Highlights</h3>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              {specialty.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          </div>

          {/* DOCTORS */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-5">Meet Our Specialists</h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialty.doctors.map((doc, i) => (
                <div
                  key={i}
                  className="bg-white p-5 border rounded-xl shadow hover:shadow-lg transition"
                >
                  <img src={doc.img} className="w-full h-52 object-cover rounded-lg mb-3" />
                  <h4 className="text-lg font-bold">{doc.name}</h4>
                  <p className="text-blue-600 font-medium">{doc.role}</p>
                  <p className="text-gray-600 text-sm mt-2">{doc.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}
