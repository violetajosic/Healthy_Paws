# Diplomski rad
Za pokretanje projekta neophodno je da se on nalazi u xampp - htdocs folderu.
Xampp Apache i MySQL moraju biti startovani.
U pregledaču (chrome) kucati localhost/hp/index.html za početnu stranu.

Opis projekta:
Sajt posvećen brizi o kućnim ljubimcima. Kao što mi (ljudi) kod doktora imamo svoje kataloge, tako bi bilo mnogo jednostavnije da ga imaju i naši ljubimci. Ukoliko menjamo veterinarske ustanove ili se zadesimo u drugom gradu, umesto da objašnjavamo istoriju bolesti / vakcinisanja i svih ostalih detalja ljubimca, veterinar može da putem ID kataloga ljubimca, pronađe taj katalog i iščita unete podatke, kao i da unese nove sa novog pregleda. Osim kataloga, postoji pretraga moguće bolesti putem čekiranja simptoma, uz naznaku da svakako treba posetiti veterinara.

Kako bi klijent imao profil, potrebno je da plaća godišnju pretplatu u iznosu od 5e. Ukoliko pretplatu ne produži, profil mu se gasi (ne može više da se uloguje jer ID ne važi, ali katalog nastavlja da postoji).

Ukoliko nemate nalog možete da vidite:
1. home page,
2. about page na kojoj se nalazi kratak opis sajta,
3. clinics page sa spiskom dostupnih klinika (saradnika) rasporedjenih po gradovima,
4. disease page sa mogućnostima odabira (ckeck) simptoma, koji kasnije izbacuju moguću bolest
5. log in / sign up page na kojoj možete napraviti profil kao cient ili kao clinic, a zatim se i prijaviti na taj profil

Sign Up:
Postoji mogućnost pravljenja profila kao klijent (CLIENT) ili kao klinika (CLINIC).
U zavisnosti od toga da li ste fizičko ili pravno lice, odlazite na narednu stranu - SIGN UP

Sign Up CLIENT:
Kao klijent imate obavezu da unesete svoj email, šifru, da potvrdite prethodno unešenu šifru, kao i da unesete account membership ID koji dobijate nakon uplate godišnje pretplate (klikom na dugme pay membership - pay).
Ukoliko podaci nisu ispravni, ispod nevalidnog polja će se ispisati crvena slova - uputstvo šta treba izmeniti kako bi polje postalo validno.
Ukoliko su podaci validni, odlazite na LOG IN stranu.

Sign Up CLINIC:
Kao klinika imate obavezu da unesete email klinike, šifru, da potvrdite prethodno unešenu šifru, kao i da unesete ID klinike (jedinstvena šifra ustanove - ustanova ne plaća pretplatu).
Ukoliko podaci nisu ispravni, ispod nevalidnog polja će se ispisati crvena slova - uputstvo šta treba izmeniti kako bi polje postalo validno.
Ukoliko su podaci validni, odlazite na LOG IN stranu.

Log In:
Na Log in strani, nezavisno od toga da li imate profil kao klijent ili klinika, imate opciju da unesete email i šifru napravljenog naloga. Osim unošenja podataka, postoji i mogućnost njihovog pamćenja za naredna logovanja.
Ukoliko podaci nisu ispravni, ispod nevalidnog polja će se ispisati crvena slova - uputstvo šta treba izmeniti kako bi polje postalo validno.
Ukoliko su podaci validni, odlazite na home page i sesija započinje.

Home page kao glavna i još par dodatnih strana, kao i neki delovi već postojećih strana (kao što je navigacioni menu), ne izgledaju isto za profil klijenta, odnosno za profil klinike, kao i za one koji uopšte nisu ulogovani.

Profil CLIENT:
1. home page - mogućnost pretraživanja kataloga, unošenjem njegovog ID-ja
2. clinics page - strana na kojoj možete da proverite da li u vašem gradu postoje klinike koje su saradnici i koje koriste ovu aplikaciju
3. diseases page - strana na kojoj možete da čekirate simptome i saznate koja je (ili koje su) moguća bolest
4. help page - objasnjenje sajta (aplikacije), sve njegove mogućnosti i uputstvo za lakše korišćenje (snalaženje)
5. profile page - strana na kojoj možete da vidite podatke vašeg profila: fotografiju, email i šifra kojom ste ulogovani, dan početka i dan isteka članarine, kao i spisak svih katalog ID-jeva koje poseduje (jedan ID katalog po ljubimcu). Ispod svega postoji mogućnost produžetka članarine, kao i log out dugme na kom možete da se izlogujete sa profila

*Klijent ima pristup samo ID-jevima njegovih životinja, koji se prikazuju u spisku na njegovom profilu

Profil CLINIC:
1. home page - mogućnost pretraživanja kataloga, unošenjem njegovog ID-ja
2. diseases page - strana na kojoj možete da čekirate simptome i saznate koja je (ili koje su) moguća bolest
3. mnc page (make new catalog) - strana na kojoj klinika može da formira i sačuva novi katalog tj. da u bazu ubaci novog ljubimca. U katalog je neophodno uneti sledeće podatke: fotografiju ljubimca, ime ljubimca, ime vlasnika, vrsta ljubimca, kao i starost ljubimca (pored koje se automatski računaju te godine u ljudskim godinama)
4. help page - objasnjenje sajta (aplikacije), sve njegove mogućnosti i uputstvo za lakše korišćenje (snalaženje)
5. profile page - strana na kojoj možete da vidite podatke vašeg profila: logo fotografija klinike, email i šifra kojom ste ulogovani, dan početka saradnje, kao i ID veterinarske ustanove. Ispod svega postoji log out dugme na kom možete da se izlogujete sa profila

*Promena u meniju jeste dodata search opcija, za lakše i brže pretraživanje kataloga, unošenjem njegovog ID-ja (nema potrebe za vraćanjem na home page).