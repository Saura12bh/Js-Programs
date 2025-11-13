//real time display zala pahije html chya page vr
//time dakhvaycha ahe tya sathi timing function use kraych tyat setInterval kran te awlyas excte hoto
setInterval(() => {
  //     jr date lagat asel tr he function use kraych
  //   document.getElementById("clk").innerText = new Date().toLocaleDateString();

  //jr real local time lagat asel tr he
  document.getElementById("clk").innerText = new Date().toLocaleTimeString();
}, 1000);
//1 sec mhnje 1000 mili sec
