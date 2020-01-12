// #######################################
//      Made by TrinTragula in 2017
// #######################################
function createRepoCard(i, l, n, d, u) {
    var html = '<div class="card">';
    html += '<div class="card-block">';
    html += '<h2 class="card-title">' + n + '</h2>';
    html += '<p class="card-text">' + (d || 'Nessuna descrizione') + '</p>';
    html += '<a style="color: black; padding: 1%;" href="' + u + '" target="_blank" class="btn btn-secondary"><i class="fa fa-github"></i> Go to Github</a>';
    html += '</div></div>';
    return html;
};
$(function () {
    // #######################################
    //     CHANGE THIS TO YOUR USERNAME
    // #######################################
    var username = "TrinTragula";
    var buttons = "";
    var select2buttons = "";
    $.ajax({
        url: "https://api.github.com/users/" + username + "/repos",
        method: "GET",
        success: function (json) {
            var groupedByLanguage = json.reduce(function (p, c) {
                if (!p[c.language]) p[c.language] = [];
                p[c.language].push(c);
                return p;
            }, {});
            var counter = 0;
            var total = 0;
            for (var index in groupedByLanguage) {
                total++;
            }
            var html = '<div class="tab github-container">';
            buttons = '<div class="button-cont" style="text-align: center; ' + ($(window).width() > 1300 ? "" : "display: none;") + '"><div "><i class="fa fa-2x fa-github"></i></div>';
            for (var index in groupedByLanguage) {
                buttons += '<button class="language-link ' + (index == "JavaScript" ? "active" : "") + '" data-language="' + index.replace(/\W/g, '_') +
                    '" style="' +
                    (counter == 0 ? "border-left: 1px solid #ccc; border-radius: 7px 0px 0px 7px; " : "") +
                    (counter == (total - 1) ? "border-right: 1px solid #ccc; border-radius:0px 7px 7px 0px;" : "") + '">';
                buttons += index;
                buttons += '</button>';
                counter++;
            }
            buttons += '</div><div>';

            select2buttons = '<div class="select2-cont" style="text-align: center; padding: 1%; ' + ($(window).width() <= 1300 ? "" : "display: none;") + '"><div "><i class="fa fa-2x fa-github"></i></div>';
            select2buttons += '<select class="github-dropdown" style="width: 50%;">';
            for (var index in groupedByLanguage) {
                select2buttons += '<option ' + (index == "JavaScript" ? "selected" : "") + ' value="' + index.replace(/\W/g, '_') + '" class="language-link" style="' +
                    (counter == 0 ? "border-left: 1px solid #ccc; border-radius: 7px 0px 0px 7px; " : "") +
                    (counter == (total - 1) ? "border-right: 1px solid #ccc; border-radius:0px 7px 7px 0px;" : "") + '">';
                select2buttons += index;
                select2buttons += '</option>';
                counter++;
            }
            select2buttons += '</select></div><div>';

            html += buttons;
            html += select2buttons;
            for (var index in groupedByLanguage) {
                var repos = groupedByLanguage[index];
                html += '<div class="pane" id="' + index.replace(/\W/g, '_') + '" ' +
                    (index == "JavaScript" ? "" : "style='display: none;'") + '>';
                for (var i in repos) {
                    var repo = repos[i];
                    if (!repo.fork) {
                        var url = repo.svn_url;
                        var name = repo.name;
                        var desc = repo.description;
                        var card = createRepoCard(i, index, name, desc, url);
                        html += card;
                    }
                }
                html += '</div>';
            }
            html += '</div></div>';
            $("#github").append(html);
            $('.github-dropdown').select2({
                width: 'resolve',
                minimumResultsForSearch: -1
            });

            $(".language-link").on("click", function (e) {
                e.preventDefault();
                $(".language-link").removeClass("active");
                $(".pane").hide();
                $("#" + $(this).data("language")).show();
                $(this).addClass("active");
            });
            $('.github-dropdown').on("change", function (e) {
                e.preventDefault();
                var language = $('.github-dropdown').val();
                $(".language-link").removeClass("active");
                $(".pane").hide();
                $("#" + language).show();
                $(".language-link[data-language=" + language + "]").addClass("active");
            });

            window.onresize = function (event) {
                if ($(window).width() > 1300) {
                    $(".button-cont").show();
                    $(".select2-cont").hide();
                } else {
                    $(".button-cont").hide();
                    $(".select2-cont").show();
                }
            };
        }
    });
});