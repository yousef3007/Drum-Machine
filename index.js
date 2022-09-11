const bankOne = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
];
function App(){
    
    const [display,setDisplay] = React.useState("");
    document.addEventListener('keydown', (e) =>{
        const id = e.key.toUpperCase();
        const audio = document.getElementById(id);
        if(audio){
            let obj = bankOne.find(o => o.keyTrigger === id);
            setDisplay(obj.id);
            audio.play();
        }
    })
    return(
       <div id="drum-machine">
           <div class="grid">
                {bankOne.map((key) =>(
                    <div>
                        <button className="drum-pad" id={key.id} onClick={() => {
                            document.getElementById(key.keyTrigger).play();
                            setDisplay(key.id);
                        }}>{key.keyTrigger}
                            <audio id={key.keyTrigger} src={key.url} className="clip"></audio>
                        </button>
                    </div>
             ))}
            </div>
            <br />
            <br />
            <div id="display">
                <h1>{display}</h1>
            </div>
           
       </div>
    )
    
}


const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(<App />);