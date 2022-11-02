const functions  = require('./index.js');
const { burger } = require('./index.js');

let degerlendirmeler;
beforeEach(()=>{
	degerlendirmeler = [
		{isim: "Nalan", puan: 5, geribildirim:"Mükemmel atmosfer ve mükemmel vegan seçenekleri!"},
		{isim: "Kuddusi", puan: 3, geribildirim:"Benim zevkime göre biraz fazla yenilikçi, burger iyi ama fiyatı yüksek"},
		{isim: "Kamuran", puan: 4, geribildirim:"eğlenceli bilgiler ve havalı hisler"},
		{isim: "Elif", puan: 4.5, geribildirim:"Evimden pek çıkmıyorum ama çıktığımda sadece buraya geliyorum. Şiddetle tavsiye ederim."},
		{isim: "Pınar", puan: 3, geribildirim: "atıştırmalıklar harika ve gün içinde çalışmak için güzel bir cafe alanı."},
		{isim: "Ahmet", puan: 2, geribildirim: "Bu mekan beni fazla etkilemedi. Menüde özel bir şey yok ve çok pahalı. Atmosferi de ben beğenmedim ama başkaları beğenebilir." },
		{isim: "Latife", puan: 4, geribildirim: "Kesinlikle karaoke Cumalarını seviyorum! Yemek ve içki çeşitleri iyi."},
		{isim: "Reyna", puan: 3.5, geribildirim: "bu mekan bir harika dostum, yine de garsonun gülümsememesinden puan kırdım"},
	]
})

describe('saFunction', ()=>{
    it('sa as döndürüyor', ()=>{
        expect(functions.sa()).toBe('as');
	})
});

describe('MenuElemaniOlustur örneği', ()=>{
    it('MenuElemaniOlustur nesne döndürüyor', ()=>{
        expect(functions.MenuElemaniOlustur('taco', 8, 'lunch')).toEqual({isim: 'taco', fiyat: 8, kategori:'lunch'});
	})
});

// test burger method indirim here 
describe('burger.indirim uygulaması', ()=>{
    it('öğretmen için indirim', ()=>{
        expect(burger.indirim('öğretmen')).toBe(13.5);
	})
    it('öğrenci için indirim', ()=>{
        expect(burger.indirim('öğrenci')).toBe(13.5);
	})
    it('diğerleri için indirim', ()=>{
        expect(burger.indirim('diğer')).toBe(16.2);
	})
});

describe('DegerledirmeEkle', ()=>{
    it('DegerledirmeEkle nesneleri içeren bir dizi döndürüyor', ()=>{
        expect(functions.DegerledirmeEkle(degerlendirmeler, 'Daniela', 5, 'great eats!')).toEqual(degerlendirmeler = [
			{isim: "Nalan", puan: 5, geribildirim:"Mükemmel atmosfer ve mükemmel vegan seçenekleri!"},
			{isim: "Kuddusi", puan: 3, geribildirim:"Benim zevkime göre biraz fazla yenilikçi, burger iyi ama fiyatı yüksek"},
			{isim: "Kamuran", puan: 4, geribildirim:"eğlenceli bilgiler ve havalı hisler"},
			{isim: "Elif", puan: 4.5, geribildirim:"Evimden pek çıkmıyorum ama çıktığımda sadece buraya geliyorum. Şiddetle tavsiye ederim."},
			{isim: "Pınar", puan: 3, geribildirim: "atıştırmalıklar harika ve gün içinde çalışmak için güzel bir cafe alanı."},
			{isim: "Ahmet", puan: 2, geribildirim: "Bu mekan beni fazla etkilemedi. Menüde özel bir şey yok ve çok pahalı. Atmosferi de ben beğenmedim ama başkaları beğenebilir." },
			{isim: "Latife", puan: 4, geribildirim: "Kesinlikle karaoke Cumalarını seviyorum! Yemek ve içki çeşitleri iyi."},
			{isim: "Reyna", puan: 3.5, geribildirim: "bu mekan bir harika dostum, yine de garsonun gülümsememesinden puan kırdım"},
            { isim: 'Daniela', puan: 5, geribildirim: 'great eats!' }
		]);
	})
});

describe('AnahtardanDegerlendirmeAl', ()=>{
    it('AnahtardanDegerlendirmeAl bir string döndürüyor', ()=>{
        expect(functions.AnahtardanDegerlendirmeAl(degerlendirmeler, 0)).toBe("Nalan isimli kişi 5 puan verdi ve şunları yazdı: Mükemmel atmosfer ve mükemmel vegan seçenekleri!");
	})
    it('AnahtardanDegerlendirmeAl bir string döndürüyor', ()=>{
        expect(functions.AnahtardanDegerlendirmeAl(degerlendirmeler, 2)).toBe("Kamuran isimli kişi 4 puan verdi ve şunları yazdı: eğlenceli bilgiler ve havalı hisler");
	})
});

describe('SonDegerlendirmeyiAl', ()=>{
    it('SonDegerlendirmeyiAl bir string döndürüyor', ()=>{
        expect(functions.SonDegerlendirmeyiAl(degerlendirmeler)).toBe(`Reyna isimli kişi 3.5 puan verdi ve şunları yazdı: bu mekan bir harika dostum, yine de garsonun gülümsememesinden puan kırdım`);
	})
});

