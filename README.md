# Diplomski rad
Za pokretanje projekta neophodno je da se on nalazi u xampp htdocs folderu.
Xampp Apache i MySQL moraju biti startovani.
U pregledaču (chrome) kucati localhost/hp/index.html

Opis projekta:
Sajt posvećen brizi o kućnim ljubimcima. Ukoliko nemate nalog možete da vidite:
1. home page,
2. about page na kojoj se nalazi kratak opis sajta,
3. clinics page sa spiskom dostupnih saradnika klinika rasporedjenih po gradovima,
4. disease page sa mogućnostima odabira (ckeck) simptoma, koji kasnije izbacuju moguću bolest
5. log in / sign up page na kojoj možete napraviti profil kao cient ili kao clinics, a zatim se i prijaviti na taj profil

Sign Up:
Postoji mogućnost pravljenja profila kao klijent (CLIENT) ili kao klinika (CLINICS).
U zavisnosti od toga da li ste fizičko ili pravno lice, odlazite na narednu stranu - SIGN UP

Sign Up CLIENT:
Kao klijent imate obavezu da unesete svoj email, šifru, da potvrdite prethodno unešenu šifru, kao i da unesete account membership ID koji dobijate nakon uplate godišnje pretplate (klikom na dugme pay membership - pay).
Ukoliko podaci nisu ispravni, ispod nevalidnog polja će se ispisati crvena slova - uputstvo šta treba izmeniti kako bi polje postalo validno.
Ukoliko su podaci validni, odlazite na LOG IN stranu.

Sign Up CLINIC:
Kao klinika imate obavezu da unesete email klinike, šifru, da potvrdite prethodno unešenu šifru, kao i da unesete ID klinike.
Ukoliko podaci nisu ispravni, ispod nevalidnog polja će se ispisati crvena slova - uputstvo šta treba izmeniti kako bi polje postalo validno.
Ukoliko su podaci validni, odlazite na LOG IN stranu.

Log In:
Na Log in strani, nezavisno od toga da li imate profil kao klijent ili klinika, imate opciju da unesete email i šifru napravljenog naloga.
Ukoliko podaci nisu ispravni, ispod nevalidnog polja će se ispisati crvena slova - uputstvo šta treba izmeniti kako bi polje postalo validno.
Ukoliko su podaci validni, odlazite na home page i sesija započinje.

Home page kao glavna i još par dodatnih, kao i neki delovi već postojećih strana, ne izgledaju isto za profil klijenta, odnosno za profil klinike, kao i za one koji uopšte nisu ulogovani.