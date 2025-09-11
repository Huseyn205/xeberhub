const data = [
  
 
  {
    title: "DÇ-2026 seçmə mərhələsi: Ronaldu qol vurdu, Portuqaliya qalib gəldi",
    content: "2026-cı ildə keçiriləcək dünya çempionatının seçmə mərhələsi çərçivəsində daha bir görüş başa çatıb.YeniSəhnə.Az xəbər verir ki, Budapeştdəki Puşkaş Arenada Macarıstan millsi Portuqaliya seçməsini qəbul edib.Oyunda hesabı 21-ci dəqiqədə Varqanın qolu ilə meydan sahibləri açsalar da, sonda sevinən tərəf qonaqlar olub.36-cı dəqiqədə Silva dəqiq zərbə ilə hesabı bərabərləşdirib. 56-cı dəqiqədə Kriştianu Ronaldu penaltidən fərqlənərək komandasını önə çıxarıb. Bununla da, 40 yaşlı futbolçu dünya çempionatının seçmə oyunlarında qol sayına görə mövcud rekordu təkrarlayıb. O, 39-cu qolunu vuraraq qvatemalalı Karlos Ruizə çatıb.84-cü dəqiqədə Varqa dubla imza atmaqla hesabda tarazlıq yaratsa da, 2 dəqiqə sonra Konselo Portuqaliyaya 3 xalı qazandıran qolu vurub - 2:3.Bu qələbə sayəsində Priney təmsilçisi 6 xalla F qrupunda liderdir. Macarıstan isə cəmi 1 xalla üçüncü pillədə qərarlaşıb."
  

  },
  {
    title: "Azərbaycan millisi Ukrayna ilə qarşılaşdı",
    content: "Bakı Olimpiya Stadionunda keçirilən oyunda qalib müəyyənləşməsə də, millimizin oyunu müsbət qarşılandı."
  },
  {
    title: "İtaliya millisi İsrailə qarşı 5:4 hesablı qələbə qazandı",
    content: "Dramatik qarşılaşmada İtaliya millisi seçmə mərhələdə gücünü göstərdi."
  },




];

// Xəbər siyahısı


const container = document.getElementById('news-container');
const searchInput = document.getElementById('search');

function showNews(newsArray) {
  container.innerHTML = '';
  newsArray.forEach(item => {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.innerHTML = `
      <img src="${item.image}" alt="Şəkil" class="news-image">
      <h3>${item.title}</h3>
      <p>${item.content.slice(0, 200)}...</p>
    `;

    card.addEventListener('click', () => {
      container.innerHTML = `
        <div class="full-article">
          <img src="${item.image}" alt="Tam şəkil" class="full-image">
          <h2>${item.title}</h2>
          <p>${item.content}</p>
          <button id="back">← Geri</button>
        </div>
      `;
      document.getElementById('back').addEventListener('click', () => showNews(data));
    });

    container.appendChild(card);
  });
}

showNews(data);

// 🔍 Axtarış funksiyası
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = data.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.content.toLowerCase().includes(query)
  );
  showNews(filtered);
});
