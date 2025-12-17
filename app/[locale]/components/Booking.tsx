"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Booking() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    space: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Reserva enviada! Te contactaremos pronto para confirmar.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      space: "",
      date: "",
      time: "",
    });
  };

  return (
    <section id="reservar" className="container mx-auto px-4 py-20 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("booking.title")}
          </h2>
          <p className="text-xl text-blue-100">
            {t("booking.subtitle")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                {t("auth.fullName")}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Juan Pérez"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                {t("common.email")}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="juan@ejemplo.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+34 600 000 000"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                {t("booking.spaceType")}
              </label>
              <select
                required
                value={formData.space}
                onChange={(e) => setFormData({ ...formData, space: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">{t("booking.selectSpace")}</option>
                <option value="abierto">{t("spaces.openSpace")}</option>
                <option value="privada">{t("spaces.privateOffice")}</option>
                <option value="reunion">{t("spaces.meetingRoom")}</option>
                <option value="eventos">{t("spaces.eventSpace")}</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                {t("booking.date")}
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                {t("booking.time")}
              </label>
              <input
                type="time"
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
          >
            {t("booking.sendBooking")}
          </button>
        </form>
      </div>
    </section>
  );
}
