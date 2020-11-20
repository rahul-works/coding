let heap = [];

function insertHeap(val) {
    curr = heap.push(val) - 1;
    parent = Math.floor((curr - 1) / 2);
    while (parent >= 0) {
        if (heap[parent] > heap[curr]) {
            const t = heap[curr];
            heap[curr] = heap[parent];
            heap[parent] = t;
        }
        curr = parent;
        parent = Math.floor((curr - 1) / 2);
    }
}

function deleteHeap() {
    const t = heap[0];
    heap[0] = heap[heap.length - 1];
    heap[heap.length - 1] = t;

    const retItem = heap.pop();
    let curr = 0;
    let l = 2 * curr + 1
    let r = l + 1;
    while (l < heap.length || r < heap.length) {
        if (l < heap.length && r < heap.length) {
            if (heap[l] < heap[r]) {
                if (l < heap.length && heap[l] < heap[curr]) {
                    const t = heap[curr];
                    heap[curr] = heap[l];
                    heap[l] = t;
                    curr = l;
                }
            } else {
                if (r < heap.length && heap[r] < heap[curr]) {
                    const t = heap[curr];
                    heap[curr] = heap[r];
                    heap[r] = t;
                    curr = r;
                }
            }
        } else if (l < heap.length && heap[l] < heap[curr]) {
            const t = heap[curr];
            heap[curr] = heap[l];
            heap[l] = t;
            curr = l;
        } else if (r < heap.length && heap[r] < heap[curr]) {
            const t = heap[curr];
            heap[curr] = heap[r];
            heap[r] = t;
            curr = r;
        }
        l = 2 * curr + 1
        r = l + 1;
    }
    return retItem;
}

function peek() {
    return heap[0];
}

insertHeap(10);
insertHeap(4);
insertHeap(15);
console.log(heap);
console.log(deleteHeap());
insertHeap(20);
insertHeap(30);
console.log(heap);
console.log(deleteHeap());
console.log(heap);
insertHeap(2);
insertHeap(4);
insertHeap(-1);
insertHeap(-3);
console.log(heap);
console.log(peek());