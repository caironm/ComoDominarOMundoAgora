(function( $ ){ 
     $.fn.extend({  
        escreva: function( mensagem ) {
            var
                elem = $(this),
                intervaloEntreFrases = 1000,
                intervaloEntreLetras = 100,

                escreveFrase = function () {
                    var
                        tamanho = mensagem.length,
                        frase = "",
                        i = 0,

                        repete = function () {
                            setTimeout(function () {
                                frase = mensagem[i];

                                escreveLetra( frase );

                                i += 1;

                                if ( i < tamanho ) repete();

                            }, intervaloEntreFrases );
                        }
                    ;

                    repete();
                },

                escreveLetra = function ( frase ) {
                    var
                        tamanho = frase.length,
                        letra = "",
                        i = 0,

                        repete = function () {
                            setTimeout(function () {
                               letra = frase[i];

                                elem.append( letra );

                                i += 1;

                                if ( i < tamanho ) repete();

                            }, intervaloEntreFrases );
                        }
                    ;

                    repete();
                }
            ;

            escreveFrase();
        } 
    }); 
})( jQuery );