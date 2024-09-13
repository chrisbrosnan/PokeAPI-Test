function AudioBlock ({src, name}) {
    let audio = new Audio(src)
  
    const start = () => {
      audio.play()
    }
  
    return (
      <div>
        <button
            onClick={start}
            className="bg-sky-400 px-4 w-3/4 py-3 rounded rounded-md">
                Play Sound of ({name})
            </button>
      </div>
    );
}

export default AudioBlock;