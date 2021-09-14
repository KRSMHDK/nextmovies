function colorScore(moviescore) {
  if (moviescore > 7) {
    return '#13e451';
  } else if (moviescore < 4) {
    return '#eb0808';
  } else {
    return '#f0bb0e';
  }
}

export default colorScore;
