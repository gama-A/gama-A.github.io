function sendMail(att1, att2, att3, att4) {
    const links = document.querySelectorAll("[data-att1][data-att2][data-att3][data-att4]");
    for (const link of links) {
        const attribute = link.dataset;
        link.setAttribute("href", 'mailto:${attribute.part1}@{attribute.part2}.com?subject=${attribute.part3)}?body={attribute.part4}')
    }
}

(function () {
    $('form > input, textarea').keyup(function () {

        var empty = false;

        $('input, textarea').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('subnewtopic').attr('disabled', 'disabled');
        } else {
            $('subnewtopic').attr('disabled');
        }
    });
})()