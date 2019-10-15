import crossroads from "crossroads";
import homeController from "./controllers/homeController.js";
import peopleController from "./controllers/peopleController.js";
import storageController from "./controllers/storageController.js";
import contactController from "./controllers/contactController.js";

function router() {
  crossroads.addRoute("", function() {
    console.log("Home page");
    $("#root").load("./partials/home.html", homeController);
  });

  crossroads.addRoute("#/people", function() {
    console.log("People page");
    $("#root").load("./partials/people.html", peopleController);
  });

  crossroads.addRoute("#/local-storage", function() {
    console.log("Storage page");
    $("#root").load("./partials/local-storage.html", storageController);
  });

  crossroads.addRoute("#/contact", function() {
    console.log("contact page");
    $("#root").load("./partials/contact.html", contactController);
  });

  // En cada cambio del # va a verificar las rutas
  $(window).on("hashchange", function() {
    crossroads.parse(window.location.hash);
  });

  crossroads.parse(window.location.hash);
}

export default router;
