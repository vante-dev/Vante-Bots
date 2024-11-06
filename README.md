<p align="center">
  <h3 align="center">VANTE V14 BOTS</h3>
</p>

## ✨ Proje Hakkında Bilgi

Merhaba, Bu projeye 150 yıldız (star) geldiğinde, botu paylaşacağım. Bot geliştirme süreci beni sıktı ve devam etmek istemiyorum. Alternatif olarak, botu edinmek istiyorsanız (satın almak), detayları konuşmak için lütfen Discord üzerinden benimle iletişime geçin. Discord kullanıcı adım: [@vantedev](https://discord.com/users/1205649213539749958) İlginiz için teşekkür ederim!

## ✨ Özellikler

- ⚙️ **Tamamen Özelleştirilebilir:** Kapsamlı özelleştirme seçenekleriyle Vante Bots'u tercihlerinize göre uyarlayın.
- 🌆 **Kontrol Paneli:** Kontrol panelimiz aracılığıyla bot ayarlarını zahmetsizce yönetin.
- 📝 **Kolay Yapılandırma:** Kurulumu çocuk oyuncağı haline getiren kolaylaştırılmış yapılandırma süreci.
- 💯 **150+ Komut:** Sunucunuzun deneyimini zenginleştirmek için 150'den fazla çok yönlü komuta erişin.
- 📚 **Kolay Barındırma:** Vante Bots'u sunucularınızda zahmetsizce barındırın ve 7/24 çevrimiçi tutun.

![image](https://github.com/user-attachments/assets/7ccd17b3-a07c-4261-a09d-6f886076e1ff)

## 🖥️ Hosting

> [!IMPORTANT]
> **Bu proje yeni başlayanlar için değildir.** Node.js, Prisma, Discord.js veya bu projede kullanılan diğer teknolojilere aşina değilseniz Vante Botsu kendiniz kurmamalısınız!

### 📝 Kurulum

- **[🤖 Bot kurulum eğitimi](/docs/bot/README.md)**
- **[🔩 Dashboard kurulum eğitimi](/docs/dashboard/README.md)**
- **[📝 Database kurulum eğitimi](/docs/database/README.md)**

## ⚙️ Sistem Gereksinimleri

Vante bots'u kurmadan önce kurulumunuzun bu önkoşulları karşıladığından emin olun:

- `PostgreSQL 14x` veya üzeri
- `Node.js 18x` veya üzeri
- `Linux x64¹` (Herhangi biri)
- `~512MB` RAM (minimum)
- `~3GB` sabit disk alanı (minimum)

> [!NOTE]
> 1: Debian tabanlı dağıtımlar önerilir, Dashboard Windows ve MacOS'ta da çalışabilir ancak önermiyorum.

## 🍭 Komutlar ve Görüntüler
<details>
  <summary>Kullanıcı Komutları</summary>

  - **afk** `<sebep>` → AFK moduna geçersiniz ve sebep belirtirsiniz.
  - **avatar** `<Kullanıcı>` → Belirtilen kullanıcının profil fotoğrafını gösterir.
  - **banner** `<Kullanıcı>` → Belirtilen kullanıcının banner görüntüsünü gösterir.
  - **booster** `<Nick>` → Sunucu için yeni bir booster ismi belirler.
  - **cihaz** `<Kullanıcı>` → Kullanıcının hangi cihazdan bağlandığını gösterir.
  - **git** `<Kullanıcı>` → Belirtilen kullanıcıya hızlıca gidersiniz.
  - **yardım** `[komut]` → Belirtilen komut hakkında yardım bilgisi sağlar.
  - **kb** `<Kullanıcı>` → Belirtilen kullanıcı hakkında kısa bilgi verir.
  - **çek** `<Kullanıcı>` → Belirtilen kullanıcıyı bulunduğunuz ses kanalına çekersiniz.
  - **ship** `[Kullanıcı]` → İki kullanıcı arasında uyum testi yapar.
  - **spotify** `<Kullanıcı>` → Kullanıcının Spotify dinleme bilgisini gösterir.
  - **nerede** `<Kullanıcı>` → Belirtilen kullanıcının hangi kanalda olduğunu gösterir.
  - **arkadaşlarım** → Sunucudaki arkadaşlarınızı listeler.
  - **invite** `<Kullanıcı>` → Belirtilen kullanıcının davetlerini gösterir.
  - **rstat** `<Rol>` → Belirtilen roldeki üyelerin istatistiklerini gösterir.
  - **stat** `[Kullanıcı]` → Belirtilen kullanıcının istatistiklerini gösterir.
  - **top** → Sunucudaki mesaj/ses/yayın/kamera/davet/register sıralamalarını gösterir

| Komut                  | Görsel                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------ |
| **spotify**            | ![image](https://github.com/user-attachments/assets/2c48987d-b872-4284-919f-88c86d47ca56)              |
| **ship**               | ![image](https://github.com/user-attachments/assets/4216d66a-4ed3-4cac-bd5b-b82503e91256)              |
| **ship ertu**          | ![image](https://github.com/user-attachments/assets/a7a54c0e-0b71-4d0b-82a4-7e38cc921173)              |
| **stat**               | ![image](https://github.com/user-attachments/assets/a338861e-619a-48f9-b1c8-a78c52897b08)              |
| **rstat**              | ![image](https://github.com/user-attachments/assets/62e857b7-8be8-405e-a045-df16a302034f)              |
| **invite**             | ![image](https://github.com/user-attachments/assets/95af730a-9943-4d52-9920-b7cbee8aedba)              |
| **arkadaşlarım**       | ![image](https://github.com/user-attachments/assets/43ba8766-7c70-471e-a777-c0678729a896)              |
| **top**                | ![image](https://github.com/user-attachments/assets/037571c0-3399-410e-acd6-b646edbb91b9)              |

</details>

<details>
  <summary>Moderasyon Komutları</summary>

  - **aktifcezalar** `<@kullanıcı>` → Belirtilen kullanıcının aktif cezalarını gösterir.
  - **banbilgi** `<kullanıcı>` → Kullanıcının ban bilgilerini gösterir.
  - **SicilTemizle** `<@kullanıcı>` → Belirtilen kullanıcının sicilini temizler.
  - **sicil** `<@kullanıcı>` → Kullanıcının geçmiş cezalarını görüntüler.
  - **etkinlik-cezalı** `<@Üye/ID> [süre] [sebep]` → Üyeyi etkinliklerden men eder.
  - **reklam** `[kullanıcı]` → Kullanıcıyı reklam yaptığı için cezalandırır.
  - **ban** `<kullanıcı> [sebep]` → Belirtilen kullanıcıyı sunucudan banlar.
  - **mute** `<kullanıcı> [süre] [sebep]` → Kullanıcıyı süreli olarak sessize alır.
  - **forceban** `<kullanıcı> [sebep]` → Kullanıcıyı zorunlu olarak sunucudan banlar.
  - **jail** `<kullanıcı> [süre] [sebep]` → Kullanıcıyı belirtilen süre boyunca cezalıya atar.
  - **stream-cezalı** `<@Üye/ID> [süre] [sebep]` → Üyeyi yayın yapmaktan men eder.
  - **vmute** `<kullanıcı> [süre] [sebep]` → Kullanıcıyı sesli kanallarda sessize alır.
  - **af** `<kullanıcı>` → Kullanıcıyı AF moduna alır.
  - **uyarı** `@kullanıcı` → Kullanıcıya uyarı verir.

| Komut                  | Görsel                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------ |
| **af**                 | ![image](https://github.com/user-attachments/assets/12513415-e6c6-417f-8d69-4929123f4ac5)              |
| **aktifcezalar**       | ![image](https://github.com/user-attachments/assets/d1df5f40-a676-4778-b78f-d30cbd5050f6)              |
| **Sicil**              | ![image](https://github.com/user-attachments/assets/39bafedb-7744-4a2e-9cc1-726d9d8bcf6b)              |
| **Sicil Extra**        | ![image](https://github.com/user-attachments/assets/ff94f904-7e72-4148-ab37-1aa4acc9acb6)              |
| **Ceza Text**          | ![image](https://github.com/user-attachments/assets/357fbf5f-82aa-4213-9678-11898080a9a9)              |
| **Ceza Log**           | ![image](https://github.com/user-attachments/assets/f6c9bccb-be9b-40d6-8178-6c677f3182f7)              |
| **Dm Log**             | ![image](https://github.com/user-attachments/assets/de45b512-13bb-4113-8a61-4ff03e7c47fb)              |
| **Bitiş Log**          | ![image](https://github.com/user-attachments/assets/2def178c-6020-4e17-947c-c572701f57d6)              |

</details>

<details>
  <summary>Kayıt Komutları</summary>

  - **cinsiyet** `<Kullanıcı>` → Belirtilen kullanıcının cinsiyetini ayarlar.
  - **isim** `<Kullanıcı> <İsim> <Yaş>` → Kullanıcının ismini ve yaşını değiştirir.
  - **isimler** `<@Üye/ID>` → Kullanıcının geçmiş isimlerini listeler.
  - **teyitlerim** `<@Üye/ID>` → Belirtilen kullanıcının kayıt teyitlerini gösterir.
  - **register** `<Kullanıcı/ID> <İsim> <Yaş>` → Kullanıcıyı sunucuda kayıt eder.
  - **ks** `<Kullanıcı/ID> [sebep]` → Kullanıcıyı kayıtsız yapar.
  - **unsuspect** `<Kullanıcı/ID>` → Kullanıcının şüpheli rolünü kaldırır.

| Komut                  | Görsel                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------ |
| **Hoşgeldin Mesajı**   | ![image](https://github.com/user-attachments/assets/f4e531db-8a9e-405d-8be6-312e2c8f1d4a)              |
| **Kayıt Komutu**       | ![image](https://github.com/user-attachments/assets/65bae219-da69-45fd-b206-762c2a71fd26)              |
| **Extra**              | ![image](https://github.com/user-attachments/assets/52bbb463-42ea-46a8-87af-2057d25c6ca5)              |
| **İsimler**            | ![image](https://github.com/user-attachments/assets/18d3dfed-11d4-46b5-aa40-1b70bcffa2e1)              |
| **teyitlerim**         | ![image](https://github.com/user-attachments/assets/986c43b4-da73-4b78-b908-b56cd462ae61)              |

</details>

<details>
  <summary>Gelişmiş Yetkili Komutları</summary>

  - **muteall** → Sunucudaki tüm kullanıcıları sessize alır.
  - **transport** `<menüden kanal seç>` → Kullanıcıları seçilen kanala taşır.
  - **banlist** → Sunucudaki banlanan kullanıcıların listesini gösterir.
  - **sil** `[kullanıcı id] <mesaj sayısı>` → Belirtilen kullanıcının belirli sayıda mesajını siler.
  - **dağıt** → Rol veya ödül dağıtımı yapar.
  - **emojiekle** `<emoji> <isim>` → Yeni bir emoji ekler ve isimlendirir.
  - **giveaway** `<süre (10m)> <kazanan sayısı (1)> <ödül>` → Çekiliş başlatır.
  - **gsil** `<çekiliş mesaj id>` → Belirtilen çekilişi siler.
  - **gedit** `<çekiliş mesaj id> <süre (10m)> <kazanan sayısı (1)> <ödül>` → Mevcut bir çekilişi düzenler.
  - **grerol** → Çekilişte yeniden kazanan belirler.
  - **say** → Sunucudaki kullanıcı sayısını gösterir.
  - **lock** → Kanalı kilitler ve mesaj gönderimini kapatır.
  - **roldenetim** `<rol>` → Belirtilen rolün denetimini yapar.
  - **rollog** `<kullanıcı>` → Kullanıcının rol geçmişini gösterir.
  - **rol** `<kullanıcı>` → Kullanıcıya belirli bir rol verir veya rolünü alır.
  - **snipe** `[kanal/kullanıcı]` → Silinen son mesajı görüntüler.
  - **ysay** → Sunucudaki yetkililerin sayısını gösterir.
  - **taşı** `<kullanıcı>` → Kullanıcıyı başka bir kanala taşır.
  - **vlog** `<kullanıcı>` → Kullanıcının ses kanalı geçmişini görüntüler.

| Komut                  | Görsel                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------ |
| **Giveaway**           | ![image](https://github.com/user-attachments/assets/47def86a-bb2d-4673-b6bf-6dfccf602811)              |
| **say** (canlı)        | ![image](https://github.com/user-attachments/assets/d90cb5b5-15ac-4230-b85c-77065af7187a)              |
| **roldenetim**         | ![image](https://github.com/user-attachments/assets/80eac283-504a-479e-b538-384f8664a85e)              |
| **rol**                | ![image](https://github.com/user-attachments/assets/3f41e3e0-1861-4ffa-a969-f10ddbf3b844)              |
| **vlog**               | ![image](https://github.com/user-attachments/assets/277b436a-2172-4e4b-8d38-527a01e618ca)              |

</details>

<details>
  <summary>Yetkili / Görev Komutları</summary>

  - **rozet** → Yetkilinin rozetini görüntüler.
  - **mazeret** `<@kullanıcı> <süre> <sebep>` → Belirtilen kullanıcı için mazeret kaydı oluşturur.
  - **not** → Yetkiliye bir not ekler.
  - **oryantasyon** `<Yetkili>` → Yeni yetkililer için oryantasyon başlatır.
  - **puan** `[kullanıcı]` → Kullanıcının puanını görüntüler veya değiştirir.
  - **return** `<Kullanıcı>` → Görevine dönmesi için kullanıcıyı geri çağırır.
  - **sorunçöz** `[kullanıcı]` → Belirtilen kullanıcının sorununu çözmek için görev başlatır.
  - **yetkililerim** → Yetkili yaptıgınız kullanıcıların listesini görüntüler.
  - **ybilgi** `<@kullanıcı>` → Belirtilen yetkili hakkında bilgi sağlar.
  - **taglı** `<@kullanıcı>` → Kullanıcıyı taglı rolüne ekler.
  - **taglılarım** → Yetkili olarak tagladığınız kullanıcıları listeler.
  - **yt** `<@kullanıcı>` → Belirtilen kullanıcıyı yetkili yapar veya yetkiliyse yetkisini yükseltir/düşürür.

| Komut                  | Görsel                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------ |
| **Sorumluluk Paneli**  | ![image](https://github.com/user-attachments/assets/4d8e2b44-5fae-4208-8611-4a35d3fc4b09)              |
| **Görev Paneli**       | ![image](https://github.com/user-attachments/assets/e7d5fed9-b321-4529-a704-1ab540ffff1c)              |
| **Görev Seçme**        | ![image](https://github.com/user-attachments/assets/fe740fd8-d557-4344-b64d-7d990c8c6bf0)              |
| **Rozet**              | ![image](https://github.com/user-attachments/assets/deae1a70-6592-43b2-9de1-dac83f48d1cf)              |
| **Puan** (1. Sayfa)    | ![image](https://github.com/user-attachments/assets/cea4bab7-0eb9-4a71-8bf8-417956d2c678)              |
| **Puan** (2. Sayfa)    | ![image](https://github.com/user-attachments/assets/e3eb74ab-75dc-453f-bd9e-24e7831e5233)              |

</details>

<details>
  <summary>Kurucu Komutları</summary>

  - **bonus** → Yetkiliye bonus puan verir veya görüntüler.
  - **özelkomut** → Sunucuya özel bir komut ekler veya düzenler.
  - **otorol** `<menüden işlem seçin>` → Sunucu için otomatik rol verme ayarlamaları yapar.
  - **toplantı** → Sunucu için toplantı başlatır.
  - **fastlogin** → Sunucuda panel acar bu paneli kullananlar bot hesap olmadığını doğrulayıp sunucuda gerekli rollerini alabilirler
  - **secretroom** → Sunucuda özel oda panelini açar.
  - **leaderboard** → Sunucudaki sıralamayı görüntüler.
  - **memberpanel** → Üye yönetim panelini açar.
  - **kısayollar** → Sunucu kısayollarını gösterir.
  - **streamerpanel** → Yayıncı yönetim panelini açar.
  - **görevpanel** → Görev yönetim panelini açar.
  - **ayarlar** → Sunucu komut ayarlarını yönetir.
  - **setup** → Sunucuyu kurarsınız.
  - **ekip** → Ekip yönetim işlemlerini gerçekleştirir.
  - **yaz** `<yazılacak şey>` → Belirtilen mesajı yazar.

| Komut                    | Görsel                                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------------------------ |
| **Otorol**               | ![image](https://github.com/user-attachments/assets/2e350f07-12d1-442a-b0f0-cb41e6b49ddc)              |
| **Fastlogin**            | ![image](https://github.com/user-attachments/assets/9837f4cc-33f9-4eb3-b215-e67d4abf3e18)              |
| **Leaderboard**          | ![image](https://github.com/user-attachments/assets/fec8d80e-76b0-4bc3-af8d-6abbfad3954d)              |
| **Memberpanel**          | ![image](https://github.com/user-attachments/assets/f6ffde05-82e4-4563-ac6d-46d4d9c62b3a)              |
| **Kısayollar**           | ![image](https://github.com/user-attachments/assets/648174bb-6c07-40cf-a6a3-a29d99100715)              |
| **Streamerpanel**        | ![image](https://github.com/user-attachments/assets/f3e1ca9f-aedf-4c3a-97af-17edc2a457ae)              |
| **Görevpanel**           | ![image](https://github.com/user-attachments/assets/180c6e17-2777-44c2-a60f-e506703a6db9)              |
| **Ayarlar**              | ![image](https://github.com/user-attachments/assets/b79ca41e-f88a-4c22-8ae8-55bc469758b5)              |
| **Ayarlar Seçim**        | ![image](https://github.com/user-attachments/assets/971fc981-866f-480b-a4c1-b6f09416f68d)              |
| **Setup**                | ![image](https://github.com/user-attachments/assets/ee8fb68d-4ea3-40e7-88c4-c5be89041d3d)              |
| **Secretroom**           | ![image](https://github.com/user-attachments/assets/409b7719-00db-40a0-8d8f-202055f63ff7)              |
| **Secretroom** (Yönetim) | ![image](https://github.com/user-attachments/assets/4c9b1b5a-ef34-4288-afdc-066729248404)              |

</details>

<details>
  <summary>Sunucu Sistemleri Hakkında Bilgilendirme</summary>

  **Sunucunuzun verimliliğini ve kullanıcı deneyimini artırmak için bir dizi gelişmiş sistem devreye alınmıştır. İşte bu sistemler hakkında detaylı bilgiler:**

  - **Üye Kayıt Sistemi**: Sunucuya yeni katılan üyelerin hızlı ve sorunsuz bir şekilde kaydolmasını sağlar. Kullanıcıların sisteme dahil edilmesi bu süreçle yönetilir.
  
  - **İsim Zorunluluğu**: Üyelerin kayıt olurken gerçek isimlerini girmelerini zorunlu hale getirir. Bu sayede sunucuda düzen ve güven sağlanır.
  
  - **Yaş Doğrulama**: Üyeler, sunucuya kaydolurken yaşlarını belirtmek zorundadır. Bu sistem, yaş sınırlarını denetleyerek sunucunun hedef kitlesine uygun üyelerin kabul edilmesini sağlar.

  - **Etiketli Üye Alımı**: Sunucuya katılmak için belirli bir etikete sahip olma zorunluluğu getirir. Bu, sunucunun belirli bir topluluk veya rol grubu için özelleştirilmesine olanak tanır.
  
  - **Otomatik İsim Düzenleme**: Yeni katılan üyelerin isimlerini, sunucunun kurallarına ve standartlarına uygun olarak otomatik düzenler. Sunucu içinde bir isim standardı sağlar.
  
  - **Yaş Sınırı Uygulaması**: Minimum yaş sınırının altındaki üyeleri belirleyerek onlara uygun yaptırımlar uygulayan bir sistemdir. Bu, sunucuda istenmeyen davranışları azaltır.

  - **Otomatik Ceza Sistemi**: Üyelerin belirli sayıda uyarı alması durumunda otomatik olarak cezalandırılmasını sağlar. Moderasyon yükünü azaltan bu sistem, cezaların adil bir şekilde dağıtılmasını garanti eder.
  
  - **Otomatik Kayıt**: Daha önce kayıt olmuş üyeleri sunucuya yeniden katıldıklarında otomatik olarak tanır ve kaydeder. Kullanıcıların tekrar kayıt olma zorunluluğunu ortadan kaldırır.

  - **Alternatif Ceza Alanı (Underworld)**: Üyeleri yasaklama yerine "Underworld" adlı alternatif bir ceza alanına gönderir. Bu alan, yasaklama öncesi son bir uyarı niteliği taşır.
  
  - **Görsel İstatistikler**: Üyelerin istatistiklerini çekici ve etkileyici görsellerle sunar. Sunucu içinde başarıları vurgulamak ve üyeleri motive etmek için harika bir sistemdir.
  
  - **Buttonlu İstatistikler**: Üyelerin istatistiklerini interaktif butonlar aracılığıyla sunar. Kullanıcı dostu bir arayüzle kolayca bilgiye erişimi sağlar.

  - **Görsel Sıralamalar**: Sunucu içindeki en iyi performans gösteren üyeleri görsel sıralamalarla gösterir. Bu, rekabeti teşvik eden motive edici bir sistemdir.
  
  - **Avatarlı Sıralama**: Görsel sıralamalara ek olarak, üyelerin profil fotoğraflarını da gösterir. Daha kişiselleştirilmiş ve görsel açıdan zengin bir sıralama sunar.

  - **İltifat Sistemi**: Aktif üyeleri motive edici mesajlarla ödüllendirir. Sunucu içindeki pozitif enerjiyi artırmaya yönelik bir sistemdir.
  
  - **Oy Hatırlatıcı**: Üyelere, sunucuyu desteklemek için oy kullanmalarını nazik bir şekilde hatırlatan bir sistemdir. Bu sayede topluluğun oy etkinliği artar.
  
  - **Kademeli Uyarı Rolleri**: Üyelerin aldığı uyarıların sayısına göre çeşitli uyarı rolleri atar. Bu roller, kullanıcıların geçmiş cezalarını ve statülerini yansıtır.

  - **Kademeli Seviye Rolleri**: Üyelerin seviye atladıkça belirli roller kazanmasını sağlayan bir sistemdir. Seviye ilerlemelerini göstermek için kullanılır ve üyeleri daha fazla aktif olmaya teşvik eder.

  | Log Kanalları            | Görsel                                                                                                 |
  | ------------------------ | ------------------------------------------------------------------------------------------------------ |
  | **Guard**                | ![image](https://github.com/user-attachments/assets/72ae2451-d57c-4bea-9ff3-48aad511cf4d)              |
  | **Chat Guard**           | ![image](https://github.com/user-attachments/assets/629943a2-7ad0-4bc9-9613-c4521a58dfeb)              |
  | **Server/Sunucu**        | ![image](https://github.com/user-attachments/assets/ce508fa4-4365-401b-8b89-5224df8d8906)              |
  | **Streamer**             | ![image](https://github.com/user-attachments/assets/b166caa8-2cc2-480a-affa-d00ab9110fd8)              |
  | **Başvuru**              | ![image](https://github.com/user-attachments/assets/6e4a7bfc-ec40-4619-8a84-3a88178fe77f)              |
  | **Family**               | ![image](https://github.com/user-attachments/assets/215bc12f-eac7-478a-97f9-76dd0ae31017)              |
  | **Mesaj**                | ![image](https://github.com/user-attachments/assets/1b720614-0f7a-4439-9652-9cc3e2c6bc0f)              |
  | **Ses**                  | ![image](https://github.com/user-attachments/assets/59cc0b43-3bbe-444c-b6d4-198a5adfcb12)              |
  | **Role**                 | ![image](https://github.com/user-attachments/assets/a24f73c0-26b8-4b82-b791-54660b777a32)              |
  | **Staff**                | ![image](https://github.com/user-attachments/assets/38820319-0dcf-43fa-9422-3ffe81b9f7f5)              |
  | **Orientation**          | ![image](https://github.com/user-attachments/assets/79f2b059-a5b1-4c26-b8fc-866a7e49249c)              |
  | **Cezalar**              | ![image](https://github.com/user-attachments/assets/79de747b-9fed-4618-bf90-b69f603deca0)              |

</details>

<details>
  <summary>Bot Dosyası Ve Configi</summary>
  
| Tip                      | Görsel                                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------------------------ |
| **Dosyalar**             | ![image](https://github.com/user-attachments/assets/62d1a9bd-76f0-41bf-805b-71e4ff1d5017)              |
| **Config (ENV)**         | ![image](https://github.com/user-attachments/assets/de3366a4-1069-4e8c-8757-62b965f7b33f)              |

## 🐻‍❄️ Geliştirici ve Lisans

Telif Hakkı © 2024 [Kaan 'Vante' Karahanlı](https://github.com/vante-dev). Bu proje [GNU Genel Kamu Lisansı v3.0](https://github.com/vante-dev/Vante-Bots/blob/main/LICENSE) ile lisanslanmıştır.
