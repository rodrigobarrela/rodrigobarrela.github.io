// add toggle functionality to abstract and bibtex buttons
$(document).ready(function() {
    function toggleEntrySection($trigger, sectionClass, otherSectionClass) {
        var $entry = $trigger.closest('.research-entry, li');

        $entry.find('.' + sectionClass + '.hidden').first().toggleClass('open');
        $entry.find('.' + otherSectionClass + '.hidden.open').removeClass('open');
    }

    $('a.abstract').click(function(event) {
        event.preventDefault();
        toggleEntrySection($(this), 'abstract', 'bibtex');
    });

    $('a.bibtex').click(function(event) {
        event.preventDefault();
        toggleEntrySection($(this), 'bibtex', 'abstract');
    });

    $('a').removeClass('waves-effect waves-light');
});

// bootstrap-toc
$(document).ready(function () {
    if($('#toc-sidebar').length){
        var navSelector = "#toc-sidebar";
        var $myNav = $(navSelector);
        Toc.init($myNav);
        $("body").scrollspy({
            target: navSelector,
        });
    }
});
