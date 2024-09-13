import _ from 'lodash';

function AudioBlock ({src}) {
    let audio = new Audio(src)
  
    const start = () => {
      audio.play()
    }
  
    return (
      <div className="text-center">
        <button
            onClick={start}
            className="bg-sky-400 px-4 w-2/3 py-3 rounded rounded-md">
                Play Sound of this Pokemon!
            </button>
      </div>
    );
}

export default AudioBlock;