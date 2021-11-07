d3.selectAll("body").on("change", updateDisney);

// function updatePage() {
//   var dropdownMenu = d3.selectAll("#selectOption").node();
//   var dropdownMenuID = dropdownMenu.id;
//   var selectedOption = dropdownMenu.value;

//   console.log(dropdownMenuID);
//   console.log(selectedOption);
// };
function updateDisney() {
    var dropdownMenu = d3.selectAll("#disneyOption").node();
    var dropdownMenuID = dropdownMenu.id;
    var disneyOption = dropdownMenu.value;

    console.log(dropdownMenuID);
    console.log(disneyOption);
};
