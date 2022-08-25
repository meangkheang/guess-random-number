const Button = ({ text, hexColor,secretNumber,setValue,value,
                  setResult,troll,points,lives,setPoints,setLives,
                  status,setStatus}) => {

  const showSecretNumber =()=>{
      alert('Bruh don\'t cheat please 👍👍: '+secretNumber);
  }
  
  const checkResult=(e,secret_number)=>{
      let targetValue = e.target.textContent;


      if(parseInt(targetValue) === secret_number){
          setResult('okay, smartass!!')
          setPoints(points+5)
          setStatus('true');
          
      }else{
          setResult('dang bruh, you guess it wrong!!')
          setPoints(0)
          setStatus('false');

          if(lives > 0){
              setLives(lives-1)
          }else {
            setLives(3)
          }
      }

  }


    return (
      <button className="px-6 py-4 rounded hover:text-gray-200 
              bg-[#464141] text-white hover:bg-slate-800
              "
              onClick={(e)=>{
                  if(secretNumber && troll)
                  showSecretNumber()
                  else{
                    checkResult(e,secretNumber);
                    setValue(!value);
                  }
              }}
              >
        {text}
      </button>
    );
  };
  
  export default Button;
  
  Button.defaultProps = {
    text: 0
  };
  
