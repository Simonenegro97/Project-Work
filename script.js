// Funzione per scaricare i file PDF
function scarica(nomeFile) {
  // Crea un elemento <a> per simulare il click su un link
  const link = document.createElement('a');
  // Imposta il percorso del file da scaricare
  link.href = 'https://projectwork.simonenegro.it/Report/' + nomeFile;
  // Imposta il nome del file da scaricare
  link.download = nomeFile;
  // Aggiunge il link temporaneamente al DOM
  document.body.appendChild(link);
  // Simula il click per avviare il download
  link.click();
  // Rimuove il link dopo il download
  document.body.removeChild(link);
}