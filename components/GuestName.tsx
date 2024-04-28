import { useState } from "react";
import { useRouter } from "next/navigation";
import guests from "@/app/utils/guests";

export default function GuestName() {
  const [fullName, setFullName] = useState("");
  const [isValidName, setIsValidName] = useState(true);
  const router = useRouter();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const foundGuest = guests.find((guest) => guest.name === fullName.trim());
    if (foundGuest) {
      setIsValidName(true);
      console.log("Nome válido:", fullName);
      router.push("/guest-list");
    } else {
      setIsValidName(false);
      console.log("Nome não encontrado:", fullName);
    }
  };

  return (
    <div className="max-w-md md:max-w-lg mx-auto my-8 px-4 md:px-8 py-6 md:py-12 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl mb-6 text-center font-bold text-gray-800">
        Lista de Convidados
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center gap-4">
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-offset-2"
            placeholder="Digite seu nome completo"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-white text-sm font-medium rounded-md transition duration-300 ease-in-out"
          >
            CONTINUAR
          </button>
        </div>
        {!isValidName && (
          <p className="text-red-500 text-sm">
            Nome não está na lista de convidados.
          </p>
        )}
      </form>
    </div>
  );
}
