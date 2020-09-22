document.addEventListener("DOMContentLoaded", () => {


  let params = (new URL(window.document.location)).searchParams;
  let id = params.get("id");
  console.log(id)


});
