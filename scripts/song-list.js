{
  album.songs.forEach( (song, index) => {
    const totalTime = player.prettyTime(song.duration);
    song.element = $(`
      <tr class='song-box'>
      <td>
      <button>
      <span class="song-number">${index + 1}</span>
      <span class="ion-play"></span>
      <span class="ion-pause"></span>
      </button>
      </td>
      <td>${song.title}</td>
      <td>${totalTime}</td>
      </tr>
      `);
      $('#song-list').append(song.element);


  song.element.on('click', event => {
    player.playPause(song);
    $('button#play-pause').attr('playState', player.playState);
  });
  // $('button#song-box').on('click', function() {
  //   alert('test');
  // });
});
}
