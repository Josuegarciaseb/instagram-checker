const compareBtn = document.getElementById("compareBtn");
const followersFileInput = document.getElementById("followersFile");
const followingFileInput = document.getElementById("followingFile");

function readJsonFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        resolve(json);
      } catch (error) {
        reject("El archivo no contiene un JSON válido.");
      }
    };

    reader.onerror = () => {
      reject("Error al leer el archivo.");
    };

    reader.readAsText(file);
  });
}

compareBtn.addEventListener("click", async () => {
  const followersFile = followersFileInput.files[0];
  const followingFile = followingFileInput.files[0];

  if (!followersFile || !followingFile) {
    alert("Por favor selecciona ambos archivos.");
    return;
  }

  try {
    const followersData = await readJsonFile(followersFile);
    const followingData = await readJsonFile(followingFile);

    console.log("Followers JSON:", followersData);
    console.log("Following JSON:", followingData);
  } catch (error) {
    alert(error);
  }
});