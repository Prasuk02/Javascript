class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this._length = 0;
    }

    insertEnd(value){
        if(!this.head){
            this.head = {data: value, next: null};
            this.tail = this.head;
            this._length++;
        }
        else{
            this.tail.next = {data: value, next: null};
            this.tail = this.tail.next;
            this._length++
        }
    }

    displayData(){
        if(this.head){
            for(let currentValue = this.head; currentValue !== null; currentValue = currentValue.next){
                console.log(currentValue.data)
            }
        }
        else{
            console.log('Currently linked list is empty, try using insertEnd method to add new value to linked list')
        }
    }

    insertBegin(value){
        if(!this.head){
            this.insertBegin(value)
        }
        else{
            let new_head = {data: value, next: null};
            new_head.next = this.head;
            this.head = new_head;
            this._length++;
        }
    }

    insertPosition(index_pos, value){
        if(index_pos <= this._length && index_pos >= 0){
            let i = 0;
            let data_prev_to_given_index_pos;
            for(let currentValue = this.head; i<index_pos; currentValue=currentValue.next){
                if(i == index_pos - 1){
                    console.log('enterd **************', i)
                    console.log('currentValue: ',currentValue)
                    data_prev_to_given_index_pos = currentValue
                }
                i++
            }
            let data_to_insert = {data: value, next: null};
            data_to_insert.next = data_prev_to_given_index_pos.next;
            data_prev_to_given_index_pos.next = data_to_insert; 
            this._length++
        }
        else{
            console.log(`Invalid position, enter position value >= 0 or < ${this._length}`)
        }
    }
}

const linkedList = new LinkedList()
console.log('*** LINKED LIST CREATED ***')
linkedList.insertEnd(5)
linkedList.insertEnd('Prasuk Jain')
linkedList.insertBegin('Hello World')
linkedList.insertPosition(1, 'data')
linkedList.insertPosition(4, 'data end')
console.log('length: ',linkedList._length)
console.log('head: ',linkedList.head)
linkedList.displayData()