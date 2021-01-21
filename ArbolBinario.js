
class Nodo {
    /**se crea una clase que sera el nodo principal*/
    value = value;
    left = null;
    right = null;

    constructor(value) {
        this.value = value;
    }
}

class ArbolBinario  {
    constructor() {
        this.root = null;
    }

    add (value) {
        /**funcion que se encargar de agregar los valores */
        var nodo = {
            value: value,
            left: null,
            right: null
        }

        if (this.root === null) {
            this.root = nodo;
        } else {
            this.insert(nodo, this.root);
        }
    }

    insert(nodo, valorActual) {
        /**insertamos los valores y los ubicamos dependiendo la condicion */
        if (nodo.value < valorActual.value) {
            /**si el valor del nodo principal es mayor y el valor a insertar es menor este va a la izquierda y si es mayor va en la derecha. */
            if (valorActual.left === null) {
                valorActual.left = nodo;
            } else {
                this.insert(nodo, valorActual.left);
            }
        } else if (nodo.value > valorActual.value) {
            if (valorActual.right === null) {
                valorActual.right = nodo;
            } else {
                this.insert(nodo, valorActual.right);
            }
        }
    }

/**sentencias de recorrido de un arbol binario */
    postOrder(valorActual) {
        if (valorActual !== null) {
            postOrderHelper(valorActual.left);
            postOrderHelper(valorActual.right);   
            console.log(valorActual.value);
        }
    }

    preOrder(valorActual) {
        if (valorActual !== null) {
            console.log(valorActual.value);
            this.preOrder(valorActual.left);
            this.preOrder(valorActual.right);
        }
    }

    inOrder(valorActual) {
        if (valorActual !== null) {
            this.inOrder(valorActual.left);
            console.log(valorActual.value);
            this.inOrder(valorActual.right);
        }
    }
}


var arbol = new ArbolBinario(); /**intanciamos el objeto ArbolBinario y luego agregamos nuevos valores */


arbol.add(4);
arbol.add(2);
arbol.add(8);
arbol.add(1);
arbol.add(3);
arbol.add(9);

console.log(arbol); /**los mostramos por consola */

// arbol.preOrder();  /**problemas con esto :(*/
// arbol.inOrder();
// arbol.postOrder();