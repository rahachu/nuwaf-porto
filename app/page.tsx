import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="bg-center bg-cover bg-[url('https://unair.ac.id/wp-content/uploads/2016/10/SMAN-1-Manyar.jpg')] bg-gray-700 bg-blend-multiply mt-10">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-56 lg:py-56">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Nurul Wafiyah</h1>
              <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Guru matematika dengan gaya mengajar Rock and Roll dan penuh kejutan.</p>
          </div>
      </section>
      <section className="mt-10 mx-10">
        <h2 className="text-2xl font-semibold">
          Tentang Saya
        </h2>
        <div className="flex my-4">
          <div className="basis-1/3">
            <Image className="h-auto max-w-full rounded-lg" src={"/img/tentang.jpg"} alt={"Foto Profil"} height={500} width={500} />
          </div>
          <div  className="ml-4 basis-2/3 pr-6">
            <p>
              Saya adalah seorang guru matematika di SMA N 1 Manyar. Murid murid saya memanggila saya dengan panggilan Bu Nuwaf yang merupakan akronim dari nama saya Nurul Wafiyah.
  
              Murid saya mengenal saya sebagai guru matematika yang punya gaya mengajar Rock and Roll, penuh kejutan, kata mereka. Kadang tiba tiba  membacakan mereka sebuah cerita nyata dari sebuah buku inspiratif, agar mereka memiliki semangat yang sama dari tokoh yang saya bacakan.
  
            </p>
            <br />
            <p>
            Murid saya juga mengenal saya sebagai seorang host dari beberapa program podcast, seorang yang tertarik di public speaking, atau bahkan mereka mengenal saya sebagai seorang guru yang lebih gampang menghafal nomer absen mereka daripada nama mereka…mgkin karena saya adalah guru matematika..he..he
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 mx-10">
        <h2 className="text-2xl font-semibold">
          Riwayat Pendidikan
        </h2>
        <ol className="items-start sm:flex mt-5 px-4">
          <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                      </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    SD - SMA
                  </h3>
                  <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                    <ul className="list-disc">
                      <li>SDN Gumeno</li>
                      <li>SMPN 2 Gresik</li>
                      <li>SMAN 1 Gresik</li>
                    </ul>
                  </div>
              </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                      </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Diploma - Sarjana
                  </h3>
                  <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                    <ul className="list-disc">
                      <li>D-1 Bahasa Inggris Univ. Muhammadiyah Gresik</li>
                      <li>S-1 Pendidikan Matematika IKIP Malang</li>
                    </ul>
                  </div>
              </div>
          </li>
          <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                      </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Magister
                  </h3>
                  <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                    <ul className="list-disc">
                      <li>S-2 Pendidikan Matematika Universitas Negeri Surabaya</li>
                    </ul>
                  </div>
              </div>
          </li>
        </ol>
      </section>
      <section className="mt-10 mx-10">
        <h2 className="text-2xl font-semibold">
          Karir
        </h2>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
          <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2013 - Sekarang</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Universitas Muhammadiyah Gresik</h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Mengampu beberapa mata kuliah pada program studi Teknik Industri: Kalkulus Dasar, Kalkulus Lanjutan, Aljabar Linear, Statistika dan Peluang, dan Kalkulus Optimasi.
              </p>
          </li>
          <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2004 - Sekarang</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">SMAN 1 Manyar</h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Guru Mata Pelajaran Matematika; Peraih gelar Guru Teladan 2016 berdasarkan Survei OSIS SMAN 1 Manyar;</p>
          </li>
          <li className="ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2017 - 2018</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Universitas Terbuka (SMPN 4 Gresik)</h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Mengampu mata kuliah: Matematika Dasar, Metode Penelitian, dan Pembelajaran Matematika.</p>
          </li>
        </ol>
      </section>
      <br />
      <br />
      <hr />
      <div className="mt-10">
        <h1 className="text-center text-4xl font-bold my-4">Keahlian</h1>
        <div className="flex flex-wrap justify-around">
          <div className="p-4 md:basis-1/2">
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pengelolaan Kelas</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">Saya memiliki  kompetensi yang baik dlam mengelola kelas. Dengan berbagai pendekatan yang saya gunakan, pembelajaran matematika menjadi lebih menyenangkan.</p>
            </div>
          </div>
          <div className="p-4 md:basis-1/2">
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white italic">Public Speaking
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Saya memiliki ketertarikan tentang <i>public speaking</i> sejak SMP dengan menjadi pemgisi acara dan mengikuti berbagai pelatihan.
                Saat ini saya mengelola 2 <i>podcast</i> dan aktif sebagai pembicara di berbagai kegiatan.</p>
            </div>
          </div>
          <div className="p-4 md:basis-1/2">
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Menulis</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">Bakat menulis saya mulai terasah sejak SMP.  Paa pelajaran mengarang, guru saya terkesan dengan tulisan saya, dan  beliau memberikan  catatan yang sangat positif di tulisan saya “tulisanmu indah”. Dan sejak saat itu saya memiliki kepercayaan diri untuk menulis.</p>
            </div>
          </div>
          <div className="p-4 md:basis-1/2">
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white italic">Leadership</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">Saya memiliki kemampuan yang baik dalam mengkoordinir banyak ornag untuk bekerja dalam tim. Beberapa kali saya menjadi ketua penyelenggara pada kegiatan dengan skala yang cukup besar, Misalnya Festival Faqih Usman I sampai tahun ke tujuh.</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <div className="mt-10">
        <h1 className="text-center text-4xl font-bold my-4">Pengembangan Diri</h1>
        <div className="flex flex-wrap justify-around">
          <div className="p-4 md:basis-1/2">
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pendidikan Guru Penggerak dan Pengajar Praktek</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">Saya mengembangkan  kompetensi saya melalui kegiatan Pendidikan Guru penggerak. Pendidikan ini memberikan cara pandang yang  luar biasa, bahwa murid adalah pribadi unik yang harus dilayani secara unik juga.</p>
            </div>
          </div>
          <div className="p-4 md:basis-1/2">
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bimtek Pelatih Guru Matematika Jawa Timur
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 italic">
                {`"This person's dedication and attention to detail significantly contributed to project success. Their creativity and ability to meet tight deadlines set them apart"`}
              </p>
            </div>
          </div>
          <div className="p-4 md:basis-1/2">
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Penggerak Merdeka Belajar</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">Penggerak Merdeka belajar (Pendekar) adalah sebuah program yang diperuntukkan bagi guru penggerak untuk menjadi penggerak komunitas dalam mengaplikasikan merdeka belajar.</p>
            </div>
          </div>
          <div className="p-4 md:basis-1/2">
            <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white italic">Great Teacher: Hypnoteaching</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">Sebuah upaya untuk menigkatkan kualitas pembelajaran di kelas dengan kemampuan menuntun pola pikir siswa menjadi lebih positif.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-around items-stretch px-4">
          <div className="md:basis-1/3 p-2">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
                
                <Image className="rounded-t-lg" src={"/img/Guru Penggerak dan pengajar praktek.jpeg"} alt="" width={500} height={500} />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pendidikan guru penggerak Angkatan 6 kabupaten Gresik dan 
                    Pengajar prakter Angkatan 10 kabupaten Gresik</h5>
                </div>
            </div>
          </div>
          <div className="md:basis-1/3 p-2">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
                
                <Image className="rounded-t-lg" src={"/img/PKGM.jpeg"} alt="" width={500} height={500} />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pelatihan Pelatih Guru  Matematika Provinsi Bersama Casio, dengan materi media belajar digital, penerapan STEM dan Inpsirasi pembelajaran, juli 2024</h5>
                </div>
            </div>
          </div>
          <div className="md:basis-1/3 p-2">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
                
                <Image className="rounded-t-lg" src={"/img/Hynoteaching.jpeg"} alt="" width={500} height={500} />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hypno teaching, pemguatan karakter siswa melalui hyno teaching, oktober 2022</h5>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20"></div>
    </div>
  );
}
