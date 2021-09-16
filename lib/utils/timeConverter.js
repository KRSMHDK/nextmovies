function timeConverter(n) {
  const num = n;
  const hours = num / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  if (rhours > 0) {
    return `${rhours}h ${rminutes}m`;
  }
  return `${rminutes}m`;
}

export default timeConverter;
