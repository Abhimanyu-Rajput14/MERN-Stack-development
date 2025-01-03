function debounce(searchFn, delay) {
  let id;
  return function optimisedFn(...args) {
    clearTimeout(id);
    id = setTimeout(() => {
      searchFn(...args);
    }, delay);
  };
}

function print(data) {
  console.log(data);
}
let printoptimised = debounce(print, 1000);
printoptimised("A");
printoptimised("Ab");
printoptimised("Abh");
printoptimised("Abhi");
