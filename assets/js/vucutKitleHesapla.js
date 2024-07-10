alert('Merhaba Vücut Kitle İndeksi Hesaplama Aracına Hoşgeldiniz. :)')

let boy = Number(prompt("Boyunuzu Giriniz (METRE CİNSİNDEN GİRİNİZ AKSİ TAKTİRDE DOĞRU BİR ÇALIŞMA OLMAYACAKTIR. ÖRN: 1.92)"));
let kilo = Number(prompt("Kilonuzu Giriniz (KG CİNSİNDEN GİRİNİZ.)"));

let kilteİndeksi = ( kilo / (boy * boy))
alert("Vücut Kitle İndeksiniz: " + kilteİndeksi);

if (kilteİndeksi <= 18.5) {
  alert('Hallice Zayıfsınız.')
}
else if (kilteİndeksi >= 30) {
  alert('Birinci Derece Obezsiniz.');
} else if (kilteİndeksi >= 25) {
  alert('Kilolusunuz.');
  
} else if (kilteİndeksi >= 18.5) {
  alert('Normal Kiloya Sahipsiniz.')
} 