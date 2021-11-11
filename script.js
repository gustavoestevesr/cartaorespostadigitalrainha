        function HoraDaCorrecao(){
            alert("Hora da correção!")
            for (let index = 1; index < 121; index++) {
                if (document.getElementById(index).style.backgroundColor == "red"
                    || document.getElementById(index).style.backgroundColor == "") {
                    document.getElementById(index).style.visibility = "hidden"  
                }else{
                    document.getElementById(index).style.background = "green"  
                }                    
            }
        }
        
        function check(cor){
                if (document.getElementById(cor).style.backgroundColor == "green"
                    || document.getElementById(cor).style.backgroundColor == "white") {
                    
                } else {
                    if( document.getElementById(cor).style.backgroundColor == "#f2e500" ){
                        document.getElementById(cor).style.background = "red"
                    }else if( document.getElementById(cor).style.backgroundColor == "red" || document.getElementById(cor).style.backgroundColor == ""){
                        document.getElementById(cor).style.background = "#f2e500"
                    }else{
                        document.getElementById(cor).style.background = "red"
                    }
                }          
        }

        function ClearCheckQuestions(){
            hora_da_correcao = false
            let col = document.getElementsByClassName("col")
            col[0].innerHTML =  ""
            let id = 1
            for (let index = 1; index < 31; index++) {
                col[0].innerHTML += 
                `
                <div class="row">                
                        <div class="number">${index}</div>
                        <div class="option" id="${id}" onclick="check(this.id)">A</div>
                        <div class="option" id="${id+=1}" onclick="check(this.id)">B</div>
                        <div class="option" id="${id+=1}" onclick="check(this.id)">C</div>
                        <div class="option" id="${id+=1}" onclick="check(this.id)">D</div>
                </div> 
                `   
                id++     
                }
                col[0].innerHTML += `
                <div class="row" style="margin-bottom: 50px;">  
                    <button id="limpar_simulado" onclick="ClearCheckQuestions()">Limpar Simulado</button>
                    <button id="corrigir_simulado" onclick="HoraDaCorrecao()" >Corrigir Simulado</button>
                </div>
                `   
        }        

        function loadQuestions(){
            let col = document.getElementsByClassName("col")
            let id = 1
            for (let index = 1; index < 31; index++) {
                col[0].innerHTML += 
                `
                <div class="row">                
                        <div class="number">${index}</div>
                        <div class="option" id="${id}" onclick="check(this.id)">A</div>
                        <div class="option" id="${id+=1}" onclick="check(this.id)">B</div>
                        <div class="option" id="${id+=1}" onclick="check(this.id)">C</div>
                        <div class="option" id="${id+=1}" onclick="check(this.id)">D</div>
                </div> 
                `   
                id++     
                }
                col[0].innerHTML += `
                <div class="row" style="margin-bottom: 50px;">  
                    <button id="limpar_simulado" onclick="ClearCheckQuestions()">Limpar Simulado</button>
                    <button id="corrigir_simulado" onclick="HoraDaCorrecao()" >Corrigir Simulado</button>
                </div>
                `                
        }

