let counts=setInterval(updatedCount);
        let upto=2300;
        function updatedCount(){
            var count= document.getElementById("counter1");
            count.innerHTML=++upto;
            if(upto===2500)
            {
                clearInterval(counts);
            }
        }

let countsTwo=setInterval(updatedCountTwo);
        let uptoNumber=1000;
        function updatedCountTwo(){
            var counterTwo= document.getElementById("counter2");
            counterTwo.innerHTML=++uptoNumber;
            if(uptoNumber===1200)
            {
                clearInterval(countsTwo);
            }
        }

let countsThree=setInterval(updatedCountThree);
        let uptoNumberTwo=23800;
        function updatedCountThree(){
            var counterThree= document.getElementById("counter3");
            counterThree.innerHTML=++uptoNumberTwo;
            if(uptoNumberTwo===24000)
            {
                clearInterval(countsThree);
            }
        }

let countsFour=setInterval(updatedCountFour);
        let uptoNumberThree=0;
        function updatedCountFour(){
            var counterFour= document.getElementById("counter4");
            counterFour.innerHTML=++uptoNumberThree+ "k";
            if(uptoNumberThree===200)
            {
                clearInterval(countsFour);
            }
        }

        