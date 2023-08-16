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
            this.insertEnd(value)
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
                    data_prev_to_given_index_pos = currentValue
                }
                i++
            }
            if(index_pos == 0){
                let newHeadData = {data: value, next: null}
                newHeadData.next = this.head;
                this.head = newHeadData
            }
            else{
                let data_to_insert = {data: value, next: null};
                data_to_insert.next = data_prev_to_given_index_pos.next;
                data_prev_to_given_index_pos.next = data_to_insert; 
                if(index_pos == this._length){
                    this.tail = data_to_insert
                }
            }
            this._length++
        }
        else{
            console.log(`Invalid position, enter position value >= 0 or <= ${this._length}`)
        }
    }

    deleteBegin(){
        let next_data_to_head = this.head.next;
        this.head = next_data_to_head;
        this._length--;
    }

    deleteEnd(){
        let newTail;
        for(let currentValue = this.head, i = 0; i<this._length - 1; i++, currentValue = currentValue.next){
            if(i == this._length - 2){
                newTail = currentValue;
                break
            }
        }
        this.tail = newTail;
        this.tail.next = null
        this._length--
    }

    deletePosition(index_pos){
        if(index_pos >= this._length){
            console.log('Error, node not available at this index position')
            return
        }
        if(index_pos === 0){
            let newHead = this.head.next
            this.head = newHead
        }
        else{
            let data_prev_of_index_pos;
            for(let currentNode = this.head, i=0; i<index_pos; currentNode = currentNode.next, i++){
                if(i === index_pos-1){
                    data_prev_of_index_pos = currentNode;
                }
            }
            data_prev_of_index_pos.next = data_prev_of_index_pos.next.next;
            if(index_pos == this._length - 1){
                this.tail = data_prev_of_index_pos;
            }
        }
        this._length--
    }
}

const linkedList = new LinkedList()
linkedList.insertEnd(1)
linkedList.insertEnd(2)
linkedList.insertEnd(4)
linkedList.insertEnd(5)
linkedList.insertEnd(6)
linkedList.insertPosition(2, 3)

// linkedList.insertBegin('Hello World')
// linkedList.deletePosition(3)
// linkedList.deleteEnd(3)
// linkedList.deleteBegin(3)
// linkedList.reorderList()
linkedList.displayData()
console.log(linkedList)
// console.log('head: ',linkedList.head)
// console.log('tail: ',linkedList.tail)
// console.log('length: ',linkedList._length)
