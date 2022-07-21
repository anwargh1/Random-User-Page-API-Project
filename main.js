let uploadedData = new APIManager();
$('.buttons button:first-child').click(function () {
  uploadedData.getAll();
});

$('.buttons button:last-child').click(function () {
  let renderData = new Renderer(uploadedData.response);
});
