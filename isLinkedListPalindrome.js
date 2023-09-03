/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function(head) {
    let linkedListLength = 0
        
    for(let curr = head; curr != null; curr = curr.next){
        linkedListLength++
    }

    function getValueAtIndex(index) {
        let i = 0;              
        let curr = head       
        while((i<=index) && (curr != null)){
            if(i==index){
                return curr.value
            }
            i++;    
            curr = curr.next
        }
    }

    for(let curr=head, i=0; i<linkedListLength/2; curr=curr.next, i++){
        if(curr.value != getValueAtIndex((linkedListLength - 1) - i)){
            return false
        }
    }
    return true
}