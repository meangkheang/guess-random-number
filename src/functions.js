export function show(e,secretNumber = null){
    let btnValue = e.target.textContent;

    alert('Bruh don\'t cheat please 👍👍: ' + btnValue);

}

export const secretNumber =()=>{

    let value = Math.floor(Math.random()* 100)
    return value;
  }

export const applyRandomOrder= (trueNumber = 0)=>{

    let selectBtns = document.querySelectorAll('#picks button');


    //random order for btn
    let randomOrder = Math.floor(Math.random() * selectBtns.length)

    selectBtns[randomOrder].textContent = trueNumber;
    selectBtns.forEach(e=>{

        //this number random every elements in list
        let randomOrder2 = Math.floor(Math.random() * 100 )

        if(e.textContent != trueNumber){
            e.textContent = randomOrder2;
            
        }
    });
}