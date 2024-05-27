const data = [
    { id: 1, name: "Air Terjun Banyumala", link: "../../jelajahi/air_terjun_banyumala.html" },
    { id: 2, name: "Air Terjun Sendang Gile", link: "../../jelajahi/air_terjun_sendang_gile.html" },
    { id: 3, name: "Air Terjun Sipiso-piso", link: "../../jelajahi/air_terjun_sipiso-piso.html" },
    { id: 4, name: "Batu Angus", link: "../../jelajahi/batu_angus.html" },
    { id: 5, name: "Benteng Amsterdam", link: "../../jelajahi/benteng_amsterdam.html" },
    { id: 6, name: "Benteng Belgica", link: "../../jelajahi/benteng_belgica.html" },
    { id: 7, name: "Benteng Keraton Buton", link: "../../jelajahi/benteng_keraton_buton.html" },
    { id: 8, name: "Benteng Marlborough", link: "../../jelajahi/benteng_marlborough.html" },
    { id: 9, name: "Benteng Otanaha", link: "../../jelajahi/benteng_otanaha.html" },
    { id: 10, name: "Benteng Tolukko", link: "../../jelajahi/benteng_tolukko.html" },
    { id: 11, name: "Bukit Jokowi", link: "../../jelajahi/bukit_jokowi.html" },
    { id: 12, name: "Bukit Merese", link: "../../jelajahi/bukit_merese.html" },
    { id: 13, name: "Bukit Panguk", link: "../../jelajahi/bukit_panguk.html" },
    { id: 14, name: "Bukit Selong", link: "../../jelajahi/bukit_selong.html" },
    { id: 15, name: "Candi Borobudur", link: "../../jelajahi/candi_borobudur.html" },
    { id: 16, name: "Candi Muara Takus", link: "../../jelajahi/candi_muara_takus.html" },
    { id: 17, name: "Candi Prambanan", link: "../../jelajahi/candi_prambanan.html" },
    { id: 18, name: "Danau Ngade", link: "../../jelajahi/danau_ngade.html" },
    { id: 19, name: "Danau Tolire Besar", link: "../../jelajahi/danau_tolire_besar.html" },
    { id: 20, name: "Danau Tinggi Dieng", link: "../../jelajahi/danau_tinggi_dieng.html" },
    { id: 21, name: "Fort Rotterdam", link: "../../jelajahi/fort_rotterdam.html" },
    { id: 22, name: "Gunung Bromo", link: "../../jelajahi/gunung_bromo.html" },
    { id: 23, name: "Gunung Bukit raja", link: "../../jelajahi/gunung_bukit_raja.html" },
    { id: 24, name: "Gunung Kerinci", link: "../../jelajahi/gunung_kerinci.html" },
    { id: 25, name: "Gunung Meratus", link: "../../jelajahi/gunung_meratus.html" },
    { id: 26, name: "Gunung Rinjani", link: "../../jelajahi/gunung_rinjani.html" },
    { id: 27, name: "Istano Basa Pagaruyung", link: "../../jelajahi/istano_basa_pagaruyung.html" },
    { id: 28, name: "Jatim Park 2", link: "../../jelajahi/jatim_park_2.html" },
    { id: 29, name: "Jembatan Gentala Arasy", link: "../../jelajahi/jembatan_gentala_arasy.html" },
    { id: 30, name: "Kawah Ijen", link: "../../jelajahi/kawah_ijen.html" },
    { id: 31, name: "Kota Lama Semarang", link: "../../jelajahi/kota_lama_semarang.html" },
    { id: 32, name: "Labuan Bajo", link: "../../jelajahi/labuan_bajo.html" },
    { id: 33, name: "Lawang Sewu", link: "../../jelajahi/lawang_sewu.html" },
    { id: 34, name: "Monumen Nosarara Nosabatutu", link: "../../jelajahi/monumen_nosarara_nosabatutu.html" },
    { id: 35, name: "Nusa Penida", link: "../../jelajahi/nusa_penida.html" },
    { id: 36, name: "Pantai Bakaro", link: "../../jelajahi/pantai_bakaro.html" },
    { id: 37, name: "Pantai Base-G", link: "../../jelajahi/pantai_base-g.html" },
    { id: 38, name: "Pantai Jikomalamo", link: "../../jelajahi/pantai_jikomalamo.html" },
    { id: 39, name: "Pantai Kemala", link: "../../jelajahi/pantai_kemala.html" },
    { id: 40, name: "Pantai Kuta", link: "../../jelajahi/pantai_kuta.html" },
    { id: 41, name: "Pantai Lampuuk", link: "../../jelajahi/pantai_lampuuk.html" },
    { id: 42, name: "Pantai Losari", link: "../../jelajahi/pantai_losari.html" },
    { id: 43, name: "Pantai Natsepa", link: "../../jelajahi/pantai_natsepa.html" },
    { id: 44, name: "Pantai Pandawa", link: "../../jelajahi/pantai_pandawa.html" },
    { id: 45, name: "Pantai Parangtritis", link: "../../jelajahi/pantai_parangtritis.html" },
    { id: 46, name: "Pantai Pasir Panjang", link: "../../jelajahi/pantai_pasir_panjang.html" },
    { id: 47, name: "Pantai Pink", link: "../../jelajahi/pantai_pink.html" },
    { id: 48, name: "Pantai Sulamadaha", link: "../../jelajahi/pantai_sulamadaha.html" },
    { id: 49, name: "Perkebunan Teh Kayu Aro", link: "../../jelajahi/perkebunan_teh_kayu_aro.html" },
    { id: 50, name: "Pronosutan View", link: "../../jelajahi/pronosutan_view.html" },
    { id: 51, name: "Pulau Bunaken", link: "../../jelajahi/pulau_bunaken.html" },
    { id: 52, name: "Pulau Derawan", link: "../../jelajahi/pulau_derawan.html" },
    { id: 53, name: "Pulau Kakaban", link: "../../jelajahi/pulau_kakaban.html" },
    { id: 54, name: "Pulau Karampuang", link: "../../jelajahi/pulau_karampuang.html" },
    { id: 55, name: "Pulau Maitara", link: "../../jelajahi/pulau_maitara.html" },
    { id: 56, name: "Pulau Maratua", link: "../../jelajahi/pulau_maratua.html" },
    { id: 57, name: "Pulau Sangalaki", link: "../../jelajahi/pulau_sangalaki.html" },
    { id: 58, name: "Puncak Bulo", link: "../../jelajahi/puncak_bulo.html" },
    { id: 59, name: "Pura Besakih", link: "../../jelajahi/pura_besakih.html" },
    { id: 60, name: "Raja Ampat", link: "../../jelajahi/raja_ampat.html" },
    { id: 61, name: "Taman Budaya Garuda Wisnu Kencana", link: "../../jelajahi/taman_budaya_garuda_wisnu_kencana.html" },
    { id: 62, name: "Taman Khatulistiwa", link: "../../jelajahi/taman_khatulistiwa.html" },
    { id: 63, name: "Taman Komodo", link: "../../jelajahi/taman_komodo.html" },
    { id: 64, name: "Taman Nasional Bantimurung", link: "../../jelajahi/taman_nasional_bantimurung.html" },
    { id: 65, name: "Taman Nasional Gunung Leuser", link: "../../jelajahi/taman_nasional_gunung_leuser.html" },
    { id: 66, name: "Taman Nasional Lore Lindu", link: "../../jelajahi/taman_nasional_lore_lindu.html" },
    { id: 67, name: "Taman Nasional Lorentz", link: "../../jelajahi/taman_nasional_lorentz.html" },
    { id: 68, name: "Taman Nasional Tanjung Puting", link: "../../jelajahi/taman_nasional_tanjung_puting.html" },
    { id: 69, name: "Taman Nasional Teluk Cendrawasih", link: "../../jelajahi/taman_nasional_teluk_cendrawasih.html" },
    { id: 70, name: "Taman Nasional Wakatobi", link: "../../jelajahi/taman_nasional_wakatobi.html" },
    { id: 71, name: "Taman Pattimura", link: "../../jelajahi/taman_pattimura.html" },
    { id: 72, name: "Taman Nasional Gunung Rinjani", link: "../../jelajahi/taman_rinjani.html" },
    { id: 73, name: "Taman Safari Indonesia Bogor", link: "../../jelajahi/taman_safari_indonesia_bogor.html" },
    { id: 74, name: "Taman Wisata Alam Sorong", link: "../../jelajahi/taman_wisata_alam_sorong.html" },
    { id: 75, name: "Tjong A Fie Mansion", link: "../../jelajahi/tjong_a_fie_mansion.html" },
    
    // Tambahkan data lain jika diperlukan
  ];

  // Fungsi untuk mencari dan menampilkan hasil pencarian
  function search() {
    const searchInput = document
      .getElementById("navInput")
      .value.toLowerCase();
    const searchResult = document.getElementById("searchResult");
    const noResultMessage = document.getElementById('noResult');

    // Sembunyikan dropdown jika input search box dikosongkan
    if (searchInput === "") {
      searchResult.style.display = "none";
      noResultMessage.style.display = 'none';
      return;
    }

    // Hapus elemen yang ada sebelumnya
    searchResult.innerHTML = "";
    noResultMessage.style.display = 'none';

    // Filter data berdasarkan input
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchInput)
    );

    // Tampilkan hasil pencarian atau pesan "Data Tidak Tersedia"
    if (filteredData.length > 0){
      filteredData.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item.name;
        listItem.setAttribute("data-link", item.link);
        listItem.addEventListener("click", redirectToPage);
        searchResult.appendChild(listItem);
      });
      // Tampilkan dropdown
      searchResult.style.display = "block";
    } else {
      const noResultItem = document.createElement('li');
                noResultItem.textContent = 'Data Tidak Tersedia.';
                noResultItem.classList.add('no-result-item');
                searchResult.appendChild(noResultItem);
                noResultMessage.style.display = 'block';
    }
  }

  // Fungsi untuk memindahkan ke halaman yang sesuai ketika hasil pencarian diklik
  function redirectToPage(event) {
    const link = event.currentTarget.getAttribute("data-link");
    if (link) {
      window.location.href = link;
    }
  }