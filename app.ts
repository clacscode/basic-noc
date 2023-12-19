import { Server } from "./presentation/server";

// Funcion anonima autoinvocada asincrona
(async () => {
    main();
})();

function main() {
    Server.start();
}

