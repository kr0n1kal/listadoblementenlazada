class Nodo{
    public valor: number;
    public next: Nodo | null = null;
    public last: Nodo | null = null;

    constructor(){
        this.valor = Math.floor(Math.random()*9)+1;
    }
}

class ListaDoblementeEnlazada{
    private head: Nodo | null = null;
    private cola: Nodo | null = null;

    public insertar(): void{
        const nuevoNodo = new Nodo();

        if(this.head === null){
            this.head = nuevoNodo;
            this.cola = nuevoNodo;
        } else {
            nuevoNodo.last = this.cola;
            if(this.cola){
                this.cola.next = nuevoNodo;
            }
            this.cola = nuevoNodo;
        }
    }

    public imprimirPares(): void{
        let current = this.head;
        console.log("Numeros pares ingresados: ");
        while(current !== null){
            if(current.valor%2==0){
                console.log(current.valor);
            }
            current = current.next;
        }
    }
}

const lista = new ListaDoblementeEnlazada();
for(let i=0; i<5; i++){
    lista.insertar();
}
lista.imprimirPares();