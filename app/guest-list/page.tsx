"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import guestsData from "../utils/guests";

interface Guest {
  id: number;
  name: string;
  family: string;
  confirmed: boolean;
}

export default function GuestList() {
  const [guests, setGuests] = useState(guestsData);
  const [formData, setFormData] = useState({ email: "", phone: "" });

  const handleConfirmation = (guestId: number, value: boolean) => {
    setGuests((prevGuests) =>
      prevGuests.map((guest) =>
        guest.id === guestId ? { ...guest, confirmed: value } : guest
      )
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você poderia enviar os dados para o backend
    // para processar a confirmação e enviar o email de confirmação.
    console.log("Dados do formulário:", formData);
    console.log(
      "Convidados confirmados:",
      guests.filter((guest) => guest.confirmed)
    );
    // Reinicialize o estado do formulário após o envio
    setFormData({ email: "", phone: "" });
  };

  return (
    <>
      <Nav />
      <section className="my-8 mx-4">
        <h2 className="mb-4 text-center">
          Vamos contar com a sua presença nesse dia especial?
        </h2>

        <div className="container mx-auto flex justify-center">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guests.map((guest) => (
              <li
                key={guest.id}
                className="border p-6 rounded-md flex flex-col items-center"
              >
                <div className="mb-6">
                  <p className="text-gray-500 italic text-center mb-4">
                    {guest.family}
                  </p>
                  <p className="font-semibold text-center">{guest.name}</p>
                </div>
                <div className="flex items-center">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name={`confirmation_${guest.id}`}
                      value="yes"
                      className="form-radio text-indigo-600 h-5 w-5"
                      checked={guest.confirmed}
                      onChange={() => handleConfirmation(guest.id, true)}
                    />
                    <span className="ml-2 text-sm text-gray-700">SIM 😊</span>
                  </label>
                  <label className="inline-flex items-center ml-4">
                    <input
                      type="radio"
                      name={`confirmation_${guest.id}`}
                      value="no"
                      className="form-radio text-indigo-600 h-5 w-5"
                      checked={!guest.confirmed}
                      onChange={() => handleConfirmation(guest.id, false)}
                    />
                    <span className="ml-2 text-sm text-gray-700">Não 😞</span>
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="container mx-auto my-8 flex justify-center">
          <form onSubmit={handleSubmit} className="w-full md:w-1/3">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Seu email"
              className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Seu telefone"
              className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
            <button
              type="submit"
              className="w-1/2 md:w-2/5 flex mx-auto justify-center items-center bg-indigo-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              ENVIAR
            </button>
          </form>
        </div>
        <div className="mt-10">
          <p className="text-center mb-6">
            Se precisar de ajuda durante a confirmação ou surgir alguma dúvida,
            entre em contato conosco no WhatsApp:
          </p>
          <ul className="mt-2 list-none flex justify-center md:gap-8">
            <li>
              <a
                href="https://wa.me/351915608157"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                Isabella
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://wa.me/351915608154"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                Rubem
              </a>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
