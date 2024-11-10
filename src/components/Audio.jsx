
function AudioPlayer({path}) {
    return (
      <div className=" " >
        <audio controls>
          <source src={path} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }

export default AudioPlayer;