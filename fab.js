var apiKey = "?api_key=RGAPI-95712264-cff2-467a-9e09-ffed6dfa177c";

$(document).ready(function () {
  $("button").click(function () {
    $.getJSON(
      "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/B2%20Byss" +
        apiKey,
      function (result) {
        console.log(result);
        console.log(result.id);
        var id = result.id;
        $("#pseudo5").html("<b>" + result.name);
        $("#niveau5").html(result.summonerLevel);

        $.getJSON(
          "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/" +
            id +
            apiKey,
          function (resultRank) {
            console.log(resultRank[0].tier);
            console.log(resultRank[1].tier);

            switch (resultRank[0].tier) {
              case "IRON":
                $("#solo5").html(
                  "<img class='' data-caption='Tu pues la merde quoi' width='250' src='images/Emblem_Iron.png'>" +
                    "<br> " +
                    resultRank[0].rank +
                    " - " +
                    resultRank[0].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[0].wins +
                    " / L" +
                    resultRank[0].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[0].wins * 100) /
                        (resultRank[0].wins + resultRank[0].losses)
                    ) +
                    "%"
                );
                break;
              case "BRONZE":
                $("#solo5").html(
                  "<img class='' data-caption='Toujours nul du coup' width='250' src='images/Emblem_Bronze.png'>" +
                    "<br> " +
                    resultRank[0].rank +
                    " - " +
                    resultRank[0].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[0].wins +
                    " / L" +
                    resultRank[0].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[0].wins * 100) /
                        (resultRank[0].wins + resultRank[0].losses)
                    ) +
                    "%"
                );
                break;
              case "SILVER":
                $("#solo5").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Silver.png'>" +
                    "<br> " +
                    resultRank[0].rank +
                    " - " +
                    resultRank[0].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[0].wins +
                    " / L" +
                    resultRank[0].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[0].wins * 100) /
                        (resultRank[0].wins + resultRank[0].losses)
                    ) +
                    "%"
                );
                break;
              case "GOLD":
                $("#solo5").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Gold.png'>" +
                    "<br> " +
                    resultRank[0].rank +
                    " - " +
                    resultRank[0].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[0].wins +
                    " / L" +
                    resultRank[0].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[0].wins * 100) /
                        (resultRank[0].wins + resultRank[0].losses)
                    ) +
                    "%"
                );
                break;
              case "3wdRdtbqQhc62iT8sIbbqyx4t5maWwWaYAvJJUH6PoUcmN4":
                $("#solo5").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Platinum.png'>" +
                    "<br> " +
                    resultRank[0].rank +
                    " - " +
                    resultRank[0].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[0].wins +
                    " / L" +
                    resultRank[0].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[0].wins * 100) /
                        (resultRank[0].wins + resultRank[0].losses)
                    ) +
                    "%"
                );
                break;
              case "DIAMOND":
                $("#solo5").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Diamond.png'>" +
                    "<br> " +
                    resultRank[0].rank +
                    " - " +
                    resultRank[0].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[0].wins +
                    " / L" +
                    resultRank[0].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[0].wins * 100) /
                        (resultRank[0].wins + resultRank[0].losses)
                    ) +
                    "%"
                );
                break;
              case "MASTER":
                $("#solo5").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Master.png'>" +
                    "<br> " +
                    resultRank[0].rank +
                    " - " +
                    resultRank[0].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[0].wins +
                    " / L" +
                    resultRank[0].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[0].wins * 100) /
                        (resultRank[0].wins + resultRank[0].losses)
                    ) +
                    "%"
                );
                break;
              case "GRANDMASTER":
                $("#solo5").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Grandmaster.png'>" +
                    "<br> " +
                    resultRank[0].rank +
                    " - " +
                    resultRank[0].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[0].wins +
                    " / L" +
                    resultRank[0].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[0].wins * 100) /
                        (resultRank[0].wins + resultRank[0].losses)
                    ) +
                    "%"
                );
                break;
              case "CHALLENGER":
                $("#solo5").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Challenger.png'>" +
                    "<br> " +
                    resultRank[0].rank +
                    " - " +
                    resultRank[0].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[0].wins +
                    " / L" +
                    resultRank[0].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[0].wins * 100) /
                        (resultRank[0].wins + resultRank[0].losses)
                    ) +
                    "%"
                );
                break;
            }

            switch (resultRank[1].tier) {
              case "BRONZE":
                $("#flex5").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Bronze.png'>" +
                    "<br> " +
                    resultRank[1].rank +
                    " - " +
                    resultRank[1].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[1].wins +
                    " / L" +
                    resultRank[1].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[1].wins * 100) /
                        (resultRank[1].wins + resultRank[1].losses)
                    ) +
                    "%"
                );
                break;
              case "SILVER":
                $("#flex5").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Silver.png'>" +
                    "<br> " +
                    resultRank[1].rank +
                    " - " +
                    resultRank[1].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[1].wins +
                    " / L" +
                    resultRank[1].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[1].wins * 100) /
                        (resultRank[1].wins + resultRank[1].losses)
                    ) +
                    "%"
                );
                break;
              case "GOLD":
                $("#flex5").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Gold.png'>" +
                    "<br> " +
                    resultRank[1].rank +
                    " - " +
                    resultRank[1].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[1].wins +
                    " / L" +
                    resultRank[1].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[1].wins * 100) /
                        (resultRank[1].wins + resultRank[1].losses)
                    ) +
                    "%"
                );
                break;
              case "PLATINUM":
                $("#flex5").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Platinum.png'>" +
                    "<br> " +
                    resultRank[1].rank +
                    " - " +
                    resultRank[0].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[1].wins +
                    " / L" +
                    resultRank[1].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[1].wins * 100) /
                        (resultRank[1].wins + resultRank[1].losses)
                    ) +
                    "%"
                );
                break;
              case "DIAMOND":
                $("#flex5").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Diamond.png'>" +
                    "<br> " +
                    resultRank[1].rank +
                    " - " +
                    resultRank[1].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[1].wins +
                    " / L" +
                    resultRank[1].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[1].wins * 100) /
                        (resultRank[1].wins + resultRank[1].losses)
                    ) +
                    "%"
                );
                break;
              case "MASTER":
                $("#flex5").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Master.png'>" +
                    "<br> " +
                    resultRank[1].rank +
                    " - " +
                    resultRank[1].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[1].wins +
                    " / L" +
                    resultRank[1].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[1].wins * 100) /
                        (resultRank[1].wins + resultRank[1].losses)
                    ) +
                    "%"
                );
                break;
              case "GRANDMASTER":
                $("#flex5").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Grandmaster.png'>" +
                    "<br> " +
                    resultRank[1].rank +
                    " - " +
                    resultRank[1].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[1].wins +
                    " / L" +
                    resultRank[1].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[1].wins * 100) /
                        (resultRank[1].wins + resultRank[1].losses)
                    ) +
                    "%"
                );
                break;
              case "CHALLENGER":
                $("#flex5").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Challenger.png'>" +
                    "<br> " +
                    resultRank[1].rank +
                    " - " +
                    resultRank[1].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[1].wins +
                    " / L" +
                    resultRank[1].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[1].wins * 100) /
                        (resultRank[1].wins + resultRank[1].losses)
                    ) +
                    "%"
                );
                break;
              case "IRON":
                $("#flex5").html(
                  "<img class='' data-caption='Bon va falloir bosser quoi' width='100' src='images/Emblem_Iron.png'>" +
                    "<br> " +
                    resultRank[1].rank +
                    " - " +
                    resultRank[1].leaguePoints +
                    "LP" +
                    "<br>" +
                    "W" +
                    resultRank[1].wins +
                    " / L" +
                    resultRank[1].losses +
                    "<br> Winrate: " +
                    Math.round(
                      (resultRank[1].wins * 100) /
                        (resultRank[1].wins + resultRank[1].losses)
                    ) +
                    "%"
                );
                break;
            }
          }
        );
      }
    );
  });
});