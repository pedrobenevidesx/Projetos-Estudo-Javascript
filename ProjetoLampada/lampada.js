const ligar = document.getElementById("ligar");
        const desligar = document.getElementById("desligar");
        const imagem = document.getElementById("imagem");

        function lampLigada() {
            if ( !isBroken () ) {
               imagem.src = "img/lampadaLigada.jpg";
            }
        }

        function lampDesligada() {
            if ( !isBroken () ) {
                imagem.src = "img/lampadaDesligada.jpg";
            }
        }
        function lampQuebrada() {
            imagem.src = "img/quebrada.jpg";
        }

        function isBroken() {
            return imagem.src.includes('quebrada');
        }



        ligar.addEventListener("click", lampLigada);


        imagem.addEventListener("mouseenter", lampLigada);
            

        imagem.addEventListener("mouseleave", lampDesligada);
    

        imagem.addEventListener("dblclick", lampQuebrada);
             

        desligar.addEventListener("click", lampDesligada);

        
        
