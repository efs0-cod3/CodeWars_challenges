function evaporator(content, evap_per_day, threshold) {
  let days = 0; // var to return
  let per = 100; // content

  while (per > threshold) {
    // while content > threshold
    per = per - per * (evap_per_day / 100); //content = content - content * (evp / 100)
    days += 1; // increase day
  }
  return days;
}
