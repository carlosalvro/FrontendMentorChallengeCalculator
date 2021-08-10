

var getTheme = () => {
  var th = document.getElementsByName('th');
  for (var i = 0, l=th.length; i < l; i++) {
    if (th[i].checked) {
      theme = th[i].value
      console.log(theme)
      break;
    }
  };
  return theme
}