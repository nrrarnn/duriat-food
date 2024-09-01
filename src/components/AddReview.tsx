import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

const AddReview: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [ulasan, setUlasan] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newReview = {
      name,
      ulasan,
      createdAt: new Date().toISOString(),
    };

    axios
      .post("https://66d3be525b34bcb9ab3cee6e.mockapi.io/ulasan/ulasan-customer", newReview)
      .then(() => {
        Swal.fire({
          title: 'Sukses!',
          text: 'Ulasan berhasil dikirim!',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        setName("");
        setUlasan("");
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Terjadi kesalahan saat mengirim ulasan.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
        console.error("Error adding review:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nama
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 p-2 block w-full border border-gray-300 rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="ulasan" className="block text-sm font-medium text-gray-700">
          Ulasan
        </label>
        <textarea
          id="ulasan"
          value={ulasan}
          onChange={(e) => setUlasan(e.target.value)}
          className="mt-1 p-2 block w-full border border-gray-300 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-orange-400 text-white font-semibold rounded hover:bg-orange-500 transition"
      >
        Kirim Ulasan
      </button>
    </form>
  );
};

export default AddReview;
