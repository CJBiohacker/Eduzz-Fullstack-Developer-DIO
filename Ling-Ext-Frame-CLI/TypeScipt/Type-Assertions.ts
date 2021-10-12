// TYPE ASSERTION
// Algumas vezes você terá informação sobre o tipo de um valor que o TypeScript não faz ideia de qual seja. Por exemplo, se você está usando 
// o método 'document.getElementById, o TS sabe apenas que este irá retornar algum tipo de Elemento HTML, porém você poderia saber que sua página
// sempre terá um método HTMLCanvasElement com um determinado ID. Nessa situação, é possível usar um 'type assertion' ou 'afirmação do tipo' para
// especificar ainda mais um 'tipo'. Isso pode ser feito através da palavra reservada 'as'.

const input = document.getElementById('text-box') as HTMLInputElement;

input.addEventListener('text-box', (event) => {
    const i = event.currentTarget as HTMLInputElement;

    console.log(i.value);
});