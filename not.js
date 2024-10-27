        let ad =promptt("lütfen isminizi giriniz")
        document.getElementById("isim").innerHTML = ad

        let gunler =["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
        let gun =gunler[new Date().getDay()];
        document.getElementById("gun").innerHTML = gun

        function tarih(){
            let date =new Date().toLocaleTimeString();
            document.getElementById("zaman").innerHTML = date
        }

        setInterval(tarih , 1000)
