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
| **Otorol**               | ![image](https://github.com/user-attachments/assets/42a20f46-b6ef-47cf-8dcc-1492427e9ce5)              |
| **Fastlogin**            | ![image](https://github.com/user-attachments/assets/dd1160ce-e051-48bb-ad4f-fd56952d09f7)              |
| **Leaderboard**          | ![image](https://github.com/user-attachments/assets/deb61cb2-25aa-4d86-8b63-c3894c62bce4)              |
| **Memberpanel**          | ![image](https://github.com/user-attachments/assets/e8484dae-26b0-4f21-85d7-1c499d0964ff)              |
| **Kısayollar**           | ![image](https://github.com/user-attachments/assets/ab6793a6-7b85-44d2-90ac-6d226d1f1224)              |
| **Streamerpanel**        | ![image](https://github.com/user-attachments/assets/88f377c9-8ff9-4279-b472-7461e07abce5)              |
| **Görevpanel**           | ![image](https://github.com/user-attachments/assets/b1e176af-99ad-4f89-a431-9593a2af1516)              |
| **Ayarlar**              | ![image](https://github.com/user-attachments/assets/24bb25b2-d56d-405b-b81f-9027274d3be7)              |
| **Ayarlar Seçim**        | ![image](https://github.com/user-attachments/assets/129d0857-4f65-4543-b5ce-0c9ce86d89ff)              |
| **Setup**                | ![image](https://github.com/user-attachments/assets/ae0e8daa-6838-484f-ba54-624758eefd70)              |
| **Secretroom**           | ![image](https://github.com/user-attachments/assets/5e4b8069-e504-4d79-b69b-16f2f81ee8f1)              |
| **Secretroom** (Yönetim) | ![image](https://github.com/user-attachments/assets/df24f47d-9aa1-4770-9740-7c3596e7e07e)              |

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
  | **Guard**                | ![image](https://github.com/user-attachments/assets/fe8fd7e5-79c6-489d-8ce7-0a62cd757c91)              |
  | **Chat Guard**           | ![image](https://github.com/user-attachments/assets/7a3e260c-24b8-4d51-9e66-ce4e4fcbb0f6)              |
  | **Server/Sunucu**        | ![image](https://github.com/user-attachments/assets/7f396a57-9268-4b11-9526-58915986ba7c)              |
  | **Streamer**             | ![image](https://github.com/user-attachments/assets/0b56b665-9055-444e-a8bc-ba4745ea3875)              |
  | **Başvuru**              | ![image](https://github.com/user-attachments/assets/ffc334b8-ed0e-4c68-b75c-3d559155076c)              |
  | **Family**               | ![image](https://github.com/user-attachments/assets/c2c72209-ec15-4be1-bc3b-00089d441d62)              |
  | **Mesaj**                | ![image](https://github.com/user-attachments/assets/ebb3af97-d91c-46ee-a4f7-ac6902d5d820)              |
  | **Ses**                  | ![image](https://github.com/user-attachments/assets/8f5f7dc7-80e6-4d8a-ad37-183e8ac7653c)              |
  | **Role**                 | ![image](https://github.com/user-attachments/assets/a61850fd-2a9a-4778-b6a2-f78a9e874e36)              |
  | **Staff**                | ![image](https://github.com/user-attachments/assets/a659069a-a490-4eb7-bf08-f841c86df49a)              |
  | **Orientation**          | ![image](https://github.com/user-attachments/assets/ceb58787-5fbf-48d1-9d4e-9265dee9a972)              |
  | **Cezalar**              | ![image](https://github.com/user-attachments/assets/8f6863e0-6942-4c10-83bf-727735fedfce)              |

</details>

## 🐻‍❄️ Geliştirici ve Lisans

Telif Hakkı © 2024 [Kaan 'Vante' Karahanlı](https://github.com/vante-dev). Bu proje [GNU Genel Kamu Lisansı v3.0](https://github.com/vante-dev/Vante-Bots/blob/main/LICENSE) ile lisanslanmıştır.
