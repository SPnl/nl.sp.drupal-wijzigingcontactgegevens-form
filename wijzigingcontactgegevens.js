(function ($) {

    function wijzigingcontactgegevens_postcode_lookup() {
        var postcode = $('#edit-postcode').val();
        var huisnummer = $('#edit-huisnummer').val();
        var country_id = $('#edit-land').val();
        $.ajax({
            url: Drupal.settings.wijzigingcontactgegevens.postcode_lookup_url,
            method: "GET",
            data: {
                postcode: postcode,
                huisnummer: huisnummer,
                country_id: country_id
            },
            dataType: "json",
            success: function (data) {
                $('#edit-straat').val(data.straat);
                $('#edit-woonplaats').val(data.woonplaats);
            }
        });
    }

    Drupal.behaviors.wijzigingcontactgegevens = {
        attach: function (context, settings) {
            $('#edit-postcode', context).change(wijzigingcontactgegevens_postcode_lookup);
            $('#edit-huisnummer', context).change(wijzigingcontactgegevens_postcode_lookup);
            $('#edit-land', context).change(wijzigingcontactgegevens_postcode_lookup);
        }
    };

}(jQuery));