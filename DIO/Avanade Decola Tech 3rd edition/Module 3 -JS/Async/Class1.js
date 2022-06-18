const myPromise = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve("Resolvida!!")
    aguardo();
  }, 2000);
});

async function aguardo() {
  await myPromise
    .then((res) => console.log(res + " promisse concluída"))
    .then((res) => console.log(res + " agora acabou"))
    .catch((err) => console.log(err));
}
