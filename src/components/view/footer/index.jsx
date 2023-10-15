import {
    FaFacebookSquare,
    FaInstagramSquare,
  } from "react-icons/fa";
  
  export default function Footer() {
    return (
      <footer className="bg-pink-600 text-white py-8 mt-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Bagian 1: Informasi Kontak */}
            <div className="col-span-1 sm:col-span-1 md:col-span-1">
              <h3 className="text-2xl font-bold mb-4">Kontak Kami</h3>
              <p className="mb-2">Alamat: Jalan Bromo VII, Gebang, Rt05, Rw15, Banjarsari, Surakarta</p>
              <p className="mb-2">Telepon: +62895805399090</p>
              <p>Email: ipungsetiawan5@gmail.com</p>
            </div>

            {/* Bagian 3: Tautan Navigasi */}
            <div className="col-span-1 sm:col-span-2 md:col-span-1 mb-4">
              <h3 className="text-2xl font-bold mb-4">Navigasi</h3>
              <ul>
                <li>
                  <a href="/">Beranda</a>
                </li>
                <li>
                  <a href="/about">Tentang Kami</a>
                </li>
                <li>
                  <a href="/">Layanan Pembuatan Website</a>
                </li>
              </ul>
            </div>
  
            {/* Bagian 2: Tautan Sosial Media */}
            <div className="col-span-1 sm:col-span-1 md:col-span-1 mb-8">
              <h3 className="text-2xl font-bold mb-4">Sosial Media</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/ipung.nanda?mibextid=ZbWKwL" className="text-4xl">
                  <FaFacebookSquare />
                </a>
                <a href="https://instagram.com/ipungnan?igshid=YTQwZjQ0NmI0OA==" className="text-4xl">
                  <FaInstagramSquare />
                </a>
              </div>
            </div>
  
            
          </div>
        </div>
      </footer>
    );
  }