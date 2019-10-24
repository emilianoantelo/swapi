

export default function getData(_url, _showResults, _showError) {
    $.ajax(_url)
        .done(function (data) {
            _showResults(data);
        })
        .fail(function (error) {
            _showError(error);
        });
}