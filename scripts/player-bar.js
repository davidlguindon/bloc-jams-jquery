{
  $('button#play-pause').on('click', function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });

  $('button#next').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });
  $('button#previous').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex - 1;
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });
  $('#time-control input').on('input', function(event) {
    player.skipTo(event.target.value);

  });$('#volume-control input').on('input', function(event) {
    player.setVolume(event.target.value);
  });

setInterval(() => {
  if (player.playState !== 'playing') {
    return;
  }

  const currentTime = player.getTime();
  var currentTime2 = Math.trunc(currentTime/60)
  currentTime2 += ':';
  if(Math.round(currentTime - Math.trunc(currentTime/60)*60)<10){
    currentTime2 += '0';
  }
  currentTime2 += Math.round(currentTime - Math.trunc(currentTime/60)*60);
  //
  const duration = player.getDuration();

  const percent = (currentTime / duration) * 100;
  $('#time-control .current-time').text(currentTime2);
  $('#time-control input').val(percent);
  const totalTime = player.prettyTime(player.getDuration());
  $('#time-control .total-time').text(totalTime);
}, 1000);
}
